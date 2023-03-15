function createAccount(pin, amount = 0) {
    return {
        checkBalance(pinput) {
            if (pinput !== pin) {
                return "Wrong pin!"
            }
            return `$${amount}`;
        },
        deposit(pinput, depAmt) {
            if (pinput !== pin) {
                return "Wrong pin!"
            }
            amount += depAmt;
            return `Deposited ${depAmt} for a new balance of ${amount}`
        },
        withdraw(pinput, withAmt) {
            if (pinput !== pin) {
                return "Wrong pin!"
            }
            if (withAmt > amount) {
                return "You don't have that much money to withdraw!"
            }
            amount -= withAmt;
            return `Withdrew $${withAmt}, balance remaining $${amount}}`
        },
        changePin(pinput, newPin) {
            if (pinput !== pin) {
                return "Wrong pin!"
            }
            pin = newPin;
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
