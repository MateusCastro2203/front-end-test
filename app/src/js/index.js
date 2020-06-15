(()=>{
if (typeof require === 'function'){
bootstrap = require ('bootstrap');
style = require('../scss/style.scss');
}
}
)();

window.div = document.getElementById('events');
let dataSet = [];



function getRequest(){
    let resquestUrl = 'https://raw.githubusercontent.com/MateusCastro2203/front-end-test/master/sample-data.json';
    let request = new XMLHttpRequest();

    request.open('GET', resquestUrl);
    request.responseType = 'json';
    request.send();
    request.onload = function(){
        let events = request.response;
        showEvents(events);
    }
}

function showEvents(jsonObj){
    dataSet = jsonObj['events'];
    dataSet.sort((a,b)=>{return a.start-b.start})
    console.log(events);
    createCard();
}

function createCard(){
    dataSet.forEach( events => {
        let templateCard = `
            <div class='container card'>
                <h3 class = "title"> ${events.title}</h3>
                ${events.image ? "<img src='../src/assets/img/"+ events.image+"'>" : ''}
                <p class='description'>${events.description}</p>
                <a class="btn btn-outline-dark" data-toggle="collapse" href="#collapse">
                    More
                </a>
                <div class="collapse values" id="collapse">
                    <p>Day: ${setDate(events.start)}</p>
                    <p>Hour: ${setTime(events.start)}</p>
                    <p>Finish: ${setDate(events.end)} <br> Hour: ${setTime(events.end)}</p>
                    <p>Price: ${events.costs} </p>
                    <p>Recurrence: ${events.recurrence}</p>
                    <a href="${events.link}" target="blanc" >Event link</a> <br>
                    <a class="btn btn-outline-dark" data-toggle="collapse" href="#Venue">
                     Vanue
                    </a>
                    <div class="collapse values" id="Venue">
                        <p>${events.venue.name}</p>
                        <p>City: ${events.venue.city}</p>
                        <p>Street: ${events.venue.street}</p>
                        <p>Zip: ${events.venue.zip}</p>
                    </div>

                </div>
                <br>
            </div>
        `;
        let cardHTML = new DOMParser().parseFromString(templateCard, 'text/html');
        cardHTML = cardHTML.body.childNodes[0];
        document.getElementById('events').appendChild(cardHTML);
    })
}

function setDate(dateStart){
    let date = new Date (dateStart*1000);
    let day = date.toLocaleDateString();
    return day;
}

function setTime(dateStart){
    let date = new Date (dateStart*1000);
    let time = date.toLocaleTimeString();
    return time;
}

this.datePicker = function() {
    let date = document.getElementById('datetimepicker1').value;
    let value = new Date(date).getTime() / 1000;
    Array.from(div.getElementsByClassName("card")).forEach((event,index) =>{
        if(dataSet[index].start >= value){
            event.classList.remove('hidde');
        }else if (!event.classList.contains('hidde')) {
            event.classList.add('hidde');
        }
    })
    
};


