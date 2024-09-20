// nav bar

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





/***********************************************************************/





