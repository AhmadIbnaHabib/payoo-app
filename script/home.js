document.getElementById("add-money").addEventListener("click", function (a) {
    a.preventDefault()
    const accountNumber = document.getElementById("bank-account").value
    const pinNumber = document.getElementById("pin-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    if (accountNumber.length !== 11) {
        alert("Please enter a valid account number")
        return
    }
    if (pinNumber.length !== 4) {
        alert("Please enter a valid 4 digit pin")
        return
    }
    if(isNaN(addAmount)){
        alert("Please enter an amount")
        return
    }
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const newAvailableBalance = addAmount + availableBalance
    document.getElementById("available-balance").innerText = newAvailableBalance
})