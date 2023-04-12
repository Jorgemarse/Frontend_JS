/**
 * @class View
 *
 * Visual representation of the model.
 */

class ExpenseView{
    constructor(){
        this.balance = document.getElementById('balance');
        this.money_plus = document.getElementById('money-plus');
        this.money_minus = document.getElementById('money-minus');
        this.list = document.getElementById('list');
        this.form = document.getElementById('form');
        this.text = document.getElementById('text');
        this.amount = document.getElementById('amount');
    }

    ClearExpense() {
          this.text.value = '';
          this.amount.value = '';
      }

    bindAddTransaction(handler) {
        this.form.addEventListener('submit', event => {
          event.preventDefault();
          
          handler(this.text.value, this.amount.value);
          this.ClearExpense();

        });
    }

    bindRemoveTransaction(handler) {
        this.list.addEventListener('click', event => {
          if (event.target.className = "delete-btn") {
            const id = event.target.parentElement.id;
            handler(id);
          }
        });
    }
  

    addTransactionDOM(transaction) {
        // Get sign
        const sign = transaction.amount < 0 ? '-' : '+';
        const item = document.createElement('li');
      
        // Add class based on value
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
      
        item.innerHTML = `
          ${transaction.text} <span>${sign}${Math.abs(
          transaction.amount
        )}</span> <button class="delete-btn" onclick="removeTransaction(${
          transaction.id
        })">x</button>
        `;
      
        list.appendChild(item);
    }

    updateValues(transactions) {
      const amounts = transactions.map(transaction => transaction.amount);
    
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
      const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    
      const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);
    
      balance.innerText = `$${total}`;
      money_plus.innerText = `$${income}`;
      money_minus.innerText = `$${expense}`;
    }
    init() {
      list.innerHTML = '';
    
      transactions.forEach(addTransactionDOM);
      updateValues();
    }
    
    init();
    

}
