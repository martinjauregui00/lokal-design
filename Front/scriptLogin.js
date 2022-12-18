document.querySelector("#singUpBtn").addEventListener('click', (e) => {
  e.preventDefault();
  let emailReg = document.getElementById("emailReg").value;
  let usernameReg = document.getElementById("usernameReg").value;
  let passwordReg = document.getElementById("passwordReg").value;

  let newUser = {
    "email": emailReg,
    "username": usernameReg,
    "password": passwordReg
  }

  fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((user) => {
      console.log('Success:', newUser);
    })

})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("singUpBtn");

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


document.querySelector("#loginBtn").addEventListener('click', (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let userLogin = {
    "username": username,
    "password": password
  }
  console.log(userLogin);
  var postiar = document.getElementById("postiar");

  fetch('http://localhost:3001/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userLogin),
  })
    .then((response) => response.json())
    .then((user) => {
      console.log('Success:', user);
      if (user.length > 0) {
        localStorage.setItem("username", user[0].username)
        location.href = "index4.html"
      } else {
        window.alert("usuario o contraseña incorrecto")
      }
    })
})