'use strict';
console.log("Let's get this party started!");

/** Takes form input and requests GIF url from Giphy.
 *  Calls addGif.
 */

async function getGif(event) {

    event.preventDefault();

    let searchTerm = $("#inputField").val();

    let response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)

    addGif(response.data.data[0].images.original.url);
    //potential for object destructuring?


}

/** Appends GIF to DOM.
 */

function addGif(gifUrl){

    $('#gifList').append($(`<div class = "new-gif"><img src = "${gifUrl}"></div>`));

}

/** Removes all GIFs. */

function removeGifs(){
    $('#gifList').html('');
}

/** Event handlers for submit and remove buttons. */

$('#searchButton').on('click', getGif);
$('#clearButton').on('click', removeGifs);

//handleSubmit




