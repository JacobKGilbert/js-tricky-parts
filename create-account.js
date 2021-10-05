function createAccount(pin, amount) {
  let PIN = pin
  let balance = amount || 0

  const checkBalance = (pin) => {
    if (PIN === pin) {
      return `$${balance}`
    }
    return `Invalid PIN.`
  }

  const deposit = (pin, amount) => {
    if (PIN === pin) {
      balance += amount

      return `Succesfully deposited $${amount}. Current balance: $${balance}.`
    }
    return `Invalid PIN.`
  }

  const withdraw = (pin, amount) => {
    if (PIN === pin) {
      if (amount > balance) {
        return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
      }
      balance -= amount

      return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
    }
    return `Invalid PIN.`
  }

  const changePin = (pin, newPin) => {
    if (PIN === pin) {
      PIN = newPin
      return 'PIN successfully changed!'
    }
    return 'Invalid PIN.'
  }

  return {
    checkBalance,
    deposit,
    withdraw,
    changePin
  }
}

module.exports = { createAccount };
