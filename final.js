//Function for checking whether the name is valid or invalid
function nameCheck(){
    var name = document.getElementById("full_name").value;
    var pattern = /^[^\s]([a-zA-Z\s]{3,})([a-zA-Z]{4,})(\s[a-zA-Z])?$/;
    if(pattern.test(name)){
        document.getElementById("checkingName").innerHTML = "Valid Name";
    }
    else{
        document.getElementById("checkingName").innerHTML = "Invalid Name";
    }
}


//Email Validation
function validate(){
        var emailEntered = document.getElementById("emailId").value;
        var mailFormat =/^([a-zA-Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})*$/;
        
        if(emailEntered.match(mailFormat)){
            document.getElementById("input").innerHTML = "Valid";
        }
        else{
            document.getElementById("input").innerHTML = "Invalid, Try Again";
        }

    } 


//Function For Phone Number
   
function phCheck(f) {
    var phone = document.getElementById("phone").value;
    var chck = /^[0-9()-]{3,14}$/;
    if(phone.match(chck)){ 
        
    if (phone.length >= 3 && phone.length <= 5) {
    return out1();
}

else if (phone.length >= 6 && phone.length <= 9) {
    return out2();
}
else if (phone.length >= 10) {
    return out3();
}        
    }
}

    var a,b,c; //Variable declaration for storing the sliced values
    //a = stores the first 3 digits for along with characters
    //b = stores value from variable a and the next 3 digitd
    //c = stores all the values     

//This function contains the first 3 digits and  displays the sim card provider logo according to the combination of digits

    function out1() {
    f = document.getElementById("phone");
    f.value = "(" + f.value.slice(0,3) + ")" + "-";
    a = f.value;
           
    var firstvalue = a.slice(1, 4);
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
        document.getElementById("logo").alt = "Invalid Number";
    }
    
    }

    //This function displays the state according to the combination of the next 3 digits, switch statement is used, the digits range from 101-136

    function out2() {
    f = document.getElementById("phone");
    f.value = a + f.value.slice(6, 9);         
    b = f.value;
 
    var secondvalue = b.slice(6, 9);
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
        state = "Invalid State Code";
}

document.getElementById("states").innerHTML = (" , "+ state);

}
    

//This function contains all the digits including the last 4 random input digits

function out3() {
f = document.getElementById("phone");
f.value = b + "-" + f.value.slice(10, 14);
c = f.value;

}


//This function is used to pass the value from html form page to validation page using local storage
function passValue(){
    var fullName = document.getElementById("full_name").value;
    var a = fullName.lastIndexOf(' ');           // last occurence of space
    var firstName = fullName.substring(0, a);   // first name
    var lastName = fullName.substring(a+1);    //last name
    var phoneno = document.getElementById("phone").value;
    localStorage.setItem("nameValue", firstName);
    localStorage.setItem("phonenumber", phoneno);
    return false;

}