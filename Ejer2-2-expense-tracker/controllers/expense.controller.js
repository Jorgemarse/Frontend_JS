/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class ExpenseController {
    constructor(service, view){
        this.service = service;
        this.view = view;

        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTransaction(this.handleAddTransaction);
        this.view.bindRemoveTransaction(this.handleRemoveTransaction);
        
        this.onTodoListChanged(this.service.todos);
    }
    onTodoListChanged = transaction => {
        this.view.addTransactionDOM(transaction);
      };
    
    handleAddTransaction(text, amount) {
        if (text.trim() !== '' && amount.trim() !== '') {
          this.service.addTransaction(text, amount);
        }
    }
    handleRemoveTransaction(text, amount) {
        if (text.trim() !== '' && amount.trim() !== '') {
           this.service.removeTransaction(id);
        }
    }

}