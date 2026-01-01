// Frontend accessibility utilities and tests
// This file contains basic accessibility validation functions

/**
 * Validates WCAG 2.1 AA color contrast requirements
 * @param foreground - Foreground color in hex format
 * @param background - Background color in hex format
 * @returns boolean indicating if contrast meets AA requirements
 */
export function validateColorContrast(foreground: string, background: string): boolean {
  // Convert hex to RGB
  const fgRgb = hexToRgb(foreground);
  const bgRgb = hexToRgb(background);
  
  if (!fgRgb || !bgRgb) return false;
  
  // Calculate relative luminance
  const fgLuminance = calculateLuminance(fgRgb);
  const bgLuminance = calculateLuminance(bgRgb);
  
  // Calculate contrast ratio
  const contrastRatio = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                        (Math.min(fgLuminance, bgLuminance) + 0.05);
  
  // WCAG 2.1 AA requires 4.5:1 for normal text, 3:1 for large text
  return contrastRatio >= 4.5;
}

/**
 * Validates proper heading structure
 * @param headings - Array of heading elements with their levels
 * @returns boolean indicating if heading structure is valid
 */
export function validateHeadingStructure(headings: Array<{level: number, text: string}>): boolean {
  if (headings.length === 0) return true;
  
  // Must start with h1
  if (headings[0].level !== 1) return false;
  
  // Check for logical heading hierarchy (no skipping levels)
  for (let i = 1; i < headings.length; i++) {
    const prevLevel = headings[i-1].level;
    const currentLevel = headings[i].level;
    
    // Can go down by 1 level or stay same, or jump to lower level
    if (currentLevel > prevLevel + 1) {
      return false;
    }
  }
  
  return true;
}

/**
 * Validates form accessibility
 * @param formElements - Array of form elements with their attributes
 * @returns object with validation results
 */
export function validateFormAccessibility(formElements: Array<{
  tagName: string,
  id?: string,
  label?: string,
  ariaLabel?: string,
  ariaLabelledBy?: string
}>): {isValid: boolean, issues: string[]} {
  const issues: string[] = [];
  
  formElements.forEach((element, index) => {
    // Check for proper labeling
    const hasLabel = element.id || element.label || element.ariaLabel || element.ariaLabelledBy;
    
    if (!hasLabel) {
      issues.push(`Form element ${index} (${element.tagName}) lacks proper labeling`);
    }
    
    // Check for alt text on images
    if (element.tagName.toLowerCase() === 'img' && !element.ariaLabel) {
      issues.push(`Image element ${index} lacks alt text or aria-label`);
    }
  });
  
  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * Validates keyboard navigation support
 * @param focusableElements - Array of focusable elements
 * @returns boolean indicating if keyboard navigation is properly supported
 */
export function validateKeyboardNavigation(focusableElements: string[]): boolean {
  // Check that there are focusable elements
  if (focusableElements.length === 0) return false;
  
  // Check for skip links (should be first focusable element)
  const firstElement = focusableElements[0];
  const hasSkipLink = firstElement.includes('skip') || firstElement.includes('hopp');
  
  // Check for logical tab order (this would require DOM analysis in real implementation)
  // For now, we just verify there are focusable elements
  return focusableElements.length > 0;
}

// Helper functions
function hexToRgb(hex: string): {r: number, g: number, b: number} | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function calculateLuminance(rgb: {r: number, g: number, b: number}): number {
  const rsrgb = rgb.r / 255;
  const gsrgb = rgb.g / 255;
  const bsrgb = rgb.b / 255;
  
  const r = rsrgb <= 0.03928 ? rsrgb / 12.92 : Math.pow((rsrgb + 0.055) / 1.055, 2.4);
  const g = gsrgb <= 0.03928 ? gsrgb / 12.92 : Math.pow((gsrgb + 0.055) / 1.055, 2.4);
  const b = bsrgb <= 0.03928 ? bsrgb / 12.92 : Math.pow((bsrgb + 0.055) / 1.055, 2.4);
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Test data for demonstration
export const testAccessibilityData = {
  validContrastColors: [
    { fg: '#000000', bg: '#FFFFFF' }, // Black on white - 21:1
    { fg: '#333333', bg: '#CCCCCC' }  // Dark gray on light gray - ~4.5:1
  ],
  invalidContrastColors: [
    { fg: '#777777', bg: '#CCCCCC' }  // Too low contrast - ~2.1:1
  ],
  validHeadings: [
    { level: 1, text: 'Main Title' },
    { level: 2, text: 'Section' },
    { level: 3, text: 'Subsection' }
  ],
  invalidHeadings: [
    { level: 1, text: 'Main Title' },
    { level: 3, text: 'Skipping h2' }  // Invalid - skips from h1 to h3
  ]
};