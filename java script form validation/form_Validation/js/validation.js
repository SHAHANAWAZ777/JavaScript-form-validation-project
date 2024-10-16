// Validation on form submission

document.getElementById('registrationForm').addEventListener("submit", function(e) {
    e.preventDefault();

    //Full Name validation

    const fullName=document.getElementById("fullName").value;
    const nameError=document.getElementById("nameError");
    if (fullName.length<5){
        nameError.textContent="Name must be at least 5 characters long.";
        nameError.style.display="block";

    }else {
        nameError.style.display="none";
    }

    //Email validation

    const email = document.getElementById("email").value;
    const emailError=document.getElementById("emailError");
    if (!email.includes("@")){
        emailError.textContent ="Enter a valid email address.";
        emailError.style.display="block";

    }else{
        emailError.style.display="none";
    }

    // phone Number validation
    const phone=document.getElementById("phone").value;
    const phoneError=document.getElementById("phoneError");
    if(phone=== "123456789" || phone.length!==10){
        phoneError. textContent="Enter a valid 10-digit phone number.";
        phoneError.style.display="block";
    }else{
        phoneError.style.display="none";
    }



    // password validation

    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const confirmPassword= document.getElementById("confirmPassword").value;
    const confirmPasswordError=document.getElementById("confirmPasswordError");


    if (password.length < 8 || password.toLowerCase() === "password" || password=== fullName){
        passwordError.textContent = "Password is too weak.";
        passwordError.style.display="block";
    
    }else{
        passwordError.style.display="none";
    }


    // Confirm password validation
    if (password!== confirmPassword){
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display="block";

    }else {
        confirmPasswordError.style.display="none";
    }

    // if no error, proceed

    if (nameError.style.display==="none" && 
        emailError.style.display === "none" &&
        phoneError.style.display === "none" && 
        passwordError.style.display === "none" &&
        confirmPasswordError.style.display === "none"
    ){
        alert("Form submitted sucessfully!");  
    }

});