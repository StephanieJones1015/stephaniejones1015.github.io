
const username = "StephanieJones1015";

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(repos => {
    repos.forEach(repo => {
      console.log(`Repo: ${repo.name}, URL: ${repo.html_url}`);
    });
  })
  .catch(error => {
    console.error("Failed to fetch repositories:", error);
  });

  fetchGitHubrepos('StephanieJones1015').then(repos => {
    console.log(repos);
  });