import React, { useState, useRef } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  allowedTypes?: string[];
  maxFileSize?: number; // in MB
  multiple?: boolean;
  label?: string;
}

interface UploadedFile {
  id: string;
  file: File;
  status: 'uploading' | 'success' | 'error';
  progress: number;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileUpload, 
  allowedTypes = ['application/pdf', 'image/*', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  maxFileSize = 10, // 10MB default
  multiple = false,
  label = 'Last opp fil(er)'
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): { isValid: boolean; error?: string } => {
    // Check file size
    const maxSizeInBytes = maxFileSize * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      return {
        isValid: false,
        error: `Filen er for stor. Maks tillatt størrelse er ${maxFileSize}MB`
      };
    }

    // Check file type
    if (allowedTypes.length > 0) {
      const isAllowed = allowedTypes.some(type => {
        if (type.includes('*')) {
          // Handle wildcard types like 'image/*'
          const generalType = type.split('/')[0];
          return file.type.startsWith(generalType);
        }
        return file.type === type;
      });

      if (!isAllowed) {
        return {
          isValid: false,
          error: `Filtypen ${file.type} er ikke tillatt`
        };
      }
    }

    return { isValid: true };
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      processFiles(files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      processFiles(files);
    }
  };

  const processFiles = (files: File[]) => {
    const filesToProcess = multiple ? files : [files[0]]; // Only take first if not multiple

    filesToProcess.forEach(file => {
      const validation = validateFile(file);
      
      if (!validation.isValid) {
        setUploadedFiles(prev => [
          ...prev,
          {
            id: `file-${Date.now()}-${Math.random()}`,
            file,
            status: 'error',
            progress: 0,
            error: validation.error
          }
        ]);
        return;
      }

      // Add file to upload list
      const newFile: UploadedFile = {
        id: `file-${Date.now()}-${Math.random()}`,
        file,
        status: 'uploading',
        progress: 0
      };
      
      setUploadedFiles(prev => [...prev, newFile]);
      
      // Simulate upload process
      simulateUpload(newFile);
    });
  };

  const simulateUpload = (file: UploadedFile) => {
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === file.id 
            ? { ...f, progress: Math.min(progress, 100) } 
            : f
        )
      );

      if (progress >= 100) {
        clearInterval(interval);
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === file.id 
              ? { ...f, status: 'success' } 
              : f
          )
        );
        
        // Call the callback when upload is complete
        onFileUpload(file.file);
      }
    }, 200);
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="file-upload">
      <div 
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple={multiple && !isDragging}
          style={{ display: 'none' }}
          aria-label={label}
        />
        
        <div className="upload-content">
          <div className="upload-icon">📁</div>
          <p className="upload-text">
            <span className="upload-highlight">Klikk for å velge</span> eller dra filer hit
          </p>
          <p className="upload-hint">
            Tillatte filtyper: {allowedTypes.join(', ')} | Maks størrelse: {maxFileSize}MB
          </p>
        </div>
      </div>
      
      {uploadedFiles.length > 0 && (
        <div className="uploaded-files">
          <h4>Opplastede filer</h4>
          <ul>
            {uploadedFiles.map(file => (
              <li key={file.id} className={`file-item ${file.status}`}>
                <div className="file-info">
                  <div className="file-icon">📄</div>
                  <div className="file-details">
                    <div className="file-name">{file.file.name}</div>
                    <div className="file-size">{formatFileSize(file.file.size)}</div>
                  </div>
                </div>
                
                <div className="file-status">
                  {file.status === 'uploading' && (
                    <div className="upload-progress">
                      <div 
                        className="progress-bar"
                        style={{ width: `${file.progress}%` }}
                      />
                      <span className="progress-text">{file.progress}%</span>
                    </div>
                  )}
                  
                  {file.status === 'success' && (
                    <span className="status-success">✅ Ferdig</span>
                  )}
                  
                  {file.status === 'error' && (
                    <span className="status-error">❌ Feil: {file.error}</span>
                  )}
                </div>
                
                <button 
                  className="remove-file"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(file.id);
                  }}
                  aria-label={`Fjern fil ${file.file.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;