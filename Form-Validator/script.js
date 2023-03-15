const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};
//Show input success message
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// Chack email is vaild
function isValidEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}


// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Username validator
    if(username.value === ''){
        showError(username, 'Username is required');
    } else{
        showSuccess(username);
    }
    //Age validator
    if(age.value === ''){
        showError(age, 'Age is required');
    }else if(!(age.value < 1000) || !(age.value > -1)){
        showError(age, 'Age must be between 0-1000');
    }else{
        showSuccess(age);
    }
    //Email validator
    if(email.value === ''){
        showError(email, 'Email is required');
    } else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    } 
    else{
        showSuccess(email);
    }
    //Password validator
    
    if(password.value === ''){
        showError(password, 'Password is required');
    }
    else{
        const up_re = /[A-Z]/;
        const low_re = /[a-z]/;
        const dig_re = /[0-9]/;
        const sym_re = /^(?=.*[#^<>[\]_|\\+\-={}/'";:.,`~$@$!%*?&()])/;
        if (password.value.length >= 8){
            if(up_re.test(password.value)){
                if(low_re.test(password.value)){
                    if(dig_re.test(password.value)){
                        if(sym_re.test(password.value)){
                             showSuccess(password);
                        } else{
                             showError(password, 'Password must have at list one symbol'); 
                        }
                    } else{
                         showError(password, 'Password must have at list one digit'); 
                    }
                } else{
                     showError(password, 'Password must have at list one lower case'); 
                }
            } else{
                 showError(password, 'Password must have at list one upper case'); 
            }
        } else{
         showError(password, 'Password must have 8 or more character');
        }

    //Password confirm validator
    if(password2.value === ''){
        showError(password2, 'Confirm password');
    }else if(!(password2.value === password.value)){
        showError(password2, 'Password doesn\'t match');
    }
    else{
        showSuccess(password2);
    }
    } 
});