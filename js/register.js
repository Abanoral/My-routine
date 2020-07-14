class Register {
  constructor(){
    this.userNameInput = document.querySelector('#username')
    this.emailInput = document.querySelector('#email')
    this.passwordInput = document.querySelector('#password')
    this.confirmPasswordInput = document.querySelector('#confirm-password')
    
    this.signupButton = document.querySelector('#signup-button');
    this.errorsWrapper = document.querySelector('.message-container');
  }

  handleEmailInput = event => {
    const email = event.target.value;
    validator.handleEmailInput(email);
    const errors = validator.getErrors();
    if(!errors.invalidEmailError) {
      validator.validateUniqueEmail(email)
    }
    this.setErrorsMessages();
  }

  handlePasswordInput = event => {
    const password = event.target.value;
    const passwordRepeat = this.confirmPasswordInput.value;

    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);
    this.setErrorsMessages();
  }
  
  handleRepeatInput = event => {
    const passwordRepeat = event.target.value;
    const password = this.passwordInput.value;
    
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);
    this.setErrorsMessages();
  }
  
  saveData = event => {
    // evento cancelado y no recarga la web
    event.preventDefault();
    const userNameInput = this.userNameInput.value;
    const emailInput = this.emailInput.value;
    const passwordInput = this.passwordInput.value;
    const confirmPasswordInput = this.confirmPasswordInput.value;

    const newUser = new User(userNameInput, emailInput, passwordInput);
    db.saveNewUser(newUser);


    // se debe vaciar el form
    this.userNameInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.confirmPasswordInput.value = '';

    this.showSuccessMessage();
    this.removeMessages();
  }

  addListeners = () => {
    this.emailInput.addEventListener('input', this.handlePasswordInput);
    this.passwordInput.addEventListener('input', this.handlePasswordInput);
    this.confirmPasswordInput.addEventListener('input', this.handleRepeatInput);

    this.signupButton.addEventListener('click', this.saveData);
  }

  setErrorsMessages = () => {
    this.errorsWrapper.innerHTML = "";
    const errorsObj = validator.getErrors();
    const errorsStringArr = Object.values(errorsObj);
    errorsStringArr.forEach( errorString =>
      {
        const errorMessageP = document.createElement('p');
        errorMessageP.innerHTML = errorString;
        
        this.errorsWrapper.appendChild(errorMessageP);
      }
    )
  }
    
  showSuccessMessage= () => {
    this.errorsWrapper.innerHTML = '';
    const errorObj = validator.getErrors();
    const errorsStringArr = Object.values(errorObj);
    
    if(errorsStringArr.length > 1){
      return;
    }

    const successMessageP = document.createElement('p');
    successMessageP.innerHTML = 'La cuenta ha sido creada con éxito';
    this.errorsWrapper.appendChild(successMessageP)
  }

  removeMessages = () => {
    setTimeout( () => {
      this.errorsWrapper.innerHTML='';
    }, 2000)
  }

}
// nueva instancia
const signUp = new Register();
// se cargan todas los event listeners en cuanto se cargue la web
window.addEventListener('load', signUp.addListeners)