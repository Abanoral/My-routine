
const botones = document.querySelector('#botones');
const nomrbreUsuario  = document.querySelector('#nombreUsuario');

const getMyJson = async () => {
  try {
    const resPost = await fetch('https://journey-gym-server-app.herokuapp.com/');
    const post = await resPost.json();
    console.log(post)
  } catch (error) {
    console.log(error)
  }
}

getMyJson()