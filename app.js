console.log("Let's get this party started!");

// When the user submits the form, use axios to make a request to GIPHY 
// for information based on that term. 


// function to pull data

async function getGif() {
    let searchTerm = $("#inputField").val();
    //diffence between val and text here?

    //make axios request
    let response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)

// After receiving the response, console.log the response data to make 
// sure you’re getting back what you expect.
    console.log("got", response);
    return response.data;

}

// event handler for the button





