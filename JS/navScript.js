// nav bar script  for apparing and disapparing the menu toggle

let menuOpenFlage =false;
function displayToggledMenu(){
    let element = document.getElementById('toggled-menu');
    if(!menuOpenFlage){
        element.style = `display: flex;`;
        menuOpenFlage = true;
    }
    else{
        element.style = `display: none;`;
        menuOpenFlage = false;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let navPart3Ele = document.getElementById("nav-part3");
    let toggledMenuItemLogin = document.getElementById("toggled-menu-item-login");

    // Check if the user is logged in
    if (sessionStorage.getItem("login")) {
        // Remove the last button (Login button)
        let lastButton = navPart3Ele.querySelector(".nav-red-button:last-of-type");
        if (lastButton) {
            navPart3Ele.removeChild(lastButton);
        }

        // Add new "Profile" button in the main navigation
        let userProfileButton = document.createElement("div");
        userProfileButton.classList.add("nav-red-button");

        let profileLink = document.createElement("a");
        profileLink.href = "userProfile.html";
        profileLink.textContent = "Profile";

        userProfileButton.appendChild(profileLink);
        navPart3Ele.appendChild(userProfileButton);

        // Modify the toggled menu item to "Profile" button
        if (toggledMenuItemLogin) {
            toggledMenuItemLogin.innerHTML = `<a href="userProfile.html">Profile</a>`;
        }

    } else {
        // Ensure the login button remains in the toggled menu when not logged in
        if (toggledMenuItemLogin) {
            toggledMenuItemLogin.innerHTML = `<a href="login.html">Login</a>`;
        }
    }
});


