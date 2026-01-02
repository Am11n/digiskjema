import React, { useState, useEffect } from 'react';

interface FormAnalytics {
  id: string;
  title: string;
  submissions: number;
  views: number;
  conversionRate: number; // percentage
  avgCompletionTime: number; // in minutes
  completionRate: number; // percentage
  lastSubmitted: string;
}

interface UserAnalytics {
  totalUsers: number;
  activeUsers: number;
  newUsersThisMonth: number;
  userSatisfaction: number; // percentage
}

interface SystemAnalytics {
  totalForms: number;
  totalSubmissions: number;
  avgFormSize: number;
  systemUptime: number; // percentage
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
  }[];
}

const AdvancedAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const [loading, setLoading] = useState(true);
  const [formAnalytics, setFormAnalytics] = useState<FormAnalytics[]>([]);
  const [userAnalytics, setUserAnalytics] = useState<UserAnalytics | null>(null);
  const [systemAnalytics, setSystemAnalytics] = useState<SystemAnalytics | null>(null);
  const [submissionsData, setSubmissionsData] = useState<ChartData | null>(null);
  const [completionData, setCompletionData] = useState<ChartData | null>(null);

  // Mock data initialization
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock form analytics data
      const mockFormAnalytics: FormAnalytics[] = [
        {
          id: 'form-1',
          title: 'Kontaktskjema',
          submissions: 124,
          views: 189,
          conversionRate: 65.6,
          avgCompletionTime: 3.2,
          completionRate: 92.3,
          lastSubmitted: '2024-01-15T14:30:00'
        },
        {
          id: 'form-2',
          title: 'Tilbakemeldingsskjema',
          submissions: 89,
          views: 156,
          conversionRate: 57.1,
          avgCompletionTime: 4.7,
          completionRate: 87.2,
          lastSubmitted: '2024-01-15T12:15:00'
        },
        {
          id: 'form-3',
          title: 'Bestillingsskjema',
          submissions: 42,
          views: 78,
          conversionRate: 53.8,
          avgCompletionTime: 6.1,
          completionRate: 78.4,
          lastSubmitted: '2024-01-14T16:45:00'
        },
        {
          id: 'form-4',
          title: 'Søknadsskjema',
          submissions: 156,
          views: 201,
          conversionRate: 77.6,
          avgCompletionTime: 8.3,
          completionRate: 94.1,
          lastSubmitted: '2024-01-15T10:20:00'
        }
      ];

      // Mock user analytics data
      const mockUserAnalytics: UserAnalytics = {
        totalUsers: 1247,
        activeUsers: 342,
        newUsersThisMonth: 42,
        userSatisfaction: 87.3
      };

      // Mock system analytics data
      const mockSystemAnalytics: SystemAnalytics = {
        totalForms: 89,
        totalSubmissions: 1247,
        avgFormSize: 12.4,
        systemUptime: 99.8
      };

      // Mock chart data
      const mockSubmissionsData: ChartData = {
        labels: ['Uke 1', 'Uke 2', 'Uke 3', 'Uke 4'],
        datasets: [
          {
            label: 'Innsendelser',
            data: [45, 58, 62, 78],
            backgroundColor: 'rgba(0, 102, 204, 0.6)'
          }
        ]
      };

      const mockCompletionData: ChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
        datasets: [
          {
            label: 'Fullføringsrate',
            data: [78, 82, 79, 85, 88, 87],
            backgroundColor: 'rgba(35, 117, 227, 0.6)'
          }
        ]
      };

      setFormAnalytics(mockFormAnalytics);
      setUserAnalytics(mockUserAnalytics);
      setSystemAnalytics(mockSystemAnalytics);
      setSubmissionsData(mockSubmissionsData);
      setCompletionData(mockCompletionData);
      setLoading(false);
    }, 1000);
  }, [timeRange]);

  if (loading) {
    return (
      <div className="advanced-analytics">
        <h2>Laster analyser...</h2>
      </div>
    );
  }

  return (
    <div className="advanced-analytics">
      <div className="analytics-header">
        <h2>Avanserte analyser</h2>
        <div className="time-range-selector">
          <label htmlFor="time-range">Tidsperiode:</label>
          <select
            id="time-range"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="time-range-input"
          >
            <option value="week">Siste uke</option>
            <option value="month">Siste måned</option>
            <option value="quarter">Siste kvartal</option>
            <option value="year">Siste år</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="key-metrics">
        <div className="metric-card">
          <h3>Totalt antall skjema</h3>
          <p className="metric-value">{systemAnalytics?.totalForms}</p>
          <p className="metric-trend">+5.2% siden forrige måned</p>
        </div>
        <div className="metric-card">
          <h3>Innsendelser</h3>
          <p className="metric-value">{systemAnalytics?.totalSubmissions}</p>
          <p className="metric-trend">+12.3% siden forrige måned</p>
        </div>
        <div className="metric-card">
          <h3>Brukertilfredshet</h3>
          <p className="metric-value">{userAnalytics?.userSatisfaction}%</p>
          <p className="metric-trend">+2.1% siden forrige måned</p>
        </div>
        <div className="metric-card">
          <h3>Systemtilgjengelighet</h3>
          <p className="metric-value">{systemAnalytics?.systemUptime}%</p>
          <p className="metric-trend">Stabil</p>
        </div>
      </div>

      {/* Charts */}
      <div className="analytics-charts">
        <div className="chart-container">
          <h3>Innsendelser over tid</h3>
          {submissionsData && (
            <div className="chart-placeholder">
              <div className="chart-legend">
                {submissionsData.datasets.map((dataset, index) => (
                  <div key={index} className="legend-item">
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: dataset.backgroundColor?.toString() || '#0066cc' }}
                    />
                    <span>{dataset.label}</span>
                  </div>
                ))}
              </div>
              <div className="chart-grid">
                {submissionsData.labels.map((label, index) => (
                  <div key={index} className="chart-bar">
                    <div 
                      className="bar-fill"
                      style={{ 
                        height: `${(submissionsData.datasets[0].data[index] / 100) * 100}px`,
                        backgroundColor: (typeof submissionsData.datasets[0].backgroundColor === 'string' 
                          ? submissionsData.datasets[0].backgroundColor 
                          : submissionsData.datasets[0].backgroundColor?.[0]) || '#0066cc'
                      }}
                    />
                    <span className="bar-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="chart-container">
          <h3>Fullføringsrate</h3>
          {completionData && (
            <div className="chart-placeholder">
              <div className="chart-legend">
                {completionData.datasets.map((dataset, index) => (
                  <div key={index} className="legend-item">
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: dataset.backgroundColor?.toString() || '#2375e3' }}
                    />
                    <span>{dataset.label}</span>
                  </div>
                ))}
              </div>
              <div className="chart-grid">
                {completionData.labels.map((label, index) => (
                  <div key={index} className="chart-bar">
                    <div 
                      className="bar-fill"
                      style={{ 
                        height: `${completionData.datasets[0].data[index]}px`,
                        backgroundColor: (typeof completionData.datasets[0].backgroundColor === 'string' 
                          ? completionData.datasets[0].backgroundColor 
                          : completionData.datasets[0].backgroundColor?.[0]) || '#2375e3'
                      }}
                    />
                    <span className="bar-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Form Performance Table */}
      <div className="form-performance">
        <h3>Skjemaytelse</h3>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Skjemanavn</th>
                <th>Innsendelser</th>
                <th>Visninger</th>
                <th>Konverteringsrate</th>
                <th>Fullføringsrate</th>
                <th>Gj.snittlig tid (min)</th>
                <th>Sist sendt</th>
              </tr>
            </thead>
            <tbody>
              {formAnalytics.map(form => (
                <tr key={form.id}>
                  <td>{form.title}</td>
                  <td>{form.submissions}</td>
                  <td>{form.views}</td>
                  <td>{form.conversionRate}%</td>
                  <td>{form.completionRate}%</td>
                  <td>{form.avgCompletionTime}</td>
                  <td>{new Date(form.lastSubmitted).toLocaleDateString('nb-NO')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Analytics */}
      <div className="user-analytics">
        <h3>Brukeranalyser</h3>
        <div className="user-metrics-grid">
          <div className="user-metric">
            <h4>Totalt antall brukere</h4>
            <p className="metric-value">{userAnalytics?.totalUsers}</p>
          </div>
          <div className="user-metric">
            <h4>Aktive brukere</h4>
            <p className="metric-value">{userAnalytics?.activeUsers}</p>
          </div>
          <div className="user-metric">
            <h4>Nye brukere denne måneden</h4>
            <p className="metric-value">{userAnalytics?.newUsersThisMonth}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;