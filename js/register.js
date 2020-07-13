const buttons = document.querySelector("#navButtons");
const navUserName = document.querySelector("#navUserName");
const header = document.querySelector('header')
const main = document.querySelector('#main-container');

firebase.auth().onAuthStateChanged( user => {
  if (user) {
    console.log(user);
    buttons.innerHTML = /*html*/ `
      <button class="btn btn-outline-danger" id="btn-log-out">Cerrar sesion</button>
    `
    navUserName.innerHTML = user.displayName;
    btnLogOutSession();
    main.innerHTML = '';
  } else {
    console.log("No existe usuario");
    navUserName.innerHTML = 'My routine';

    buttons.innerHTML = /*html*/ `
      <button class="btn btn-outline-success" id="btn-access">Acceder</button>
    `;
    main.innerHTML = /*html*/ `
    <form action="">
      <label for="userName">Username</label>
      <input type="text" placeholder="Userame" id="username" >
      <label for="email">Email</label>
      <input type="email" placeholder="Email" id="email" >
      <label for="password">Password</label>
      <input type="password" placeholder="Password" id="password" >
      <label for="confirm-password">Confirm password</label>
      <input type="password" placeholder="Confirm password" id="confirm-password" >
      <dir id="container-button-signup">
        <button type="submit" id="signup-button">Signup</button>
      </dir>
    </form>
    `
    header.appendChild(main);
    initSession();
    navUserName.innerHTML = 'My routine';
  }
});

const initSession = () => {
  const btnAccess = document.querySelector('#btn-access');
  btnAccess.addEventListener('click', async() => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider(); // se configura el provider
      console.log(provider)
      await firebase.auth().signInWithPopup(provider) // proporcionamos el provider
    } catch (error) {
      console.log(error)
    }
  })
}

const btnLogOutSession = () => {
  const btnLogOut = document.querySelector('#btn-log-out');
  btnLogOut.addEventListener('click', () => {
    firebase.auth().signOut()
  })
}
