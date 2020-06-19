class GitHub {
  constructor() {
    this.clientID = "07065480cdc9819e8cb9";
    this.clientSecret = "79b2b132eb7518f8d09737550424b33d0de0994d";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );
    const profileData = await profileResponse.json();
    return {
      profileData,
    };
  }
}
