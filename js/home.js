class Home {
  constructor(){
    this.containerSessions = document.querySelector('#container-sessions');
    
  }

  sessionToUrl = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('session');
  }

  showSessions = async () => {
    const sessionsData = await getData();
    const sessions = Object.entries(sessionsData).map( // tiene dos valores nombre de la session y sus ejercicios
      session => session);
      
      for(let i = 0; i <= sessions.length; i++){
        //cambiamos el titulo
      const listSessionContainer = document.createElement('a');
      let titleIndex = 0;
      listSessionContainer.setAttribute('id', 'session-button');
      listSessionContainer.setAttribute('href', `./exercise.html?session=${sessions[i][titleIndex]}`);

      const listSessionTitle = document.createElement('h2');
      listSessionTitle.innerHTML = sessions[i][titleIndex];
      
      this.containerSessions.appendChild(listSessionContainer);
      listSessionContainer.appendChild(listSessionTitle);
    }

  }
}

const home = new Home();
home.showSessions();
