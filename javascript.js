    document.addEventListener("DOMContentLoaded", function () {
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("nav-links");

      hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });
    });

  async function fetchRepos(username = 'kimhogle') {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return await res.json();
}

async function displayRepos() {
  const repos = await fetchRepos();
  const container = document.getElementById('repoList');
  container.innerHTML = repos.map(r => `
    <div class="repo-card">
      <h3><a href="${r.html_url}" target="_blank">${r.name}</a></h3>
      <p>${r.description || 'No description provided.'}</p>
      <small>★ ${r.stargazers_count} • ${r.language || 'N/A'}</small>
    </div>
  `).join('');
}

// Call on page load
displayRepos();
