function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

if (getBalance() < 10) {
  // ... do something ...
}