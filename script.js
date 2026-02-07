let name = "katelyn"
let num = 21
let isLoggedIn = true


function check() {
    
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user !== "" & pass !== "") {
        if(pass.length >= 5) {
            alert("Success, " + user)
        } else {
            alert("Password is weak.")
        }
    } else {
        alert("Failed!")
    }
}
