'use strict'
function registerForm() {
    let register  = '';
    console.log('hello');
	let name = document.forms["register"]["nameInput"].value;
	let email = document.forms["register"]["exampleFormControlInput1"].value;
	let phoneNumber = document.forms["register"]["MobileNumber"].value;
    let bloodGroup = document.forms["register"]["bloodGroup"].value;
    let date = document.forms["register"]["date"].value;
    let address = document.forms["register"]["exampleFormControlTextarea1"].value;

	let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if (bloodGroup == "" || date == "" || address == "") {
        console.log("ERROR");
        let inputErr = document.getElementById('inputErr');
        inputErr.innerHTML = "Please fill all fields *";
    }
    if (name == "" || name == null){
        let nameErr = document.getElementById('nameErr');
        nameErr.innerHTML = "please enter your name properly";
        
    }else if (email == "" || !regEmail.test(email)) {
        let emailErr = document.getElementById('emailErr');
        emailErr.innerHTML = "please enter a valid e-mail address.";
    }else if (phoneNumber == '' || phoneNumber.length > 10) {
        let phoneErr = document.getElementById('phoneErr');
        phoneErr.innerHTML = "Please enter a valid Phonenumber"
    } else if (bloodGroup == "") {
        let inputErr = document.getElementById('inputErr');
        inputErr.innerHTML = "Please fill all fields";
    } 
    else {
        register ={
            registerName : name,
            registerEmail : email,
            registerPhone : phoneNumber,
            registerBlood : bloodGroup,
            registerDate  : date,
            registerAddress: address
        };
    }
    console.log(register);
    
    localStorage.setItem(email, JSON.stringify(register));
    return false;
};

function editForm() {
    let edituser  = '';
    console.log('hi from edit');
    let name = document.forms['edit']['name'].value;
    let email = document.forms['edit']['email'].value;
    let mobile = document.forms['edit']['number'].value;
    let bloodGroup = document.forms['edit']['select'].value;
    let address = document.forms['edit']['address'].value;
    let date = document.forms['edit']['date'].value;

    let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (name == "" || name == null){
        let nameErr = document.getElementById('edit_name');
        nameErr.innerHTML = "please enter your name properly";
        
    }else if (email == "" || !regEmail.test(email)) {
        let emailErr = document.getElementById('edit_email');
        emailErr.innerHTML = "please enter a valid e-mail address.";
    }else if (mobile == '' || mobile.length > 10) {
        let phoneErr = document.getElementById('number_err');
        phoneErr.innerHTML = "Please enter a valid Phonenumber"
    }else {
        edituser ={
            registerName : name,
            registerEmail : email,
            registerPhone : mobile,
            registerBlood : bloodGroup,
            registerDate  : date,
            registerAddress: address
        };
    }
    console.log(edituser);
    return false;
};
