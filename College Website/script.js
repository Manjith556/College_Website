function loginValidation() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Please enter username and password");
        return false;
    }

    alert("Login Successful");
    return true;
}

function formValidation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if (name === "" || email === "" || course === "") {
        alert("All fields are required");
        return false;
    }

    alert("Application Submitted Successfully");
    return true;
}
