function validateForm(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let password = document.getElementById("password").value
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (name == "" || email == "" || password == ""){
        alert("please fill in all fields")
        return false
    }

    if(!emailpattern.test(email)){
        alert("please valid email")
        return false
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters")
        return false
    }

    if(!passwordpattern.test(password)){
        alert("password must contain one letter, one number , and special number chr")
        return false
    }

    alert("form submitted successfully")
    return true

    
}