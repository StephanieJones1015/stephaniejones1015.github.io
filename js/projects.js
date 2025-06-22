const yourUserNameHere = 'StephanieJones1015';

async function getUser(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getUser(yourUserNameHere);

async function getUserRepos(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}/repos`)
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function populateRepos() {
    getUserRepos(aUserNameHere);
    const res = await fetch(`https://api.github.com/users/${aUserNameHere}/repos`);
    const data = await res.json();
    const repoList = document.getElementById('project-section');

    data.forEach(repo => {
        const listContainer = document.createElement('div');
        listContainer.classList.add('repo-list-item');
        const projectTitle = document.createElement('h2');
        const projectLink = document.createElement('a');
        projectLink.classList.add('project-links');
        const projectDescription = document.createElement('p');

        projectLink.href = repo.html_url;
        projectLink.textContent = repo.name;
        projectLink.target = "_blank"; // optional: open in new tab

        projectDescription.textContent = repo.description || 'No description available';

        repoList.appendChild(listContainer);
        listContainer.appendChild(projectTitle);
        projectTitle.appendChild(projectLink);
        listContainer.appendChild(projectDescription);
    });
}