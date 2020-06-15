import 'bootstrap';
import '../scss/style.scss';
jQuery.support.cors = true;

let resquestUrl = 'https://raw.githubusercontent.com/MateusCastro2203/front-end-test/master/sample-data.json';
let request = new XMLHttpRequest();
let div = document.querySelector('section');

request.open('GET', resquestUrl);
request.responseType = 'json';
request.send();

request.onload = function(){
    let events = request.response;
    showEvents(events);
}

function showEvents(jsonObj){
    let events = jsonObj['events'];
    

    for(let i = 0; i < events.length; i++){
        let card = document.createElement('article');
        let title = document.createElement('h2');
        let button = document.getElementById("button");
        let description = document.createElement('p');
        let img = document.createElement('img');
        let start = document.createElement('p');
        let end = document.createElement('p');
        let recurrence = document.createElement('p');
        let costs = document.createElement('p');
        let link = document.createElement('a');
        let venueName = document.createElement('p');
        let venueZip = document.createElement('p');
        let venueCity = document.createElement('p');
        let venueStreet = document.createElement('p');
        let category = document.createElement('p');

        title.textContent = events[i].title;
        img.src='../src/assets/img/'+ events[i].image;
        description.textContent = events[i].description;
        start.textContent = events[i].start;
        end.textContent = events[i].end;
        recurrence.textContent = 'Recurrence: ' + events[i].recurrence;
        costs.textContent = 'Price: '+ events[i].costs;
        link.src = events[i].link;
        venueName.textContent ='Venue: ' + events[i].venue.name;
        venueZip.textContent = events[i].venue.zip;
        venueCity.textContent = 'City: '+ events[i].venue.city;
        venueStreet.textContent = 'Street: ' + events[i].venue.street;
        category.textContent = 'Category: '+ events[i].category;

        card.appendChild(title);
        events[i].image ? card.appendChild(img) : img;
        card.appendChild(description);
        card.appendChild(start);
        card.appendChild(end);
        card.appendChild(recurrence);
        card.appendChild(costs);
        card.appendChild(link);
        card.appendChild(venueName);
        card.appendChild(venueCity);
        card.appendChild(venueStreet);
        card.appendChild(venueZip);
        
        card.appendChild(category);

        div.appendChild(card);

        console.log(img);
    }
    
}
 