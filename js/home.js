class Home {
  constructor(){
    this.containerSessions = document.querySelector('#container-sessions');
    
  }

  showSessions = async () => {
    const sessionsData = await getData();
    const sessions = Object.entries(sessionsData).map( // tiene dos valores nombre de la session y sus ejercicios
      session => session);

    let indexSession = 0;
    //cambiamos el titulo
    for(const iterator of sessions){
      console.log(`${iterator[0]}`)

      const listSessionContainer = document.createElement('a');
      listSessionContainer.setAttribute('id', 'session-button');
      listSessionContainer.setAttribute('href', `./exercise.html?session=${indexSession}`);

      const listSessionTitle = document.createElement('h2');
      listSessionTitle.innerHTML = iterator[0];
      
      this.containerSessions.appendChild(listSessionContainer);
      listSessionContainer.appendChild(listSessionTitle);
      indexSession++;
    }
  }
}

const home = new Home();
home.showSessions();
