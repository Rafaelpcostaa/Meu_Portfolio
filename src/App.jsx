import WindowDots from './Components/windowDosts';
import ProjectCard from './Components/projectCard';
import { profile, projects, subject, message, usarGmail } from './Data/System';

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Início">
          <span className="wordmark-icon">&lt;/&gt;</span> {profile.name.split(' ')[0].toLowerCase()}<span className="accent">.</span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a className="nav-contact" href="#contato">
            Contato <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> {profile.availability.toUpperCase()}
            </p>
            <h1>
              Olá, eu sou
              <br />
              <span className="hero-name">{profile.name}</span>
              <span className="hero-period">.</span>
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-description">
              Transformo ideias em aplicações web úteis, rápidas e acessíveis.
              Gosto de resolver problemas com código bem pensado.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#contato">
                Vamos conversar <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-stack">
              <span>TRABALHO COM</span>
              {profile.technologies.slice(0, 17).map((technology) => (
                <i key={technology}>{technology}</i>
              ))}
            </div>
          </div>

          <div className="hero-terminal" aria-label="Exemplo de código JavaScript">
            <div className="terminal-topbar">
              <WindowDots />
              <span>developer.js</span>
              <span className="terminal-menu">•••</span>
            </div>
            <div className="terminal-code">
              <p><span className="line-number">01</span><span className="code-purple">const</span> developer = {'{'}</p>
              <p><span className="line-number">02</span>&nbsp;&nbsp;name: <span className="code-green">'{profile.name}'</span>,</p>
              <p><span className="line-number">03</span>&nbsp;&nbsp;role: <span className="code-green">'{profile.role}'</span>,</p>
              <p><span className="line-number">04</span>&nbsp;&nbsp;skills: [</p>
              <p><span className="line-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'{profile.technologies[1]}'</span>,</p>
              <p><span className="line-number">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'{profile.technologies[2]}'</span></p>
              <p><span className="line-number">07</span>&nbsp;&nbsp;],</p>
              <p><span className="line-number">08</span>&nbsp;&nbsp;available: <span className="code-orange">true</span></p>
              <p><span className="line-number">09</span>{'}'}</p>
              <p className="terminal-cursor"><span className="line-number">10</span><span /></p>
            </div>
            <div className="terminal-status">
              <span><i /> all systems operational</span>
              <span>UTF-8 &nbsp; JavaScript</span>
            </div>
            <span className="terminal-orbit orbit-one" />
            <span className="terminal-orbit orbit-two" />
          </div>

          <div className="hero-bottom">
            <span>DESENVOLVIMENTO WEB · {profile.location.toUpperCase()}</span>
            <a href="#projetos">ROLE PARA EXPLORAR <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="work-section section-wrap" id="projetos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CÓDIGO QUE RESOLVE PROBLEMAS</p>
              <h2>Projetos<span className="accent">.</span></h2>
            </div>
          </div>
          <div className="project-meta-row">
            <p className="section-intro">
              Alguns projetos que construí.
              <br />
              Mais ideias em desenvolvimento.
            </p>
            <p className="project-repository-note">
              Clique no ícone (↗) para abrir o repositório do projeto no GitHub.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                total={projects.length}
              />
            ))}
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-inner section-wrap">
            <p className="eyebrow">UM POUCO SOBRE MIM</p>
            <div className="about-content">
              <h2>
                Curiosidade para aprender.
                <br />
                Código para <span>construir.</span>
              </h2>
              <div className="about-note">
                <p>{profile.bio}</p>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  Meu GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  Meu LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="skills-row" aria-label="Tecnologias e habilidades">
              {profile.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contato">
          <p className="eyebrow">TEM UM PROJETO EM MENTE?</p>
          <h2>
            Vamos tirar
            <br />
            do <span>papel.</span>
          </h2>
          <p className="contact-copy">
            Aberto a novas oportunidades, projetos e boas conversas.
          </p>
          <a className="button button-primary" 
          href={
            usarGmail ? `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${message}` : `mailto:${profile.email}?subject=${subject}&body=${message}`
             }
             target={usarGmail ? '_blank' : '_self'}
             rel={usarGmail ? 'noopener noreferrer' : ""}
             >
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-decoration" aria-hidden="true">{'{ }'}</span>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#inicio">
          <span className="wordmark-icon">&lt;/&gt;</span> {profile.name.split(' ')[0].toLowerCase()}<span className="accent">.</span>
        </a>
        <p>Feito com código e café · {new Date().getFullYear()}</p>
        <a href="#inicio">VOLTAR AO TOPO <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
