if (localStorage.getItem("username")) {
    let username = localStorage.getItem("username")
    document.querySelector("#login").style.display = "none"
    document.querySelector("#logout").style.display = "block"
    document.querySelector("#logout").addEventListener('click', e => {
        localStorage.removeItem("username")
        location.reload()
    })
    if (document.getElementById("saludo")) {
        document.getElementById("saludo").innerHTML = `
    Hi ${username}, post your profile`
    }
}

if (document.querySelector('.paintingData')) {
    fetch("http://localhost:3001/painting/painting")
        .then(res => res.json())
        .then(response => {
            console.log(response)
            for (let i = 0; i < response.length; i++) {
                document.querySelector(".paintingData").innerHTML += `
            <h2>${response[i].name}</h2>
            <br>
            <p>
            <img id= "foto" src=${response[i].fotoUrl} align="left"> ${response[i].data}
            </p>
            <a href="https://www.instagram.com/${response[i].instagram}/" target="_blank" id="instalogo" class="fa fa-instagram"></a>`
            }
        })
}

if (document.querySelector('.installationData')) {
    fetch("http://localhost:3001/painting/installation")
        .then(res => res.json())
        .then(response => {
            console.log(response)
            for (let i = 0; i < response.length; i++) {
                document.querySelector(".installationData").innerHTML += `
                <h2>${response[i].name}</h2>
                <p>
                <img src=${response[i].fotoUrl} align="left"> ${response[i].data}
                </p>
                <a href="https://www.instagram.com/${response[i].instagram}/" target="_blank" class="fa fa-instagram"></a>`
            }
        })
}

if (document.querySelector('.artistData')) {
    fetch("http://localhost:3001/painting/artist")
        .then(res => res.json())
        .then(response => {
            console.log(response)
            for (let i = 0; i < response.length; i++) {
                document.querySelector(".artistData").innerHTML += `
                    <h2>${response[i].name}</h2>
                    <p>
                    <img src=${response[i].fotoUrl} align="left"> ${response[i].data}
                    </p>
                    <a href="https://www.instagram.com/${response[i].instagram}/" target="_blank" class="fa fa-instagram"></a>`
            }
        })
}



if (document.querySelector("#img2")) {
    document.querySelector("#img2").addEventListener('click', () => {
        window.location.href = "index2-1.html";
    })
}
if (document.querySelector("#img3")) {
    document.querySelector("#img3").addEventListener('click', () => {
        window.location.href = "index2-2.html";
    })
}
if (document.querySelector("#img4")) {
    document.querySelector("#img4").addEventListener('click', () => {
        window.location.href = "index2-3.html";
    })
}

if (document.querySelector("#postButton")) {
    if (localStorage.getItem("username")) {
        document.querySelector("#postButton").addEventListener('click', (e) => {
            e.preventDefault();
            let categoryInput = document.getElementById("inputCategory").value;
            let nameInput = document.getElementById("inputName").value;
            let dataInput = document.getElementById("inputData").value;
            let urlInput = document.getElementById("inputUrl").value;
            let instagramInput = document.getElementById("inputInstagram").value;

            let obj = {
                "category": categoryInput,
                "name": nameInput,
                "data": dataInput,
                "fotoUrl": urlInput,
                "instagram": instagramInput
            }

            fetch('http://localhost:3001/painting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            })
                .then((response) => response.json())
                .then((obj) => {
                    console.log('Success:', obj);
                })

        })

    } else {
        window.alert("login first")
        location.href = "login.html"
    }
}




















// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("postButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload()
    }
}


