export const getUserInfo = gitHubProfile => {
  return fetch(`https://api.github.com/users/${gitHubProfile}`)
    .then(res => res.json());
};

export const getRepos = gitHubProfile => {
  return fetch(`https://api.github.com/users/${gitHubProfile}/repos`)
    .then(res => res.json());
};
