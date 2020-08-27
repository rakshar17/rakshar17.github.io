
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
                document.getElementById("formSubmit").addEventListener("submit", function(event){
                    event.preventDefault(); 
                 alert("Invalid Number, Try Again!") 
                window.location.reload();                                                
                })      
            }
          
        }

        else if (phoneCheck.length > 5 && phoneCheck.length == 9) {
            sliceNum = document.getElementById("phoneNum");

            sliceNum.value = logoPro + sliceNum.value.slice(6, 9) + "-";
            simPro = sliceNum.value;
            //console.log(b);
            var secondvalue = simPro.slice(6, 9);
            var array1 = ["","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli & Daman and Dui", "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry"]              


            if (secondvalue > 100 && secondvalue < 110) {
                index = simPro.slice(8, 9)
                document.getElementById("states").innerText = array1[index];
            }
            else if (secondvalue >= 110 && secondvalue < 137) {
                index = simPro.slice(7, 9);
                document.getElementById("states").innerText = array1[index];
            }
            else {
                document.getElementById("states").innerText = "Invalid State Code";
                document.getElementById("formSubmit").addEventListener("submit", function(event){
                    event.preventDefault(); 
                 alert("Invalid State Code, Try Again!") 
                window.location.reload();                                                
                }) 
            }
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









