let name = "katelyn"
let num = 21
let isLoggedIn = true


function check() {
    
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;


    if(user !== "" & pass !== "") {
        alert("Success, " + user)
    } else {
        alert("Failed!")
    }
}
