class GitHub {
  constructor() {
    this.clientID = "07065480cdc9819e8cb9";
    this.clientSecret = "79b2b132eb7518f8d09737550424b33d0de0994d";
    this.repos_count = 5;
    this.repos_sort = "created-desc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSect}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?
           per_page=${this.repos_count}
          &sort=${this.repos_sort}
          &client_id=${this.clientID}
          &client_secret=${this.clientSect}`
    );

    const profileData = await profileResponse.json();
    const repos = await repoResponse.json();
    // console.log(profileData);
    // console.log(repos);
    return {
      profileData,
      repos,
    };
  }
}
