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

  getDescriptionArr(): Array<string> {
    const chunks = [];
    for (let i = 0; i < this.description.length; i += 26) {
      chunks.push(this.description.slice(i, i + 26));
    }
    return chunks;
  }
}

const project1 = new Project(
  "Dulce Tentacion",
  "This is a online store for a real bussiness. It has user authentication and a shopping cart ",
  new URL("./dulce-tentacion.jpg", import.meta.url).href,
  ["ReactJS", "SCSS", "Firebase"],
  "https://github.com/ae95caba/Project-shopping-cart",
  "https://dulce-tentacion-mp.netlify.app/"
);

const project2 = new Project(
  "Dulce Tentacion",
  "This is a online store for a real bussiness. It has user authentication and a shopping cart ",
  "",
  ["ReactJS", "SCSS", "Firebase"],
  "https://github.com/ae95caba/Project-shopping-cart",
  "https://dulce-tentacion-mp.netlify.app/"
);

const projectsArr = [project1, project2];

export default projectsArr;