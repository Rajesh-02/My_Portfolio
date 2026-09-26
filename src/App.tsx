import { createElement, type ReactNode } from "react"
import questImage from "./assets/devices/quest.jpg"
import spatialDisplayImage from "./assets/devices/spatial-display.jpg"
import tabletImage from "./assets/devices/tablet.jpg"
import visionProImage from "./assets/devices/vision-pro.jpg"
import resumeUrl from "./imports/Rajesh_Kumar_M_Resume.pdf"

type IconName = "arrow" | "code" | "cube" | "database" | "github" | "linkedin" | "mail" | "spark" | "terminal"

const skills = [
  {
    icon: "code" as IconName,
    title: "Frontend engineering",
    text: "React.js, TypeScript, Context API, React Router, Material UI",
  },
  {
    icon: "database" as IconName,
    title: "Backend & data",
    text: "Node.js, Express.js, REST APIs, JWT, RBAC, Nodemailer",
  },
  {
    icon: "spark" as IconName,
    title: "Database & cloud",
    text: "MongoDB, SQL, Azure App Service, Blob Storage, Cosmos DB, AWS",
  },
  {
    icon: "cube" as IconName,
    title: "Delivery & tooling",
    text: "Git, Azure DevOps, CI/CD pipelines, Postman, Jira, Agile",
  },
]

const projects = [
  {
    number: "01",
    eyebrow: "MERN · Enterprise product",
    title: "Smart Worker Suite",
    text: "A field-operations platform with a visual workflow builder, user and license management, billing, reporting, remote assistance, and production-ready access control.",
    impact: "Reusable workflows + real-time remote support",
    tags: ["React Flow", "Node.js", "MongoDB", "Twilio WebRTC"],
    className: "project-coral",
  },
  {
    number: "02",
    eyebrow: "AI product · React",
    title: "AI-Powered Form Builder",
    text: "A CRM-native form builder that replaces generic form tools with AI-assisted creation and automatically maps submitted data back to the right CRM records.",
    impact: "From AI-assisted creation to connected CRM data",
    tags: ["React.js", "AI-assisted UI", "CRM", "Axios"],
    className: "project-mint",
  },
]

const experience = [
  {
    period: "March 2024 — Present",
    role: "Associate Software Engineer",
    company: "Bangalore, India",
    description:
      "Architecting and delivering a production MERN application for internal field operations while collaborating with product owners and business analysts in Agile sprints.",
    highlights: [
      "Developed reusable React components across multiple product modules",
      "Optimized MongoDB queries with filtering, pagination, and selective retrieval",
      "Implemented secure JWT authentication and role-based access control",
      "Integrated Azure CI/CD for automated, zero-downtime deployments",
    ],
  },
]

const devices = [
  {
    name: "Meta Quest",
    type: "VR · Head-mounted",
    image: questImage,
    alt: "White virtual reality headset representing Meta Quest development",
    credit: "Photo: Remy Gieling / Unsplash",
  },
  {
    name: "Apple Vision Pro",
    type: "MR · Spatial computing",
    image: visionProImage,
    alt: "Apple Vision Pro mixed reality headset on a table",
    credit: "Photo: Roméo A. / Unsplash",
  },
  {
    name: "Tablets",
    type: "AR · Mobile field use",
    image: tabletImage,
    alt: "Person using a tablet device",
    credit: "Photo: Patrick Schneider / Unsplash",
  },
  {
    name: "Sony Spatial Reality Display",
    type: "3D · Glasses-free display",
    image: spatialDisplayImage,
    alt: "Curved display showing a three-dimensional space scene",
    credit: "Photo: Gavin Phillips / Unsplash",
  },
]

function Heading({
  as = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3"
  className?: string
  children: ReactNode
}) {
  return createElement(as, { className }, children)
}

