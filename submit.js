
//Generating 4 digit random number
document.getElementById("submitPage").onload = randomNum();

var storedigit;  //variable declaration to store the 4 digit randomly generated number

function randomNum() {
    var fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("fourDigit").innerText = fourdigitsrandom;
    storedigit = fourdigitsrandom;
}


var countClick = 3;
document.getElementById("validate").addEventListener("click", () => {
    var compare = document.getElementById("otpInput").value;
    var regx = /^[0-9]{4}$/;
    if (compare.match(regx)) {
        countClick -= 1;
        //console.log(countClick);
                       
        if (compare == storedigit) {
            document.getElementById("submitPage").innerText = "Validation Successful!";
            window.location.replace("http://pixel6.co/");
        }
        else {
            alert("You have " + countClick + " attempt left.") 
            if (countClick == 0) {
                window.location.replace("http://pixel6.co/404");
            }
        }
    }
});



//Local storage of name and number stored from previous page
document.getElementById("nameCheck").innerHTML = localStorage.getItem("nameValue");
document.getElementById("phoneNum").innerHTML = localStorage.getItem("phoneNumber");
