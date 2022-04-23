$(function () {
    $("#reserveButton").on('click', function () {
        $('#reserveModal').modal('show');
    });
    $("#loginButton").on('click', function () {
        $('#loginModal').modal('show');
    });
});


let courts = [
    {
        id: 0,
        type: "Outdoor Court",
        name: "Callahan Park",
        img: "/img/callahan_park.jpg",
        address: "100-198 North Terry Avenue, Orlando, FL 32801, United States"
    },
    {
        id: 1,
        type: "Outdoor Court",
        name: "John H Jackson CC",
        img: "/img/johnHJackson_community_center.jpg",
        address: "1002 Carter St, Orlando, FL 32805,  United States"
    },
    {
        id: 2,
        type: "Outdoor Court",
        name: "Mayor Carl L. Park",
        img: "/img/mayor_carlLangford_park.jpg",
        address: "1700-1898 E Church St, Orlando, FL 32801, United States"
    },
    {
        id: 3,
        type: "Outdoor Court",
        name: "George Baker Park",
        img: "/img/georgeBaker_park.jpg",
        address: "2000 Monte Carlo Trail, Orlando, FL 32805, United States"
    },
    {
        id: 4,
        type: "Outdoor Court",
        name: "Hankins Park",
        img: "/img/hankins_park.jpg",
        address: "1500-1598 Lake Park Ct, Orlando, FL 32805, United States"
    },
    {
        id: 5,
        type: "Outdoor Court",
        name: "Fort Gatlin",
        img: "/img/fort_gatlin.jpg",
        address: "2316 Chera Ct, Orlando, FL 32806, United States"
    },
    {
        id: 6,
        type: "Outdoor Court",
        name: "Demetree Park",
        img: "/img/demetree_park.jpg",
        address: "602 Santiago Ave, Orlando, FL 32807, United States"
    },
    {
        id: 7,
        type: "Outdoor Court",
        name: "Guernsey Park",
        img: "/img/guernsey_park.jpg",
        address: "1300 Guernsey St, Orlando, FL 32804, United States"
    },
    {
        id: 8,
        type: "Outdoor Court",
        name: "Lorna Doone Park",
        img: "/img/lorna_doone_park.jpg",
        address: "1403 W Church St, Orlando, FL 32805, United States"
    }
]




let courtContainer;

let createCard = (court) => {
    let cardCol = document.createElement("div");
    cardCol.className = "col-md-4";

    let card = document.createElement("div");
    card.classList.add("mb-6", "card");

    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = court.img;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.innerText = court.name;
    cardTitle.className = "card-title";
    cardTitle.style = "text-align: center";

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = court.type;
    cardText.style = "text-align: center";

    let cardButtonContainer = document.createElement("div");
    let cardButton = document.createElement("button");
    cardButton.type = "button";
    cardButton.classList.add("btn", "btn-success");
    cardButton.style = "width: 100%";
    cardButton.innerText = "Get Directions";

    courtContainer.appendChild(cardCol);
    cardCol.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButtonContainer);
    cardButtonContainer.appendChild(cardButton);
};

let initListOfCards = () => {
    if (courtContainer) {
        document.getElementById("courts").replaceWith(courtContainer);
        return;
    }

    courtContainer = document.getElementById("courts");
    courts.forEach((court) => {
        createCard(court);
    });
};

initListOfCards();
