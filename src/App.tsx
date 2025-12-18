import './App.css'
import { useState } from 'react'
import caltechLogo from './assets/caltech.jpg'
import linkedinLogo from './assets/linkedin.png'
import uberLogo from './assets/uber.jpg'
import agodaLogo from './assets/agoda.png'
import portrait from './assets/portrait.png'
import smilesforspeech from './assets/smilesforspeech.jpg'
import journeyai from './assets/journeyai.png'
import studygram from './assets/studygram.png'  

type ExperienceItem = {
  id: string
  label: string
  title: string
  company: string
  period: string
  details: string
  logoSrc: string
}

type SkillCategory = {
  id: string
  label: string
  pills: string[]
}

type ProjectItem = {
  id: string
  title: string
  tag: string
  summary: string
  impact: string
  tech: string[]
  linkLabel: string
  linkHref: string
  featured?: boolean
  imageSrc: string
  imageAlt: string
}

const experienceData: ExperienceItem[] = [
  {
    id: 'role-1',
    label: 'Backend',
    title: 'Software Engineer Intern',
    company: 'Uber',
    period: 'Sept 2025 – Nov 2025',
    details: 'Uber Eats - Payments',
    logoSrc: uberLogo
  },
  {
    id: 'role-2',
    label: 'Backend',
    title: 'Software Engineer Intern',
    company: 'LinkedIn',
    period: 'June 2025 – Sept 2025',
    details: 'LinkedIn Ads - Advertiser Values',
    logoSrc: linkedinLogo
  },
  {
    id: 'role-3',
    label: 'Full-stack',
    title: 'Software Engineer Intern',
    company: 'Agoda',
    period: 'Jan 2024 – May 2024',
    details: 'Trips - Database Visualization tool',
    logoSrc: agodaLogo
  },
  {
    id: 'role-4',
    label: 'Research',
    title: 'Software Engineer Intern',
    company: 'California Institute of Technology (Caltech)',
    period: 'Jan 2024 – May 2024',
    details: 'Computational Biology',
    logoSrc: caltechLogo
  }
]

const skillsByCategory: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    pills: [
      'C++',
      'Python',
      'Java',
      'JavaScript',
      'CSS',
      'HTML',
      'SQL',
      'TypeScript',
      'ASP.Net',
      'Scala',
      'YAML',
      'Shell',
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    pills: [
      'React',
      'GraphQL',
      'Node.js',
      'Tailwind',
      'REST APIs',
      'Scikit-learn',
      'Biopython',
      'Sphinx',
      'Agile',
    ],
  },
  {
    id: 'developer-tools',
    label: 'Developer Tools',
    pills: ['Git', 'AWS', 'Azure', 'DBeaver', 'CI/CD'],
  },
  {
    id: 'libraries',
    label: 'Libraries',
    pills: [
      'Apache Hadoop',
      'PyTorch',
      'Playwright',
      'PyTest',
      'Scikit-learn',
      'pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
    ],
  },
]

const projectData: ProjectItem[] = [
  {
    id: 'project-smiles',
    title: 'Smiles for Speech: Early Autism Detection Tool',
    tag: 'Hackathon',
    summary: 'Mobile-friendly web app helping parents in Ghana spot early signs of autism and access trusted resources.',
    impact: 'Guided screening + AI-suggested next steps to make early intervention more accessible where specialists are scarce.',
    tech: ['React', 'Firebase', 'Tailwind', 'Gemini API'],
    linkLabel: 'View case study',
    linkHref: 'https://devpost.com/software/smiles-for-speech-early-autism-detection-tool',
    featured: true,
    imageSrc: smilesforspeech,
    imageAlt: 'Parent holding child, soft teal background',
  },
  {
    id: 'project-studygram',
    title: 'Studygram',
    tag: 'Full-stack · Community',
    summary: 'Online community for students to share study resources, tips, and stay accountable together.',
    impact: 'Built feed, profiles, search, and file uploads so students can actually reuse and discover helpful study content.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    linkLabel: 'View on GitHub',
    linkHref: 'https://github.com/TamSuj/Studygram',
    imageSrc: studygram,
    imageAlt: 'Students studying with laptops and notebooks',
  },
  {
    id: 'project-journeyai',
    title: 'JourneyAI',
    tag: 'AI · Travel assistant',
    summary: 'One-click itinerary planner that generates interactive, map-based trips using Gemini-powered suggestions.',
    impact: 'Turns a few preferences into a structured, editable itinerary so friends can agree on plans faster.',
    tech: ['React', 'Gemini API', 'Map APIs', 'CSS'],
    linkLabel: 'View on GitHub',
    linkHref: 'https://github.com/TamSuj/JourneyAI',
    imageSrc: journeyai,
    imageAlt: 'JourneyAI landing page: Plan your trip in one click',
  },
]

