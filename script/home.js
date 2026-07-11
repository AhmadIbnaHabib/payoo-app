const transactionsData = [];
function formsBtn(id) {
    const forms = document.getElementsByClassName("forms-btn")
    for (const form of forms) {
        form.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        form.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}
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
    if (isNaN(addAmount)) {
        alert("Please enter an amount")
        return
    }
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const newAvailableBalance = addAmount + availableBalance
    document.getElementById("available-balance").innerText = newAvailableBalance

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString(),
    }
    transactionsData.push(data)
    console.log(transactionsData)
})

document.getElementById("add-money-btn").addEventListener("click", function () {
    document.getElementById("cash-out-form").style.display = "none"
    document.getElementById("transfer-money-form").style.display = "none"
    document.getElementById("get-bonus-form").style.display = "none"
    document.getElementById("pay-bill-form").style.display = "none"
    document.getElementById("transactions-form").style.display = "none"
    document.getElementById("add-money-form").style.display = "block"
    formsBtn("add-money-btn")
})

document.getElementById("cash-out-btn").addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none"
    document.getElementById("transfer-money-form").style.display = "none"
    document.getElementById("get-bonus-form").style.display = "none"
    document.getElementById("pay-bill-form").style.display = "none"
    document.getElementById("transactions-form").style.display = "none"
    document.getElementById("cash-out-form").style.display = "block"
    formsBtn("cash-out-btn")
})

document.getElementById("transfer-money").addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none"
    document.getElementById("cash-out-form").style.display = "none"
    document.getElementById("get-bonus-form").style.display = "none"
    document.getElementById("pay-bill-form").style.display = "none"
    document.getElementById("transactions-form").style.display = "none"
    document.getElementById("transfer-money-form").style.display = "block"
    formsBtn("transfer-money")
})
document.getElementById("get-bonus").addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none"
    document.getElementById("cash-out-form").style.display = "none"
    document.getElementById("transfer-money-form").style.display = "none"
    document.getElementById("pay-bill-form").style.display = "none"
    document.getElementById("transactions-form").style.display = "none"
    document.getElementById("get-bonus-form").style.display = "block"
    formsBtn("get-bonus")
})
document.getElementById("pay-bill").addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none"
    document.getElementById("cash-out-form").style.display = "none"
    document.getElementById("transfer-money-form").style.display = "none"
    document.getElementById("get-bonus-form").style.display = "none"
    document.getElementById("transactions-form").style.display = "none"
    document.getElementById("pay-bill-form").style.display = "block"
    formsBtn("pay-bill")
})
document.getElementById("transactions").addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "none"
    document.getElementById("cash-out-form").style.display = "none"
    document.getElementById("transfer-money-form").style.display = "none"
    document.getElementById("get-bonus-form").style.display = "none"
    document.getElementById("pay-bill-form").style.display = "none"
    document.getElementById("transactions-form").style.display = "block"
    formsBtn("transactions")
})

document.getElementById("withdraw-money").addEventListener("click", function (a) {
    a.preventDefault()
    const agentNumber = document.getElementById("agent-number").value
    const withdrawPinNumber = document.getElementById("withdraw-pin-number").value
    const withDrawAmount = parseInt(document.getElementById("withdraw-amount").value)
    const availableMoney = parseInt(document.getElementById("available-balance").innerText)
    if (agentNumber.length !== 11) {
        alert("Please enter a valid agent number")
        return
    }
    if (withdrawPinNumber.length !== 4) {
        alert("Please enter a valid 4 digit pin")
        return
    }
    if (isNaN(withDrawAmount)) {
        alert("Please enter an amount")
        return
    }
    if (withDrawAmount > availableMoney) {
        alert("Insufficient Balance")
        return
    }
    const newAvailableMoney = availableMoney - withDrawAmount
    document.getElementById("available-balance").innerText = newAvailableMoney

    const data = {
        name: "Withdraw Money",
        date: new Date().toLocaleTimeString(),
    }
    transactionsData.push(data)
    console.log(transactionsData)
})

document.getElementById("transactions").addEventListener("click", function () {
    const transactionsCard = document.getElementById("transactions-card")
    transactionsCard.innerHTML = "";
    for (const data of transactionsData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex items-center justify-between bg-white p-2 rounded-2xl mb-3">
                        <div class="flex items-center">
                            <figure class="p-2 rounded-full bg-[#F4F5F7]">
                                <img src="./assets/wallet1.png" alt="">
                            </figure>
                            <div class="pl-2">
                                <h1 class="text-[18px] font-semibold text-gray-700">${data.name}</h1>
                                <p class="text-[14px] font-medium text-gray-500">${data.date}</p>
                            </div>
                        </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
         </div>
        `
        transactionsCard.appendChild(div)
    }
})
