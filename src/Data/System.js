const profile = {
  name: 'Rafael Costa',
  role: 'Desenvolvedor Full Stack',
  email: 'rafaelpcostaa@gmail.com',
  location: 'Brasil',
  availability: 'Disponível para oportunidades',
  bio: 'Sou desenvolvedor apaixonado por tecnologia e por criar produtos digitais que fazem diferença. Gosto de transformar problemas em soluções simples, úteis e bem construídas.',
  technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#(Sharp)', 'C++', 'Dart', 'Flutter','Angular', 'React', 'Vite' ,'Vue.js', 'Node.js', 'HTML & CSS', 'Git', 'SQL'],
  github: 'https://github.com/Rafaelpcostaa',
  linkedin: 'https://www.linkedin.com/in/rafaelpcostaa',
}

// Coloque as imagens em public/images e informe o caminho em image, por exemplo:
// image: '/images/entreterimento.png'.
const projects = [
  {
    title: 'Entreterimento-Web-Prototipo',
    type: 'Aplicação web',
    description:
      'Dashboard para acompanhar despesas, visualizar métricas e organizar as finanças em um só lugar.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    url: 'https://github.com/Rafaelpcostaa/Entreterimento-Web-Prototipo',
  },
  {
    title: 'Tela Inicial do EconFinder',
    type: 'Educação',
    description:
      'Loja online responsiva com busca de produtos, filtros e uma experiência de compra simples.',
    technologies: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript'],
    image: '',
    url: 'https://github.com/Rafaelpcostaa/Tela_Inicial.git',
  },
  {
    title: 'Login',
    type: 'Produtividade',
    description:
      'Aplicativo para organizar tarefas e acompanhar o andamento de projetos em equipe.',
    technologies: ['React', 'Vite','HTML','CSS', 'JavaScript'],
    image: '',
    url: 'https://github.com/Rafaelpcostaa/Login',
  },
  {
    title: 'Cadastro',
    type: 'API REST',
    description:
      'Serviço para consultar dados meteorológicos e obter previsões por cidade.',
    technologies: ['React', 'Vite', 'HTML','CSS', 'JavaScript'],
    image: '',
    url: 'https://github.com/Rafaelpcostaa/Cadastro',
  },
]

const subject = encodeURIComponent("Contato através do Portfólio");


const message = encodeURIComponent("Olá Rafael, vi o seu portfólio e gostaria de conversar sobre uma oportunidade.");

const usarGmail = true; // Defina como true se você deseja usar o Gmail, caso contrário, defina como false

export { profile, projects, subject, message, usarGmail };