let userNameEle = document.getElementById('user-name');

userNameEle.innerText = sessionStorage.getItem('user-name');

let ticketsEle = document.getElementById('Tickets-section');

let userTickets;
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('user-name');
    document.location.href = "./home.html"
}

readTextFile("../Data/userTickets.json", function(text) {
    userTickets = JSON.parse(text);
    for(let i of userTickets){
        ticketsEle.innerHTML += `
            <div class="ticket">
                    <section class="ticket-left-part">
                        <div class="ticket-header">
                            <img src="../img/logo.png" alt="logo">
                            <h4 class="ticket-class">${i.TicketClass}</h3>
                        </div>
                        <div class="left-ticket-info">
                            <table>
                                <tr>
                                    <td>${i.PassangerName}</td>
                                    <td>${i.From} -> ${i.To}</td>
                                </tr>
                                <tr>
                                    <td>${i.Time}</td>
                                    <td>Gate No. #${i.GateNo}</td>
                                </tr>
    
                                <tr></tr>
                            </table>
                            <div class="barcode">
                                <img src="${i.Barcode}" />
                              </div>
                        </div>
                    </section>
                    <section class="ticket-right-part">
                        <div class="ticket-header">
                            <img src="../img/logo.png" alt="logo">
                            <h4 class="ticket-class">${i.TicketClass}</h3>
                        </div>
                        <div class="right-ticket-info">
                            <table>
                                <tr>
                                    <td>${i.PassangerName}</td>
                                </tr>
                                <tr>
                                    <td>${i.From} -> ${i.To}</td>
                                </tr>
    
                                <tr>
                                    <td>${i.Time}</td>
                                </tr>
                                <tr>
                                    <td>Gate No. #${i.GateNo}</td>
                                </tr>
                                <tr></tr>
                            </table>
                            <div class="barcode">
                                <img src="${i.Barcode}" />
                              </div>
                        </div>
                    </section>
                </div>
        `
    
    }
});


addEventListener('DOMContentLoaded',()=>{
    if(!sessionStorage.getItem('login')){
        logout()
    }
})



