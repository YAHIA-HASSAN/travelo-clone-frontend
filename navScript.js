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
