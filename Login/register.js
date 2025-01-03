const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.querySelector('.toggle-password');
const loginButton = document.getElementById('loginButton');
const usernameFeedback = document.getElementById('usernameFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const emailInput = document.getElementById('email');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailFeedback = document.getElementById('emailFeedback');
const confirmPasswordFeedback = document.getElementById('confirmPasswordFeedback');

let isUsernameValid = false;
let isPasswordValid = false;
let isEmailValid = false;
let isConfirmPasswordValid = false;

function validateUsername() {
    const username = usernameInput.value.trim();
    if (username === "") {
        usernameFeedback.innerText = "";
        isUsernameValid = false;
    }
    else if (username.length < 5 || username.length > 15) {
        usernameFeedback.innerText = 'Tài khoản phải từ 5 đến 15 ký tự.';
        usernameFeedback.className = 'error';
        isUsernameValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
        usernameFeedback.innerText = 'Tài khoản chỉ chứa chữ cái và số.';
        usernameFeedback.className = 'error';
        isUsernameValid = false;
    } else {
        usernameFeedback.innerText = "";
        usernameFeedback.className = 'success';
        isUsernameValid = true;
    }
    toggleRegisterButton();
}

function validatePassword() {
    const password = passwordInput.value.trim();
    if (password === "") {
        passwordFeedback.innerText = "";
        isPasswordValid = false;
    }
    else if (password.length < 8) {
        passwordFeedback.innerText = 'Mật khẩu phải có ít nhất 8 ký tự.';
        passwordFeedback.className = 'error';
        isPasswordValid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordFeedback.innerText = 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa.';
        passwordFeedback.className = 'error';
        isPasswordValid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordFeedback.innerText = 'Mật khẩu phải chứa ít nhất một số.';
        passwordFeedback.className = 'error';
        isPasswordValid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
        passwordFeedback.innerText = 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt (!@#$%^&*).';
        passwordFeedback.className = 'error';
        isPasswordValid = false;
    } else {
        passwordFeedback.innerText = "";
        // passwordFeedback.className = 'success';
        isPasswordValid = true;
    }
    toggleRegisterButton();
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức kiểm tra email
    if (email === "") {
        emailFeedback.innerText = "";
        isEmailValid = false;
    } else if (!emailRegex.test(email)) {
        emailFeedback.innerText = 'Email không hợp lệ.';
        emailFeedback.className = 'error';
        isEmailValid = false;
    } else {
        emailFeedback.innerText = "";
        isEmailValid = true;
    }
    toggleRegisterButton();
}

function validateConfirmPassword() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    if (confirmPassword === "") {
        confirmPasswordFeedback.innerText = "";
        isConfirmPasswordValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordFeedback.innerText = 'Mật khẩu xác nhận không khớp.';
        confirmPasswordFeedback.className = 'error';
        isConfirmPasswordValid = false;
    } else {
        confirmPasswordFeedback.innerText = "";
        isConfirmPasswordValid = true;
    }
    toggleRegisterButton();
}

$(document).ready(function () {
    // Toggle visibility for the "Password" field
    $("#hidden-eyes").click(function () {
        const passwordInput = $("#password");
        const toggleIcon = $("#toggle-password");

        const inputType = passwordInput.attr("type");
        if (inputType === "password") {
            passwordInput.attr("type", "text");
            toggleIcon.attr("src", "hidden.png"); // Đổi sang biểu tượng "ẩn"
            toggleIcon.attr("alt", "Hide Password");
        } else {
            passwordInput.attr("type", "password");
            toggleIcon.attr("src", "eye.png"); // Đổi sang biểu tượng "hiện"
            toggleIcon.attr("alt", "Show Password");
        }
    });

    // Toggle visibility for the "Confirm Password" field
    $("#hidden-eyes-confirm").click(function () {
        const confirmPasswordInput = $("#confirmPassword");
        const toggleConfirmIcon = $("#toggle-confirm-password");

        const inputType = confirmPasswordInput.attr("type");
        if (inputType === "password") {
            confirmPasswordInput.attr("type", "text");
            toggleConfirmIcon.attr("src", "hidden.png"); // Đổi sang biểu tượng "ẩn"
            toggleConfirmIcon.attr("alt", "Hide Password");
        } else {
            confirmPasswordInput.attr("type", "password");
            toggleConfirmIcon.attr("src", "eye.png"); // Đổi sang biểu tượng "hiện"
            toggleConfirmIcon.attr("alt", "Show Password");
        }
    });
});


function toggleRegisterButton() {
    registerButton.disabled = !(isUsernameValid && isPasswordValid && isEmailValid && isConfirmPasswordValid);
}
