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
  "Dulce Tentacion",
  "This is a online store for a real bussiness. It fetches the products from firebaseDb, has responsive design  and also a shopping cart ",
  new URL("./dulce-tentacion.png", import.meta.url).href,
  ["ReactJS", "SCSS", "Firebase"],
  "https://github.com/ae95caba/dulce-tentacion",
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
  "This is a real page I've made for a politician, I showcases a lot of text about this proposals and projects. It has a minimalisitc but yet elegant design ",
  new URL("./milei-mp.png", import.meta.url).href,
  ["ReactJS", "SCSS", "TypeScript"],
  "https://github.com/ae95caba/milei-mp",
  "https://milei-jose.netlify.app/"
);

const projectsArr = [project1, project2, project3];

export default projectsArr;
