function convertingStrangToDateObject(stringDate) {
    let parts = stringDate.split("-");
    let day = parseInt(parts[0]);
    let month = parseInt(parts[1]) - 1; // Month is 0-based
    let year = parseInt(parts[2]);
    let dateObject = new Date(year, month, day);
    return dateObject;
}

function creatCardElement(continer ,placeImage ,price ,placeTitle ,placeLocation) {
    let divCard = document.createElement('div')
    divCard.setAttribute('class' , 'travel-card')
    
        let divImage = document.createElement('div')
        divImage.setAttribute('class' , 'card-img')
            let image = document.createElement('img')
            image.setAttribute('src', placeImage)
            image.setAttribute("class" , "img-fluid")
            let divPrice =document.createElement('div')
            divPrice.setAttribute('class','price-tag')
            divPrice.innerText = `$${price}`
        divImage.appendChild(image)
        divImage.appendChild(divPrice)
    divCard.appendChild(divImage)

        let divCardBody =document.createElement('div')
        divCardBody.setAttribute('class' , 'card-body')
            let title = document.createElement('h5')
            title.setAttribute('class' , 'card-title')
            title.innerText = placeTitle
            let location = document.createElement('p')
            location.setAttribute('class' , 'card-location')
            location.innerText = placeLocation
            let divRating = document.createElement('div')
            divRating.setAttribute('class' , 'card-rating')
                divRating.innerHTML = `<span class="stars">★★★★★</span> <span>(20 Review)</span>`
        
        divCardBody.appendChild(title)
        divCardBody.appendChild(location)
        divCardBody.appendChild(divRating)
    divCard.appendChild(divCardBody)

        let divFooter = document.createElement('div')
        divFooter.setAttribute('class' ,'card-footer')
        divFooter.innerHTML = `<span><i class="fa fa-clock-o"></i> 5 Days</span>`
    divCard.appendChild(divFooter)


continer.appendChild(divCard)
}

let places;

function showResult() {
    let destination = document.querySelector('input[placeholder="enter your destination"]').value ;
    document.querySelector('input[placeholder="enter your destination"]').value = ''
    localStorage.setItem('destination',destination);
    let time = document.querySelector('input[type="date"]').value ;
    document.querySelector('input[type="date"]').value= ''
    localStorage.setItem('time',time);
    time = convertingStrangToDateObject(time) ;
    let travelWay = document.querySelector('select').value ;
    document.querySelector('select').value = ''
    localStorage.setItem('way',travelWay);

    let req = new XMLHttpRequest()
    req.open('get' , '../Data/data.json' , true)
    req.addEventListener('loadend', () => {
    if (req.readyState == 4) {
        places = JSON.parse(req.response)
        let flag = 1 ;
        for (const element of places) {
            let avalibleDate = convertingStrangToDateObject(element.dateOfTravel)
            if (element.city.toLowerCase() == destination.toLowerCase() || element.country.toLowerCase() == destination.toLowerCase()) {
                document.querySelector('.search-result-continer').replaceChildren()
                console.log('founded')
                flag = 0 
                localStorage.setItem('searchResult',JSON.stringify(element))
                creatCardElement(document.querySelector('.search-result-continer'),element.photoURL,element.price,element.city,element.country)
            } else if (time.getMonth() === avalibleDate.getMonth() && time.getFullYear() == avalibleDate.getFullYear()) {
                document.querySelector('.search-result-continer').replaceChildren()
                console.log('founded')
                flag = 0 
                localStorage.setItem('searchResult',JSON.stringify(element))
                creatCardElement(document.querySelector('.search-result-continer'),element.photoURL,element.price,element.city,element.country)
            } 
        }


            if (flag) {
                let p = document.createElement('p') 
                p.innerText = 'Sorry , this destination is not avalible in our site yet'
                document.querySelector('.search-result-continer').replaceChildren()
                document.querySelector('.search-result-continer').appendChild(p)
            }

        
    }
    })
    
    req.send()

}


