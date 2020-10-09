// variable containers
const section = document.querySelector("section");
const input = document.querySelector("input");

const projects = [
  {
    name: "Project 1",
    description: "Red apples",
    thumbnail: "./assets/thumb-1.jpg",
  },
  {
    name: "Project 2",
    description: "Yellow bananas",
    thumbnail: "./assets/thumb-2.jpg",
  },
  {
    name: "Project 3",
    description: "Green grapes",
    thumbnail: "./assets/thumb-3.jpg",
  },
  {
    name: "Project 4",
    description: "Purple plums",
    thumbnail: "./assets/thumb-4.jpg",
  },
  {
    name: "Project 5",
    description: "Brown potatoes",
    thumbnail: "./assets/thumb-5.jpg",
  },
  {
    name: "Project 6",
    description: "Orange mandarins",
    thumbnail: "./assets/thumb-6.jpg",
  },
  {
    name: "Project 7",
    description: "Purple grapes",
    thumbnail: "./assets/thumb-7.jpg",
  },
  {
    name: "Project 8",
    description: "Red tomatoes",
    thumbnail: "./assets/thumb-8.jpg",
  },
  {
    name: "Project 9",
    description: "Yellow lemons",
    thumbnail: "./assets/thumb-9.jpg",
  },
  {
    name: "Project 10",
    description: "Brown onions",
    thumbnail: "./assets/thumb-10.jpg",
  },
  {
    name: "Project 11",
    description: "Green limes",
    thumbnail: "./assets/thumb-11.jpg",
  },
  {
    name: "Project 12",
    description: "Orange oranges",
    thumbnail: "./assets/thumb-12.jpg",
  },
];

const renderProjects = (projects) => {
  let list = "";
  for (index in projects) {
    list += `<div class="card">
          <div class="thumb"><img src="${projects[index].thumbnail}" alt="" /></div>
          <div class="project-content">
            <h1>${projects[index].name}</h1>
            <p>${projects[index].description}</p>
          </div>
        </div>`;
  }
  section.innerHTML = list;
};

const filterProjects = () => {
  let keyword = input.value.toLowerCase();
  let filteredProjects = projects.filter((project) => {
    const regex = new RegExp(keyword, "gi");
    return project.name.match(regex) || project.description.match(regex);
  });

  renderProjects(filteredProjects);
};

const app = () => {
  renderProjects(projects);
  input.addEventListener("keyup", (e) => {
    filterProjects();
  });
};

app();
