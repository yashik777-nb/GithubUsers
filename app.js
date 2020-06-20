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
          // Show Error
        } else {
          // Show Profile
          ui.showProfile(data.profileData);
        }
      })
      .catch((err) => console.log(err));
  } else {
    // Clear Profile
  }
});