function Link({
  href,
  className = "",
  children,
  label,
}: {
  href: string
  className?: string
  children: ReactNode
  label?: string
}) {
  return createElement("a", { href, className, "aria-label": label }, children)
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    cube: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 21v-8.9" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    github: (
      <path d="M15 22v-3.9c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2 0-1.4-.5-2.5-1.3-3.4.1-.3.6-1.6-.1-3.3 0 0-1.1-.3-3.6 1.3a12.4 12.4 0 0 0-6.5 0C6.2 2.9 5.1 3.2 5.1 3.2c-.7 1.7-.2 3-.1 3.3-.8.9-1.3 2-1.3 3.4 0 4.8 2.9 5.9 5.7 6.2-.4.3-.7.9-.8 1.7-.7.3-2.6.9-3.7-1.1 0 0-.7-1.3-2-1.4 0 0-1.3 0-.1.8 0 0 .9.4 1.5 1.8 0 0 .8 2.5 4.3 1.7V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 4-2Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3 10.4 8.4 5 10l5.4 1.6L12 17l1.6-5.4L19 10l-5.4-1.6L12 3Z" />
        <path d="m5 3-.6 2.4L2 6l2.4.6L5 9l.6-2.4L8 6l-2.4-.6L5 3Z" />
        <path d="m19 16-.7 2.3-2.3.7 2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3M13 15h4" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string
  title: string
  text?: string
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{label}</span>
      <Heading className="section-title">{title}</Heading>
      {text && <p className="section-copy">{text}</p>}
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <Link className="brand" href="#top" label="Home">
            <span className="brand-mark">RK</span>
            <span className="brand-name">Rajesh Kumar M</span>
          </Link>
          <div className="nav-links">
            <Link href="#work">Work</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#about">About</Link>
          </div>
          <Link className="button button-small" href="#contact">
            Let&apos;s talk <Icon name="arrow" size={16} />
          </Link>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              Open to full-time opportunities
            </div>
            <Heading as="h1" className="hero-title">
              Building secure products from{" "}
              <span className="gradient-text">
                interface to infrastructure.
              </span>
            </Heading>
            <p className="hero-description">
              I&apos;m Rajesh, a MERN Stack Developer with 2+ years of
              experience delivering scalable web applications, reusable React
              systems, secure APIs, and cloud deployments.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">
                View selected work <Icon name="arrow" />
              </Link>
              <Link className="button button-ghost" href={resumeUrl}>
                Download résumé
              </Link>
            </div>
            <div className="hero-proof">
              <div>
                <strong>2+</strong>
                <span>Years in MERN</span>
              </div>
              <div>
                <strong>9.40</strong>
                <span>B.Tech CGPA</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Cloud platforms</span>
              </div>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Interactive technology visual"
          >
            <div className="visual-grid" />
            <div className="orbit orbit-one">
              <span className="orbit-node" />
            </div>
            <div className="orbit orbit-two">
              <span className="orbit-node" />
            </div>
            <div className="core">
              <div className="core-icon">
                <Icon name="terminal" size={30} />
              </div>
              <span>Primary expertise</span>
              <strong>MERN</strong>
            </div>
            <div className="tech-chip chip-ai">
              <Icon name="spark" size={16} /> AI interfaces
            </div>
            <div className="tech-chip chip-xr">
              <Icon name="cube" size={16} /> XR skills
            </div>
            <div className="tech-chip chip-api">
              <Icon name="database" size={16} /> Scalable APIs
            </div>
          </div>
        </section>

        <section className="capabilities-section">
          <div className="container">
            <SectionIntro
              label="What I bring"
              title="A complete MERN delivery toolkit."
              text="My primary strength is building reliable full-stack products—from polished React interfaces to secure APIs, databases, and cloud delivery."
            />
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon">
                    <Icon name={skill.icon} />
                  </div>
                  <Heading as="h3">{skill.title}</Heading>
                  <p>{skill.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section container" id="work">
          <SectionIntro
            label="Selected work"
            title="Products I have helped shape."
            text="Work is the proof: these are the products, features, and technical problems I have directly built or solved."
          />
          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={`project-card ${project.className}`}
                key={project.number}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <Heading as="h3">{project.title}</Heading>
                  <p>{project.text}</p>
                  <div className="impact">
                    <span className="impact-mark">↗</span>
                    {project.impact}
                  </div>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <Link
                  className="project-link"
                  href="#contact"
                  label={`View ${project.title} case study`}
                >
                  <Icon name="arrow" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="container experience-layout">
            <div className="experience-heading">
              <SectionIntro
                label="Experience"
                title="Where I applied those skills."
                text="Experience is the professional context: my role, responsibilities, collaboration, and delivery inside an engineering team."
              />
              <Link className="text-link" href={resumeUrl}>
                Get my full résumé <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.period}>
                  <span className="timeline-dot" />
                  <span className="timeline-period">{job.period}</span>
                  <Heading as="h3">{job.role}</Heading>
                  <p className="company">{job.company}</p>
                  <p>{job.description}</p>
                  <ul>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="xr-section" id="xr">
          <div className="container">
            <div className="xr-heading">
              <div>
                <span className="eyebrow">Secondary expertise · XR</span>
                <Heading className="section-title">
                  Beyond the browser, into spatial computing.
                </Heading>
              </div>
              <p>
                Alongside my core MERN work, I have hands-on exposure to AR, VR,
                and MR experiences across headsets, tablets, and glasses-free
                spatial displays.
              </p>
            </div>
            <div className="device-grid">
              {devices.map((device, index) => (
                <article
                  className={`device-card device-${index + 1}`}
                  key={device.name}
                >
                  <img src={device.image} alt={device.alt} />
                  <div className="device-overlay">
                    <span>{device.type}</span>
                    <Heading as="h3">{device.name}</Heading>
                    <small>{device.credit}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section container" id="about">
          <div className="about-card">
            <div className="about-monogram">RK</div>
            <div className="about-copy">
              <span className="eyebrow">A little about me</span>
              <Heading>Full-stack by focus. Spatial by curiosity.</Heading>
              <p>
                I combine a strong MERN foundation with an interest in AI
                interfaces and immersive technology. I enjoy translating complex
                business workflows into clear, secure, and maintainable products
                while continuously exploring what comes next.
              </p>
              <div className="about-meta">
                <span>Chennai, Tamil Nadu</span>
                <span>B.Tech IT · Karpagam College of Engineering</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <span className="eyebrow">Let&apos;s connect</span>
            <Heading>Building something meaningful?</Heading>
            <p>
              I&apos;m looking for a full-time MERN or full-stack engineering
              role where I can contribute production experience and keep growing
              with an ambitious team.
            </p>
            <div className="contact-actions">
              <Link
                className="button button-light"
                href="mailto:rajeshmarakkannu1998@gmail.com"
              >
                <Icon name="mail" /> Email Rajesh
              </Link>
              <div className="socials">
                <Link
                  href="https://www.linkedin.com/in/rajesh0211"
                  label="Rajesh's LinkedIn profile"
                >
                  <Icon name="linkedin" />
                </Link>
                <Link
                  href="mailto:rajeshmarakkannu1998@gmail.com"
                  label="Email Rajesh"
                >
                  <Icon name="mail" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Rajesh Kumar M</span>
        <span>Designed & built with intention.</span>
      </footer>
    </div>
  )
}
