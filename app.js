'use strict';
console.log("Let's get this party started!");

// When the user submits the form, use axios to make a request to GIPHY
// for information based on that term.


// function to pull data

async function getGif(event) {

    event.preventDefault();

    let searchTerm = $("#inputField").val();
    //diffence between val and text here?

    //make axios request
    let response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)

// After receiving the response, console.log the response data to make
// sure you’re getting back what you expect.
    console.log("got", response);
    console.log(response.data.data[0].images.original.url);
    return response.data;

}

function addGif(gifUrl){

    $('#gifList').append($(`<div class = "new-gif"><img src = "${gifUrl}"></div>`));

}

// event handler for the button

$('#searchButton').on('click', getGif);

//add remove gifs button




