
//Function for checking whether the name is valid or invalid
document.getElementById("fullName").onblur = () => nameCheck();
function nameCheck() {
    var inputText = document.getElementById("fullName").value;
    var pattSet = /^[^\s]([a-zA-Z\s]{3,})([a-zA-Z]{4,})(\s[a-zA-Z])*$/;
    if (inputText.match(pattSet)) {
        document.getElementById("validatingName").innerText = "Valid Name";
   }
    else {
        document.getElementById("validatingName").innerText = "Invalid Name";
    }
}



//Email Validation
document.getElementById("emailId").onblur = () => validate();
function validate() {
    var emailEntered = document.getElementById("emailId").value;
    var mailFormat = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})*$/;
    if (emailEntered.match(mailFormat)) {
        document.getElementById("validatingEmail").innerText = "Valid Email ID";
    }
    else {
        document.getElementById("validatingEmail").innerText = "Invalid, Try Again";
    }
}



//Function For Phone Number   
document.getElementById("phoneNum").onkeyup = () => phCheck();

var logoPro, simPro;  //Variable declaration for storing the sliced values
//logoPro = stores the first 3 digits for along with characters, sim card provider logo
//simPro = stores value from variable a and the next 3 digitd, sim card provider state

function phCheck() {
    var phoneCheck = document.getElementById("phoneNum").value;
    var pattCheck = /[0-9]{0,15}/;
    if (phoneCheck.match(pattCheck)) {
        if (phoneCheck.length >= 3 && phoneCheck.length <= 5) {
            sliceNum = document.getElementById("phoneNum");
            sliceNum.value = "(" + sliceNum.value.slice(0, 3) + ")" + "-";
            logoPro = sliceNum.value;
            //console.log(a);
            var firstvalue = logoPro.slice(1, 4);
            if (firstvalue >= 621 && firstvalue <= 720) {
                document.getElementById("logo").src = "Jio.png"
            }
            else if (firstvalue >= 801 && firstvalue <= 920) {
                document.getElementById("logo").src = "Idea.jpg";
            }
            else if (firstvalue >= 921 && firstvalue <= 999) {
                document.getElementById("logo").src = "Vodafone.png";
            }
            else {
                document.getElementById("logo").alt = "Invalid ,";                
                document.getElementById("submit").addEventListener("click",function(event){
                    event.preventDefault();
                });                  
                       
            }
          
        }

        else if (phoneCheck.length > 5 && phoneCheck.length == 9) {
            sliceNum = document.getElementById("phoneNum");

            sliceNum.value = logoPro + sliceNum.value.slice(6, 9) + "-";
            simPro = sliceNum.value;
            //console.log(b);
            var secondvalue = simPro.slice(6, 9);
            var state;
            switch (secondvalue) {
                case "101":
                    state = "Andhra Pradesh";
                    break;

                case "102":
                    state = "Arunachal Pradesh";
                    break;

                case "103":
                    state = "Assam";
                    break;

                case "104":
                    state = "Bihar";
                    break;
                case "105":
                    state = "Chhattisgarh";
                    break;
                case "106":
                    state = "Goa";
                    break;
                case "107":
                    state = "Gujarat";
                    break;
                case "108":
                    state = "Haryana";
                    break;
                case "109":
                    state = "Himachal Pradesh";
                    break;
                case "110":
                    state = "Jharkhand";
                    break;
                case "111":
                    state = "Karnataka";
                    break;
                case "112":
                    state = "Kerala";
                    break;
                case "113":
                    state = "Madhya Pradesh";
                    break;
                case "114":
                    state = "Maharashtra";
                    break;
                case "115":
                    state = "Manipur";
                    break;
                case "116":
                    state = "Meghalaya";
                    break;

                case "117":
                    state = "Mizoram";
                    break;
                case "118":
                    state = "Nagaland";
                    break;
                case "119":
                    state = "Odisha";
                    break;
                case "120":
                    state = "Punjab";
                    break;
                case "121":
                    state = "Rajasthan";
                    break;
                case "122":
                    state = "Skkim";
                    break;
                case "123":
                    state = "Tamil Nadu";
                    break;
                case "124":
                    state = "Telangana";
                    break;
                case "125":
                    state = "Tripura";
                    break;
                case "126":
                    state = "Uttarakhand";
                    break;
                case "127":
                    state = "Uttar Pradesh";
                    break;
                case "128":
                    state = "West Bengal";
                    break;
                case "129":
                    state = "Andaman and Nicobar Islands";
                    break;
                case "130":
                    state = "Chandigarh";
                    break;
                case "131":
                    state = "Dadra and Nagar Haveli & Daman and Dui";
                    break;
                case "132":
                    state = "Delhi";
                    break;
                case "133":
                    state = "Jammu & Kashmir";
                    break;
                case "134":
                    state = "Ladakh";
                    break;
                case "135":
                    state = "Lakshadweep";
                case "136":
                    state = "Puducherry";
                    break;
                default:
                   document.getElementById("submit").addEventListener("click", function(event){
                       event.preventDefault();
                   })
              }      

            document.getElementById("states").innerText = ( state); 
        
        }
        
        
    }  
   
}








//This function is used to pass the value from html form page to validation page using local storage
document.getElementById("submit").onclick = () => passValue();

function passValue() {
    var fullName = document.getElementById("fullName").value;
    var lastSpace = fullName.lastIndexOf(' ');           // last occurence of space
    var firstName = fullName.substring(0, lastSpace);   // first name
    var phoneNo = document.getElementById("phoneNum").value;
    localStorage.setItem("nameValue", firstName);
    localStorage.setItem("phoneNumber", phoneNo);
    return true;

}









