import './App.css'
import { useState } from 'react'
import caltechLogo from './assets/caltech.jpg'
import linkedinLogo from './assets/linkedin.png'
import uberLogo from './assets/uber.jpg'
import agodaLogo from './assets/agoda.png'

type ExperienceItem = {
  id: string
  label: string
  title: string
  company: string
  period: string
  details: string
  logoSrc: string
}

const experienceData: ExperienceItem[] = [
  {
    id: 'role-1',
    label: 'Backend',
    title: 'Software Engineer Intern',
    company: 'Uber',
    period: 'Sept 2025 – Nov 2025',
    details: 'Short one-line summary of what you worked on in this role.',
    logoSrc: uberLogo
  },
  {
    id: 'role-2',
    label: 'Backend',
    title: 'Software Engineer Intern',
    company: 'LinkedIn',
    period: 'June 2025 – Sept 2025',
    details: 'Another short one-line summary of your impact here.',
    logoSrc: linkedinLogo
  },
  {
    id: 'role-3',
    label: 'Full-stack',
    title: 'Software Engineer Intern',
    company: 'Agoda',
    period: 'Jan 2024 – May 2024',
    details: 'Optional brief description or focus of this position.',
    logoSrc: agodaLogo
  },
  {
    id: 'role-4',
    label: 'Research',
    title: 'Software Engineer Intern',
    company: 'California Institute of Technology (Caltech)',
    period: 'Jan 2024 – May 2024',
    details: 'Optional brief description or focus of this position.',
    logoSrc: caltechLogo
  }
]

function App() {

  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F2F2F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      {/* Make the picture circle and center it */}
        {/* <img src={portrait} alt="Tammy's portrait" className="w-1/2 h-1/2 rounded-full" /> */}

      <div style={{ width: '100%', maxWidth: '28rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {/* Message 1 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div 
            style={{ 
              backgroundColor: '#007AFF',
              color: 'white',
              borderRadius: '18px 18px 4px 18px',
              padding: '10px 16px',
              maxWidth: '75%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>Hi, I'm Tammy!</p>
          </div>
        </div>

        {/* Message 2 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div 
            style={{ 
              backgroundColor: '#007AFF',
              color: 'white',
              borderRadius: '18px 18px 4px 18px',
              padding: '10px 16px',
              maxWidth: '75%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>I'm a software engineer</p>
          </div>
        </div>

        {/* Message 3 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div 
            style={{ 
              backgroundColor: '#007AFF',
              color: 'white',
              borderRadius: '18px 18px 4px 18px',
              padding: '10px 16px',
              maxWidth: '75%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>Tap a card below 👇</p>
          </div>
        </div>

        {/* Typing indicator - left aligned, gray bubble */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div 
            style={{ 
              backgroundColor: '#E9E9EB',
              borderRadius: '18px 18px 18px 4px',
              padding: '10px 16px',
              maxWidth: '75%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '8px', justifyContent: 'center' }}>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        </div>

        {/* Cards section */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div className="card-stack">
            <button
              type="button"
              className="profile-card profile-card--left"
              onClick={() => setSelectedSection('Experience')}
            >
              <span className="profile-card__title">EXPERIENCE</span>
              <span className="profile-card__emoji">💼</span>
            </button>
            <button
              type="button"
              className="profile-card profile-card--center"
              onClick={() => setSelectedSection('Skills')}
            >
              <span className="profile-card__title">SKILLS</span>
              <span className="profile-card__emoji">💪</span>
            </button>
            <button
              type="button"
              className="profile-card profile-card--right"
              onClick={() => setSelectedSection('Projects')}
            >
              <span className="profile-card__title">PROJECTS</span>
              <span className="profile-card__emoji">🚀</span>
            </button>
          </div>
        </div>

        {/* Selected section bubble */}
        {selectedSection && (
          <>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <div
                style={{
                  backgroundColor: '#007AFF',
                  color: 'white',
                  borderRadius: '18px 18px 4px 18px',
                  padding: '10px 16px',
                  maxWidth: '75%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>
                  {selectedSection === 'Experience'
                    ? 'Here are some of my recent roles:'
                    : selectedSection}
                </p>
              </div>
            </div>

            {/* Experience cards list */}
            {selectedSection === 'Experience' && (
              <div className="experience-list">
                {experienceData.map((exp) => (
                  <article className="experience-card" key={exp.id}>
                    <div className="experience-card__body">
                      <div className="experience-logo" aria-hidden="true">
                        <img
                          src={exp.logoSrc}
                          alt={exp.company}
                          className="experience-logo__image"
                        />
                      </div>
                      <div className="experience-card__content">
                        <h3 className="experience-card__title">{exp.title}</h3>
                        <p className="experience-card__company">{exp.company}</p>
                        <p className="experience-card__period">{exp.period}</p>
                        <p className="experience-card__details">{exp.details}</p>
                        <div className="experience-card__label">
                          <span className="experience-pill">{exp.label}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
