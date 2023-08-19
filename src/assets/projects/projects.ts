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
  "This is a online store for a real bussiness. It has user authentication and a shopping cart ",
  new URL("./dulce-tentacion.png", import.meta.url).href,
  ["ReactJS", "SCSS", "Firebase"],
  "https://github.com/ae95caba/Project-shopping-cart",
  "https://dulce-tentacion-mp.netlify.app/"
);

const project2 = new Project(
  "Dulce Tentacion",
  "This is a online store for a real bussiness. It has user authentication and a shopping cart ",
  new URL("./thumbnail2.jpg", import.meta.url).href,
  ["ReactJS", "SCSS", "Firebase"],
  "https://github.com/ae95caba/Project-shopping-cart",
  "https://dulce-tentacion-mp.netlify.app/"
);

const projectsArr = [project1, project1];

export default projectsArr;
