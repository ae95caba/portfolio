class Project {
  name: string;
  description: string;
  thumbnail: string;
  technologies: Array<string>;
  repository: string;
  live: string;

  constructor(
    name: string,
    description: string,
    thumbnail: string,
    technologies: Array<string>,
    repository: string,
    live: string
  ) {
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.technologies = technologies;
    this.repository = repository;
    this.live = live;
  }
}

const DulceTentacionClient = new Project(
  "Dulce Tentacion Client",
  "Es una pagina web para un local real, tiene varios usuarios semanales. La función principal es generar un recibo con toda la información relevante, ahorrándole tiempo a local y a sus clientes.",

  new URL("./dulce-tentacion.png", import.meta.url).href,
  ["GatsbyJS", "SCSS", "Google Analytics"],
  "https://github.com/ae95caba/dulce-tentacion-gatsby",
  "https://dulce-tentacion-mp.netlify.app/"
);

const RefrigeracionMariano = new Project(
  "Refrigeracion Mariano",
  "Es una landing page para una agencia de arreglos de aires acondicionados, sirve como template para cualquier otro tipo de landing page simple. ",
  new URL("./refrigeracion-mariano.png", import.meta.url).href,
  ["Gatsby", "SCSS", "GraphQL"],
  "https://github.com/ae95caba/portfolio",
  "https://andreespinozadev.netlify.app/"
);

const DulceTentacionAdminDashboard = new Project(
  "Dulce Tentacion Admin Dashboard",
  "Desde aca se administra la API de Dulce Tentacion, ademas de poder hacer todas las operaciones CRUD (create, read,update y delete), sirve para generar imágenes con la info de la base de datos, estas se usan en los estados de la empresa. Ademas de esto, planeo agregarle una sección donde pueda ver los clientes del ultimo mes, productos mas vendidos y otras estadísticas, todo usando whatsapp-web.js.",
  new URL("./dulce-tentacion-admin.png", import.meta.url).href,
  ["ReactJS", "SCSS", "TypeScript"],
  "https://github.com/ae95caba/dulce-tentacion-admin",
  "https://dulce-tentacion-admin.netlify.app/"
);

const DulceTentacionAPI = new Project(
  "Dulce Tentacion API",
  "Esta es la API que alimenta al cliente Dulce Tentacion, ademas de las tecnologías mencionadas abajo, uso JSON webtokens para el loggeo de usuarios, Helmet, bcrypt y otros para una mayor seguridad del sitio",
  new URL("./api.svg", import.meta.url).href,
  ["ExpressJS", "Mongoose", "MongoDB Atlas"],
  "https://github.com/ae95caba/dulce-tentacion-api",
  "https://colossal-zorah-dasfg2t4gdfsgs.koyeb.app/"
);

const projectsArr = [
  DulceTentacionClient,

  DulceTentacionAdminDashboard,
  DulceTentacionAPI,
  RefrigeracionMariano,
];

export default projectsArr;
