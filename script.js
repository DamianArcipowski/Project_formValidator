var send = document.getElementById("send");
var fields = document.getElementsByTagName("input");
var paragraphs = document.getElementsByTagName("p");
var clear = document.getElementById("clear");
var formBox = document.getElementById("formBox");
var closeButton = document.getElementById("closePopup");
var username = document.getElementById("username");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var email = document.getElementById("email");


function checkUsernameLength(){ 
    if(username.value.length >= 3){
        paragraphs[0].style.visibility = "hidden";
        fields[0].classList.remove("formFieldsError");
        return true;
    } else {
        paragraphs[0].style.visibility = "visible";
        fields[0].className = "formFieldsError";
        return false;
    }
};


function checkPassword(){
    if(pass1.value.length >= 8){
        paragraphs[1].style.visibility = "hidden";
        fields[1].classList.remove("formFieldsError");
        return true;
    } else {
        paragraphs[1].style.visibility = "visible";
        fields[1].className = "formFieldsError";
        return false;
    }
}


function ifEqualPasswords(){
    if(pass1.value != "" && pass2.value != ""){
        if (pass1.value == pass2.value){
            paragraphs[2].style.visibility = "hidden";
            fields[2].classList.remove("formFieldsError");
            return true;
        } else {
            paragraphs[2].style.visibility = "visible";
            fields[2].className = "formFieldsError";
            return false;
        }
    } else
        paragraphs[2].style.visibility = "visible";
        fields[2].className = "formFieldsError";
        return false;
};


function validEmail(){
    var expression = /[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9]+\.[a-zA-Z]+/;

    if(expression.test(email.value)) {
        paragraphs[3].style.visibility = "hidden";
        fields[3].classList.remove("formFieldsError");
        return true;
    } else {
        paragraphs[3].style.visibility = "visible";
        fields[3].className = "formFieldsError";
        return false;
    }
};


send.addEventListener("click", function(e){
        var sumOfConditions = 4;

        if(checkUsernameLength() != false){
            sumOfConditions--;
            e.preventDefault();
        }

        if(checkPassword() != false){
            sumOfConditions--;
            e.preventDefault();
        }

        if(ifEqualPasswords() != false){
            sumOfConditions--;
            e.preventDefault();
        }

        if(validEmail() != false){
            sumOfConditions--;
            e.preventDefault();
        }

        if(sumOfConditions == 0){
            e.preventDefault();
            formBox.className += " showPopup";
        } else {
            e.preventDefault();
        }
            
});
            

closeButton.addEventListener("click", function(){
    formBox.classList.remove("showPopup");
});


clear.addEventListener("click",function(){
    for(let i=0; i<fields.length; i++){
        if(fields[i].value == "")
            paragraphs[i].style.visibility = "hidden";
            fields[i].className = "";
    }
});