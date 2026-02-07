let name = "katelyn"
let num = 21
let isLoggedIn = true

function checkU() {
    let users = [
        {username: "Kate", password: "haha", role: "admin"},
        {username: "Kie", password: "huhuhu", role: "guest"},
        {username: "Keyt", password: "hmm", role: "staff"}
    ]
   
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let found = false;

    for(let i = 0; i < users.length; i++) {
        if(user == users[i].username.toLowerCase() && pass == users[i].password.toLowerCase) {
            alert("Success! " + "Welcome, " + users[i].role)
            return;
        }
    }
    alert("Failed")
}

function checks() {
        let actors = ["admin", "guest"]
        let diffUsers = ["kate", "katya"]
        let diffPass = ["qwerty12", "huhuhu11"]

        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let found = false;

        for(let i = 0; i <= diffUsers.length; i++) {
            if(user == diffUsers[i] && pass == diffPass[i]) {
                alert("Welcome, " + actors[i])    
                return;      
            } 
        }
        alert("Failed")

}

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
