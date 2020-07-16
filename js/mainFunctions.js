
  const handleMenu = (e) => {
    const el = e.currentTarget;
    const toggleId = el.getAttribute('data-toggle')
    const menu = document.getElementById(toggleId)
    menu.classList.toggle('open')
  }
  
  // Añadimos evetos a los botones de menú
  const navMenuBtn = document.querySelectorAll('.navbar-toggler');
  navMenuBtn.forEach(button => {
    button.addEventListener('click', handleMenu);
  })

  const body = document.body;
  const header = document.querySelector('header');
  console.log(body)

  // const vw = () => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  // const vh = () => Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  // function bodyWidth() {
  //   if(vw>768){
  //     header.parentNode.removeChild(header);
  //     const newHeader = document.createElement('header');
  //     newHeader.classList.add('container');
  //     newHeader.innerHTML = /* is HTML */ `
  //       <nav class="navbar navbar-dark bg-dark fixed-top">
  //         <img src="./assets/logo_nuevo2.png" class="logo-my-routine"></img>
  //         <div id="navButtons">
  //           <a href="./index.html" class="button-navbar" id="nav-button">About</a>

  //           <a href="./register.html" class="button-navbar" id="nav-button">Register</a>

  //           <a href="./login.html" class="button-navbar" id="nav-button">Login</a>
  //         </div>
  //       </nav>
  //     `
  //     const main = document.querySelector('main')
  //     body.insertBefore(newHeader, main)
  //   }
  //     return;
  // }

  // setInterval(() => bodyWidth(), 1);

