// This is model of fetch api with GET request
    fetch(url, {
        method: "GET",
        })
        .then(function (response) {
            console.log(response.text())
        })
        .then(function (text) {
            console.log(text);
        });

// This is also same work as above fetch api GET request model
    fetch(url,
        {
            method: "GET",
        })
        .then(response => response.text())
        .then((text) => {
            console.log(text);
        });
        
// *****************************************************************


// This is the model of fetch api with POST request
        fetch(url,
            {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(function (response) {
                console.log(response.text())
            })
            .then(function (text) {
                console.log(text);
            });

// This is also same work as above fetch api POST request model
fetch(url,
    {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response=> response.text())
    .then((text)=> {
        console.log(text);
    });