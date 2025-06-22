 const username = 'StephanieJones1015'; // Replace with your GitHub username

    document.addEventListener('DOMContentLoaded', () => {
      fetchGitHubRepos(username);
    });

    /**
     * Fetches repositories from GitHub for the specified user.
     * @param {string} username - The GitHub username to fetch repositories for.
     */
 
 async function fetchGitHubRepos(username) {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        document.getElementById('projects').innerText = 'Failed to load repositories.';
        return;
      }

      const repos = await response.json();
      const container = document.getElementById('projects');
      container.innerHTML = ''; // Clear existing content

      repos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'repo';
        repoDiv.innerHTML = `
          <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
          <p>${repo.description || 'No description provided.'}</p>
          <p>⭐ Stars: ${repo.stargazers_count}</p>
        `;
        container.appendChild(repoDiv);
      });
    }