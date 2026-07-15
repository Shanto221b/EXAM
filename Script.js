
let attempts = 0;




function simplecollection() {


    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;




    var nameError = document.getElementById("nameError");
    var passError = document.getElementById("passError");





    if (name == "" && password == "") {

        alert("empty");
        return false;
    }



    if (name !== "AIUB" || password !== "$_student") {

        attempts++;

        if (attempts == 1) {
            nameError.innerHTML = " 2 attempts left";
            passError.innerHTML = "*wrong";
        }
        else if (attempts == 2) {
            nameError.innerHTML = " 1 attempt left.";
            passError.innerHTML = "*wrong";
        }
        else if (attempts >= 3) {
            nameError.innerHTML = "Account locked.";
            passError.innerHTML = "*wrong";
        }

        return false;
    }



    return true;


}