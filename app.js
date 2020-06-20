const searchUser = document.getElementById("searchUser");

const gitHub = new GitHub();
const ui = new Ui();

searchUser.addEventListener("keyup", (e) => {
  let usertext = e.target.value;
  if (usertext !== "") {
    gitHub
      .getUser(usertext)
      .then((data) => {
        if (data.profileData.message === "Not Found") {
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          ui.showProfile(data.profileData);
          ui.showRepos(data.repos);
        }
      })
      .catch((err) => console.log(err));
  } else {
    ui.clearProfile();
  }
});