function App() {

  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F2F2F7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', padding: '1rem' }}>
      {/* Make the picture circle and center it */}
      <div style={{ width: '100%', maxWidth: '28rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {/* Chat-style profile header */}
        <header className="chat-header">
          <div className="chat-header__avatar-wrap">
            <img
              src={portrait}
              alt="Tammy"
              className="chat-header__avatar"
            />
          </div>
          <div className="chat-header__main">
            <div className="chat-header__top-row">
              <span className="chat-header__name">Tammy Sujaritchai</span>
              <div className="chat-header__actions">
                <a
                  href="https://www.linkedin.com/in/tammy-suj/"
                  target="_blank"
                  rel="noreferrer"
                  className="chat-header__icon-button"
                  aria-label="Open LinkedIn profile"
                >
                  <img
                    src={linkedinLogo}
                    alt=""
                    className="chat-header__icon-image"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="mailto:gtsujaritchai@g.ucla.edu"
                  className="chat-header__icon-button"
                  aria-label="Send email"
                >
                  <span className="chat-header__icon-emoji">✉️</span>
                </a>
              </div>
            </div>
            <div className="chat-header__status-row">
              <span className="chat-header__status-dot" aria-hidden="true" />
              <span className="chat-header__status-text">Active now</span>
            </div>
          </div>
        </header>

        {/* Message 1 */}
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
            <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>Tap any card below 👇</p>
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
                    ? "Here's what I've worked on"
                    : selectedSection === 'Skills'
                      ? "Here's what I can do"
                    : selectedSection === 'Projects'
                      ? "Here's what I've built"
                      : ''}
                </p>
              </div>
            </div>

            {/* Experience section */}
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

            {/* Skills section */}
            {selectedSection === 'Skills' && (
              <>
                {skillsByCategory.map((category) => (
                  <div
                    key={category.id}
                    className="skills-category-row"
                    aria-label={category.label}
                  >
                    <div className="skills-category-card">
                      <header className="skills-category-header">
                        <h3 className="skills-category-title">{category.label}</h3>
                      </header>
                      <div className="skills-section__pills">
                        {category.pills.map((pill) => (
                          <span
                            key={`${category.id}-${pill}`}
                            className={`skills-pill skills-pill--${category.id}`}
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Projects section */}
            {selectedSection === 'Projects' && (
              <div className="projects-list">
                {projectData.map((project) => (
                  <article
                    key={project.id}
                    className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                  >
                    <div className="project-card__body">
                      <div className="project-card__media" aria-hidden="true">
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          className="project-card__image"
                        />
                      </div>
                      <div className="project-card__content">
                        {project.featured && (
                          <p className="project-card__tag">{project.tag}</p>
                        )}
                        {!project.featured && (
                          <p className="project-card__tag project-card__tag--subtle">
                            {project.tag}
                          </p>
                        )}
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__summary">{project.summary}</p>
                        <p className="project-card__impact">{project.impact}</p>
                        <div className="project-card__footer">
                          <div className="project-card__tech">
                            {project.tech.map((tech) => (
                              <span key={`${project.id}-${tech}`} className="project-tech-pill">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.linkHref}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                          >
                            {project.linkLabel}
                          </a>
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
