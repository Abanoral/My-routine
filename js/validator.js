class Validator {
  constructor() {
    this.invalidEmailError = "Introduce un email valido";
    this.emailExistsError = "Este email ya esta registrado";
    this.passwordError = "La contraseña debe tener al menos 6 carateres";
    this.repeatPasswordErrors = "Los campos no coinciden";

    this.errors = {
      // puede que no se iguale a los valores del constructor
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError
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
        delete this.emailExistsError
      }else{
        this.errors.emailExistsError = this.emailExistsError;
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
      this.errors.repeatPasswordError = this.repeatPasswordError;
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
