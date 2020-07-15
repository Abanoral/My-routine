class Exercise{
  constructor(){
    this.containerExercises = document.querySelector('#container-exercises');
  }

  getExercises = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const session = urlParams.get('session');
    console.log(session);
    return session;
    
    
  }

  // showExercises = async () => {
  //   const sessionsData = await getData();
  //   const sessions = Object.entries(sessionsData).map( // tiene dos valores nombre de la session y sus ejercicios
  //     session => session);
    

  //     for(let i = 0; i <= sessions.length; i++){
  //       //cambiamos el titulo
  //     const listSessionContainer = document.createElement('div');
  //     let titleIndex = 0;
  //     listSessionContainer.setAttribute('id', 'exercise-container');
  //     listSessionContainer.setAttribute('href', `./exercise.html?session=${sessions[i][titleIndex]}`);

  //     const listSessionTitle = document.createElement('h2');
  //     listSessionTitle.innerHTML = sessions[i][titleIndex];
      
  //     this.containerSessions.appendChild(listSessionContainer);
  //     listSessionContainer.appendChild(listSessionTitle);
  //   }

  // }
}

const exercise = new Exercise();
exercise.getExercises();
//exercise.showExercises();