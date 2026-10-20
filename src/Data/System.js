import entretenimentoImage from '../img/Entrertanimento-Web.jpg';
import TelaInicialImage from '../img/Tela-Inicial.jpg';
import Login from '../img/LoginImage.jpg';
import Cadastro from '../img/CadastroImage.jpg';
import Quiz from '../img/QuizPython.jpg';
import Calculadora from '../img/Calculadora.jpg';
import HotelWorld from '../img/HotelWorld3.png';

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
      'É um Protótipo focado para Entretanimento criado em 2023 no início do 2º Semestre da Faculdade com a duração de 1 Semana de desenvolvimento, utilizando as únicas tecnologias disponíveis. Possui uma interface simples e intuitiva, permitindo que os usuários explorem diferentes formas de entretenimento, como filmes, séries, livros e jogos. O protótipo foi desenvolvido com o objetivo de proporcionar uma experiência agradável e envolvente para os usuários. P.S.S: O protótipo não possui funcionalidades avançadas, mas serve como uma demonstração do conceito e da ideia por trás do projeto.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: entretenimentoImage,
    url: 'https://github.com/Rafaelpcostaa/Entreterimento-Web-Prototipo',
    siteUrl: '',
  },
  {
    title: 'Tela Inicial do EconFinder',
    type: 'Educação',
    description:
      'Tirada no TCC onde o Tema era COP-30, A tela inicail do EconFinder é o ponto de partida para os usuários explorarem o aplicativo. Ela apresenta uma interface amigável e intuitiva, com elementos visuais atraentes que refletem o tema do projeto. A tela inicial oferece opções de navegação claras, permitindo que os usuários acessem facilmente as diferentes funcionalidades do aplicativo. Além disso, ela pode incluir informações relevantes, como uma breve descrição do propósito do EconFinder e instruções para começar a utilizá-lo.P.S.S: Para entende melhor o projeto, é necessário acessar o trailer completo no YouTube, que está disponivel no Repositório, pois a tela inicial é apenas uma parte do aplicativo.',
    technologies: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript'],
    image: TelaInicialImage,
    url: 'https://github.com/Rafaelpcostaa/Tela_Inicial.git',
    siteUrl: '',
  },
  {
    title: 'Calculadora',
    type: 'Educação',
    description:
      'É uma Calculadora simples, mas funcional, que permite aos usuários realizar operações matemáticas básicas de forma rápida e eficiente. A calculadora possui uma interface intuitiva, com botões claramente identificados para cada operação, facilitando a interação do usuário. Além disso, ela oferece recursos adicionais, como a capacidade de lidar com números decimais e realizar cálculos consecutivos sem a necessidade de reiniciar a aplicação.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: Calculadora,
    url: 'https://github.com/Rafaelpcostaa/Calculadora.git',
    siteUrl: '',
  },
  {
    title: 'Hotel World',
    type: 'Aplicativo de Hospedagem',
    description:
      'É um aplicativo de hospedagem que permite aos usuários pesquisar e reservar quartos em hotéis. O aplicativo oferece uma interface intuitiva, com opções de filtro e ordenação para facilitar a busca por alojamentos adequados. Além disso, ele inclui recursos como avaliações de hotéis, fotos, e informações detalhadas sobre as comodidades disponíveis.',
    technologies: ['Flutter', 'Dart',],
    image: HotelWorld,
    url: 'https://github.com/Rafaelpcostaa/Calculadora.git',
    siteUrl: 'https://mega.nz/file/yCBAGB6I#_04qPUxyOBaClln0bvZtp3puh_DlGgxT5Ygnn3N2y18',
  },
  {
    title: 'Login',
    type: 'Visualização',
    description:
      'Como parte do TCC, foi desenvolvida uma interface de autenticação flexível e de fácil usabilidade. A tela possui design minimalista aliado a recursos interativos, destacando-se as animações de foco nos campos de entrada de credenciais. O sistema conta ainda com validação de formulário, assegurando a integridade dos dados obrigatórios antes da submissão. O protótipo atual atua como uma demonstração conceitual, validando a lógica de interface e a arquitetura visual proposta para o projeto.',
    technologies: ['React', 'Vite', 'HTML','CSS', 'JavaScript'],
    image: Cadastro,
    url: 'https://github.com/Rafaelpcostaa/Cadastro',
    siteUrl: 'https://cadastro-blush.vercel.app/',
  },
  {
    title: 'Quiz em Python',
    type: 'Programação',
    description:
      'Utilizando a Linguagem Python, foi criado um Quiz de perguntas e respostas sem a necessidade de uma interface gráfica, apenas no terminal. O Quiz é projetado para testar o conhecimento dos usuários em diferentes tópicos, oferecendo uma experiência interativa e envolvente. Ele apresenta uma série de perguntas de múltipla escolha, permitindo que os usuários selecionem suas respostas e recebam feedback imediato sobre seu desempenho.',
    technologies: ['Python',],
    image: Quiz,
    url: 'https://github.com/Rafaelpcostaa/Quiz.git',
    siteUrl: '',
  },
]

const subject = encodeURIComponent("Contato através do Portfólio");


const message = encodeURIComponent("Olá Rafael, vi o seu portfólio e gostaria de conversar sobre uma oportunidade.");

const usarGmail = true; // Defina como true se você deseja usar o Gmail, caso contrário, defina como false

export { profile, projects, subject, message, usarGmail };