import React, { useState, useEffect } from 'react';

interface FormStats {
  totalForms: number;
  totalSubmissions: number;
  pendingSubmissions: number;
  avgCompletionTime: number;
}

interface Form {
  id: string;
  title: string;
  submissions: number;
  lastModified: string;
  status: 'active' | 'draft' | 'archived';
}

interface Submission {
  id: string;
  formId: string;
  formTitle: string;
  submittedAt: string;
  status: 'draft' | 'submitted' | 'processed';
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<FormStats | null>(null);
  const [forms, setForms] = useState<Form[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data initialization
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalForms: 42,
        totalSubmissions: 1284,
        pendingSubmissions: 23,
        avgCompletionTime: 3.2 // minutes
      });

      setForms([
        {
          id: 'form-1',
          title: 'Kontaktskjema',
          submissions: 156,
          lastModified: '2024-01-15',
          status: 'active'
        },
        {
          id: 'form-2',
          title: 'Tilbakemeldingsskjema',
          submissions: 89,
          lastModified: '2024-01-14',
          status: 'active'
        },
        {
          id: 'form-3',
          title: 'Bestillingsskjema',
          submissions: 42,
          lastModified: '2024-01-10',
          status: 'draft'
        }
      ]);

      setSubmissions([
        {
          id: 'sub-1',
          formId: 'form-1',
          formTitle: 'Kontaktskjema',
          submittedAt: '2024-01-15T14:30:00',
          status: 'processed'
        },
        {
          id: 'sub-2',
          formId: 'form-2',
          formTitle: 'Tilbakemeldingsskjema',
          submittedAt: '2024-01-15T13:45:00',
          status: 'submitted'
        },
        {
          id: 'sub-3',
          formId: 'form-1',
          formTitle: 'Kontaktskjema',
          submittedAt: '2024-01-15T12:20:00',
          status: 'draft'
        }
      ]);

      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="admin-dashboard">
        <h2>Laster administrasjonspanel...</h2>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h2>Administrasjonspanel</h2>
      
      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Antall skjema</h3>
          <p className="stat-value">{stats?.totalForms}</p>
        </div>
        <div className="stat-card">
          <h3>Innsendte skjema</h3>
          <p className="stat-value">{stats?.totalSubmissions}</p>
        </div>
        <div className="stat-card">
          <h3>Venter på behandling</h3>
          <p className="stat-value">{stats?.pendingSubmissions}</p>
        </div>
        <div className="stat-card">
          <h3>Gj.snittlig tid</h3>
          <p className="stat-value">{stats?.avgCompletionTime} min</p>
        </div>
      </div>
      
      {/* Forms List */}
      <div className="section">
        <h3>Skjemaoversikt</h3>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tittel</th>
                <th>Innsendelser</th>
                <th>Sist endret</th>
                <th>Status</th>
                <th>Handlinger</th>
              </tr>
            </thead>
            <tbody>
              {forms.map(form => (
                <tr key={form.id}>
                  <td>{form.title}</td>
                  <td>{form.submissions}</td>
                  <td>{new Date(form.lastModified).toLocaleDateString('nb-NO')}</td>
                  <td>
                    <span className={`status-badge ${form.status}`}>
                      {form.status === 'active' ? 'Aktiv' : 
                       form.status === 'draft' ? 'Utkast' : 'Arkivert'}
                    </span>
                  </td>
                  <td>
                    <button className="action-button">Rediger</button>
                    <button className="action-button">Forhåndsvis</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recent Submissions */}
      <div className="section">
        <h3>Nylige innsendelser</h3>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Skjema</th>
                <th>Innsendt</th>
                <th>Status</th>
                <th>Handlinger</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(submission => (
                <tr key={submission.id}>
                  <td>{submission.formTitle}</td>
                  <td>{new Date(submission.submittedAt).toLocaleString('nb-NO')}</td>
                  <td>
                    <span className={`status-badge ${submission.status}`}>
                      {submission.status === 'draft' ? 'Utkast' : 
                       submission.status === 'submitted' ? 'Sendt inn' : 'Behandlet'}
                    </span>
                  </td>
                  <td>
                    <button className="action-button">Vis</button>
                    <button className="action-button">Rediger</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;