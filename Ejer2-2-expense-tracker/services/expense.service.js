/**
 * @class Service
 *
 * Manages the data of the application.
 */

class ExpenseService{
    constructor(){
      this.transactions=(JSON.parse(localStorage.getItem("transactions")) || []).map(
        transaction => new Expense(transaction)
      );
      // const localStorageTransactions = JSON.parse(localStorage.getItem('transactions') || []).map(
      //     transaction => new Expense(transaction)
      //   );
      //   this.transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
    }
    bindTodoListChanged(callback) {
      this.onTodoListChanged = callback;
    }

    _commit(transactions){
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }

    addTransaction(transaction) {
        this.transactions.push(new Expense({ text }));

        this._commit(this.transactions);
    }

    removeTransaction(_id) {
        this.transactions = this.transactions.filter(({id}) => id !== _id);
      
        this._commit(this.transactions);
      
    }
    toggleExpense(_id) {
      this.transactions = this.transactions.map(transaction =>
        transaction.id === _id ? new Todo({ ...transaction}) : transaction
      );
  
      this._commit(this.transactions);
    }

    // updateLocalStorage() {
    //   this.onTodoListChanged(expenses);
    //   localStorage.setItem('transactions', JSON.stringify(transactions));
    // }

}