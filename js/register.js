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
    console.log('email', email)
  }

  handlePasswordInput = event => {
    const password = event.target.value;
    console.log('password', password)
    
  }
  
  handleRepeatInput = event => {
    const repeatPassword = event.target.value;
    console.log('repeatPassword', repeatPassword)
  }
  
  saveData = event => {
    const userNameInput = this.userNameInput.value;
    const emailInput = this.emailInput.value;
    const passwordInput = this.passwordInput.value;
    const confirmPasswordInput = this.confirmPasswordInput.value;

    const newUser = new User(name, description, reps, sets, video, image);

    // se debe vaciar el form
    this.userNameInput.value = '';
    this.emailInput.value = '';
    this.passwordInput.value = '';
    this.confirmPasswordInput.value = '';

  }

  addListeners = () => {
    this.emailInput.addEventListener('input', this.handlePasswordInput);
    this.passwordInput.addEventListener('input', this.handlePasswordInput);
    this.confirmPasswordInput.addEventListener('input', this.handleRepeatInput);

    this.signupButton.addEventListener('click', this.saveData);
  }


}
// nueva instancia
const signUp = new Register();
// se cargan todas los event listeners en cuanto se cargue la web
window.addEventListener('load', signUp.addListeners)