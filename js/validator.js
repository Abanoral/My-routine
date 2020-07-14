class Validator {
  constructor() {
    this.invalidEmailError = '*Enter a valid email';
    this.emailExistsError = '*This email is registered';
    this.passwordError = '*Password must have at least 6 characters';
    this.repeatPasswordErrors = '*Passwords do not match';

    this.errors = {
      // puede que no se iguale a los valores del constructor
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordErrors
    };
  }
  validateValidEmail = email => {
    if (this.emailIsValid(email)) {
      delete this.errors.invalidEmailError;
    } else {
      // si el email no es valido, poner el mensaje que se mostrara
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };

  emailIsValid = email => {
    // RegEx objeto special - contiene las reglas de la sintaxis
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    // metodo `test` prueba si la cadena cumple las reglas
    // y devuelve `true` o `false`
    return emailRegEx.test(email);
  };

  validateUniqueEmail = newEmail => {
    const usersDB = db.getAllUsers();
    //Nos puede devolver un array vacio, lo tenemos asi por si es null
    let emailUnique = true;
    
    if(usersDB.length>0){
      usersDB.forEach(userObj => {
        // si hay un usuario 
        if(userObj.email === newEmail){
          emailUnique=false;
        }
      });

      if(emailUnique){
        delete this.invalidEmailError
      }else{
        this.errors.invalidEmailError = this.emailExistsError;
      }
    }
  }


  validatePassword = password => {
    if (password.length > 5) {
      // quita el mensaje de error
      delete this.errors.passwordError;
    }
    else {
      // si el password tiene menos de 5 caracteres, poner el mensaje
      this.errors.passwordError = this.passwordError;
    }
  };

  validatePasswordRepeat = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
      // si los 2 passwords coinciden, quita el error
      delete this.errors.repeatPasswordError;
    }
    else {
      // si no coinciden, poner el mensaje
      this.errors.repeatPasswordError = this.repeatPasswordErrors;
    }
  };
  // solo para mostrarlos en register.hmtl
  getErrors = () => this.errors;

  //reiniciar los errores
  resetValidator = () => {
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError
    }
  };

}

const validator = new Validator();

validator.getErrors();
