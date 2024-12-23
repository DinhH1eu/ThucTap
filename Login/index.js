const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.querySelector('.toggle-password');
const loginButton = document.getElementById('loginButton');
const usernameFeedback = document.getElementById('usernameFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

let isUsernameValid = false;
let isPasswordValid = false;

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
    toggleLoginButton();
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
    toggleLoginButton();
}

$(document).ready(function () {
    $("#hidden-eyes").click(function () {
        // Lấy phần tử input
        const passwordInput = $("#password");
        const toggleIcon = $("#toggle-password");

        // Kiểm tra loại input và thay đổi
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
});


function toggleLoginButton() {
    loginButton.disabled = !(isUsernameValid && isPasswordValid);
}