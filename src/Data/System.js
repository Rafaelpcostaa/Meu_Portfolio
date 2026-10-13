import entretenimentoImage from '../img/Entrertanimento-Web.jpg';
import TelaInicialImage from '../img/Tela-Inicial.jpg';
import Login from '../img/LoginImage.jpg';
import Cadastro from '../img/CadastroImage.jpg';

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
  },
  {
    title: 'Tela Inicial do EconFinder',
    type: 'Educação',
    description:
      'Tirada no TCC onde o Tema era COP-30, A tela inicail do EconFinder é o ponto de partida para os usuários explorarem o aplicativo. Ela apresenta uma interface amigável e intuitiva, com elementos visuais atraentes que refletem o tema do projeto. A tela inicial oferece opções de navegação claras, permitindo que os usuários acessem facilmente as diferentes funcionalidades do aplicativo. Além disso, ela pode incluir informações relevantes, como uma breve descrição do propósito do EconFinder e instruções para começar a utilizá-lo.P.S.S: Para entende melhor o projeto, é necessário acessar o trailer completo no YouTube, que está disponivel no Repositório, pois a tela inicial é apenas uma parte do aplicativo.',
    technologies: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript'],
    image: TelaInicialImage,
    url: 'https://github.com/Rafaelpcostaa/Tela_Inicial.git',
  },
  {
    title: 'Login',
    type: 'Visualização',
    description:
      'É um Protótipo em Login, que possui a facilidade de fazer um login e flexibilidade. Mesmo sendo Simples, ele possui alguns efeitos muitos interessantes, como a animação do botão de login, que é ativada quando o usuário passa o mouse sobre ele. Além disso, o protótipo também possui uma validação de formulário, que garante que os usuários preencham corretamente os campos obrigatórios antes de enviar o formulário. P.S.S: O protótipo não possui funcionalidades avançadas, mas serve como uma demonstração do conceito e da ideia por trás do projeto.',
    technologies: ['React', 'Vite','HTML','CSS', 'JavaScript'],
    image: Login,
    url: 'https://github.com/Rafaelpcostaa/Login',
  },
  {
    title: 'Cadastro',
    type: 'Visualização',
    description:
      'É um Protótipo de Cadastro retirado no TCC, que permite aos usuários criar contas e gerenciar suas informações. O protótipo oferece uma interface simples e intuitiva, facilitando o processo de registro. P.S.S: O protótipo não possui funcionalidades avançadas, mas serve como uma demonstração do conceito e da ideia por trás do projeto.',
    technologies: ['React', 'Vite', 'HTML','CSS', 'JavaScript'],
    image: Cadastro,
    url: 'https://github.com/Rafaelpcostaa/Cadastro',
  },
]

const subject = encodeURIComponent("Contato através do Portfólio");


const message = encodeURIComponent("Olá Rafael, vi o seu portfólio e gostaria de conversar sobre uma oportunidade.");

const usarGmail = true; // Defina como true se você deseja usar o Gmail, caso contrário, defina como false

export { profile, projects, subject, message, usarGmail };