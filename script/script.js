const mobileNumber = 11111111111;
const pinNumber = 4444;
document.getElementById("login-btn").addEventListener("click", function (a) {
    a.preventDefault()
    const mobileNumberConverted = parseInt(document.getElementById("mobile-number").value)
    const pinNumberConverted = parseInt(document.getElementById("pin-number").value)
    if (mobileNumberConverted === mobileNumber && pinNumberConverted === pinNumber) {
        window.location.href = "./second.html"
    } else {
        alert("invalid credentials")
    }
})