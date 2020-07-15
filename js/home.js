class Home {
  constructor(){
    this.containerSessions = document.querySelector('#container-sessions');
    
  }

  userNameHome = () => {
  }

  showSessions = async () => {
    const sessionsData = await getData();
    const sessions = Object.entries(sessionsData).map( // tiene dos valores nombre de la session y sus ejercicios
      session => session);
    
      
      
      
      for(let i = 0; i <= sessions.length; i++){
        //cambiamos el titulo
      const listSessionContainer = document.createElement('div');
      listSessionContainer.setAttribute('class', 'listSessionContainer');

      const listSessionTitle = document.createElement('h2');
      listSessionTitle.innerHTML = sessions[i][0];
      
      this.containerSessions.appendChild(listSessionContainer);
      listSessionContainer.appendChild(listSessionTitle);
    }

    console.log(sessions)
  }
}

const home = new Home();
home.showSessions();
