let name = "katelyn"
let num = 21
let isLoggedIn = true

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

function check() {

    if(user !== "" & pass !== "") {
        alert("Success, " + user)
    } else {
        alert("Failed!")
    }
}
