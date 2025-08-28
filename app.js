function showSignup()
{
    document.getElementById("login-form").classList.remove("Active");
    document.getElementById("signUp-form").classList.add("Active");
}
function showLogin()
{
    document.getElementById("signUp-form").classList.remove("Active");
    document.getElementById("login-form").classList.add("Active");
}
function signupUser() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (name && email && password) {
        let user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("✅ Signup Successful! Please Login.");
        showLogin();
    } else {
        alert("❌ Please fill all fields");
    }
}

// Check login
function loginUser() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert("🎉 Login Successful! Welcome " + storedUser.name);
    } else {
        alert("❌ Invalid Email or Password");
    }
}