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

const project1 = new Project(
  "Dulce Tentacion Client",
  "This is a online store page for a real bussiness. It fetches data from my API and is fully responsive",

  new URL("./dulce-tentacion.png", import.meta.url).href,
  ["Gatsby", "ReactJS", "SCSS"],
  "https://github.com/ae95caba/dulce-tentacion-gatsby",
  "https://dulce-tentacion-mp.netlify.app/"
);

const project2 = new Project(
  "Portfolio",
  "This is the code for this page. Its fully responsive on most devices. Technologies used are listed below. ",
  new URL("../../../public/portfolio.png", import.meta.url).href,
  ["ReactJS", "SCSS", "TypeScript"],
  "https://github.com/ae95caba/portfolio",
  "https://andreespinozadev.netlify.app/"
);

const project3 = new Project(
  "Milei Marcos Paz",
  "It's a landing page for a politician, It showcases a lot of text about his proposals and projects. It has a minimalisitc but yet elegant design ",
  new URL("./milei-mp.png", import.meta.url).href,
  ["ReactJS", "SCSS", "TypeScript"],
  "https://github.com/ae95caba/milei-mp",
  "https://milei-jose.netlify.app/"
);

const project4 = new Project(
  "Dulce Tentacion Admin Dashboard",
  "I use this page to do CRUD operations on the Dulce Tentacion Client's DB",
  new URL("./admin.svg", import.meta.url).href,
  ["ReactJS", "SCSS", "TypeScript"],
  "https://github.com/ae95caba/dulce-tentacion-admin",
  "https://dulce-tentacion-admin.netlify.app/"
);

const project5 = new Project(
  "Dulce Tentacion API",
  "This is the REST API what powers the Dulce Tentacion Client",
  new URL("./api.svg", import.meta.url).href,
  ["ExpressJS", "Mongoose", "MongoDB Atlas"],
  "https://github.com/ae95caba/dulce-tentacion-api",
  "https://colossal-zorah-dasfg2t4gdfsgs.koyeb.app/"
);

const projectsArr = [project1, project2, project3, project4, project5];

export default projectsArr;
