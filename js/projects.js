
// document.addEventListener("DOMContentLoaded", () => {
//     const projectSection = document.querySelector("main");

//     fetch("https://api.github.com/users/StephanieJones1015/repos?sort=updated&direction=desc")
//       .then(response => response.json())
//         .then(repos => {
//             repos.forEach(repo => {
//                 const section = document.createElement("section");
//                 section.classList.add("section");

//                 section.innerHTML = `
//                     <h2>${repo.name}</h2>
//                     <p>${repo.description || "No description provided."}</p>
//                     <h5><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
//                 `;

//                 projectSection.appendChild(section);
//             });
//         })
//         .catch(error => {
//             console.error("Error fetching GitHub repos:", error);
//             projectSection.innerHTML += `<p>Could not load repo.</p>`;
//         });
// });
async function getGitHubProjects(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.inertia-preview+json',
      'User-Agent': 'My-Awesome-App'
    }
  });
  const data = await response.json();
  return data;
}

async function displayProjects(username) {
  const projects = await getGitHubProjects(username);
  const projectsContainer = document.getElementById('projects-container');

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.html_url}">GitHub Link</a>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

displayProjects('StephanieJones1015');
