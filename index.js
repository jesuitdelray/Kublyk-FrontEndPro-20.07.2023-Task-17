function isBalanceMoreThan2000(balance) {
    return parseFloat(balance.replace("$", "").replace(",", "")) > 2000
}

function getPhoneNumbers(users) {
    const phoneNumbers = []
    users.forEach(user => {
        if (isBalanceMoreThan2000(user.balance)) {
            phoneNumbers.push(user.phone)
        }
    })
    return phoneNumbers
}

function getTotalBalance(users) {
    let totalBalance = 0
    users.forEach(user => {
        totalBalance += parseFloat(user.balance.replace("$", "").replace(",", ""))
    })
    return totalBalance
}

const phoneNumbers = getPhoneNumbers(users)
console.log("Телефонні номери користувачів з балансом більше 2000 доларів:")
console.log(phoneNumbers)

const totalBalance = getTotalBalance(users)
console.log("Сума всіх балансів користувачів:", totalBalance)
