/* API GITHUB */

// select form
var formElt = document.querySelector('form');

// select cards block
var cardsElt = document.getElementById('mycards');

// Click on submit button
formElt.addEventListener("submit", function (e) {
    e.preventDefault();

    var nomUser = formElt.elements.profil.value;

    // Create api request
    ajaxGet("https://api.github.com/users/" + nomUser, function (reponse) {

        //format resultat
        var profil = JSON.parse(reponse);

        //create card
        var cardElt = document.createElement('div');
        cardElt.className = 'card';

        //create card image block
        cardImageElt = document.createElement('div');
        cardImageElt.className = 'image';

        //create card image
        imageElt = document.createElement('img');
        imageElt.src = profil.avatar_url;
        //create content block

        var contentElt = document.createElement('div');
        contentElt.className = 'content';
        //create header

        var headerElt = document.createElement('div');
        headerElt.className = 'header';
        headerElt.textContent = profil.name;
        //create meta

        metaElt = document.createElement('div');
        metaElt.className = 'meta';
        //create metalink

        metaLinkElt = document.createElement('a');
        metaLinkElt.textContent ='@'+ profil.login;
        metaLinkElt.href = profil.html_url;
        metaLinkElt.target = 'blank';
        //create description block

        descriptionElt = document.createElement('div');
        descriptionElt.className = 'description';
        descriptionElt.textContent = profil.bio;
        //create extracontent block

        var extraElt = document.createElement('div');
        extraElt.className = 'extra content';
        //create Extra span

        extraSpanElt = document.createElement('span');
        extraSpanElt.className ='right floated';
        var date = profil.created_at.split("-");
        extraSpanElt.innerHTML += 'joined in ' + date[0];
        //create spanElt two

        extraSpanTwoElt = document.createElement('span');
        extraSpanTwoElt.innerHTML += "<i class=\"user icon\"></i> " + profil.followers + " Followers";


        //Delete cards block content
        cardsElt.innerHTML += "";
        //create card
        cardsElt.appendChild(cardElt);
        cardElt.appendChild(cardImageElt);
        cardImageElt.appendChild(imageElt);
        cardElt.appendChild(contentElt);
        contentElt.appendChild(headerElt);
        contentElt.appendChild(metaElt);
        metaElt.appendChild(metaLinkElt);
        contentElt.appendChild(descriptionElt);
        cardElt.appendChild(extraElt);
        extraElt.appendChild(extraSpanElt);
        extraElt.appendChild(extraSpanTwoElt);


    });

});