import About from './components/About';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Contact from './components/Contact';
import { projects } from './data/projects';
import { skills } from './data/skills';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <div id="home" />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Profile Image Section */}
          <div className={styles.imageWrapper}>
            <img
              src="/assets/me1.jpg" // Put your photo in public/images/
              alt="Puneeth Profile"
              className={styles.profileImg}
            />
            <div className={styles.imgOverlay}></div>
          </div>

          {/* Intro Text Section */}
          <div className={styles.introText}>
            <h1 className={styles.glitch} data-text="PUNEETH_v1.0">PUNEETH_v1.0</h1>
            <p className={styles.tagline}>SYSTEMS_ARCHITECT //</p>
            <p className={styles.description}>
              Master's student passionate about building <span>autonomous AI agents </span>
              and <span>Computer Vision</span> tools. When I'm not debugging Python,
              you'll find me on the basketball court.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#projects" className={styles.primaryBtn}>VIEW_WORKS</a>
              <a href="#contact" className={styles.secondaryBtn}>CONNECT</a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section (The Terminal) */}
      <section id="about"><About /></section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>[TECH_STACK]</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>[PROJECT_RECORDS]</h2>
        <div className={styles.grid}>
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              tech={proj.tech}
              GithubLink={proj.GithubLink}
              DemoLink={proj.DemoLink}
            />
          ))}
        </div>
      </section>
      <section id="contact"><Contact /></section>
      <footer className={styles.footer}>
        <p>© 2026 PUNEETH_SYS_v1.0 - ALL_RIGHTS_RESERVED</p>
      </footer>
    </main>
  );
}