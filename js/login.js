class Login{
  constructor(){
    this.emailInput = document.querySelector('#email');
    this.password = document.querySelector('#password-login');
    this.messageContainer = document.querySelector('.message-container');
    this.loginButton = document.querySelector('#login-button');
    this.
  }
  // gestionar el envio de los datos (evento "submit")
  submit = (event) => {
    event.preventDefault();

    const usersDB = db.getAllUsers();

    const email = this.emailInput.value;
    const password = this.password.value;

    // Intentar encontrar el usuario
    const user = usersDB.find( (userObj) => {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    })

    this.showMessage(user);
  }

  showMessage = (user) => {
    this.messageContainer.innerHTML = '';

    const message = document.createElement('p');

    if (user) {
      message.innerHTML = `hola, ${user.email}`;
      message.classList.add('correct-message');
    }
    else {
      message.innerHTML = 'El email o/y password son incorectos';
    }

    this.messageContainer.appendChild(message);

    if (user) this.redirect();
  }

  redirect = () => {
    setTimeout( ()=> location.assign('home.html'), 2000);
  }

}

const login = new Login();
login.loginButton.addEventListener('click', login.submit);