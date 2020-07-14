class Home {
  constructor(){
    this.containerSessions = document.querySelector('#container-sessions');
  
  }

  userNameHome = () => {
  }

  showSessions = async () => {
    const sessions = await getData();
    Object.entries(sessions).forEach(
      session => session.forEach(
      exercise =>
      console.log(exercise)
    ));
    // for(let exercise of sessions){

    //   const exerciseBySession = getDataBySession(exercise);
    //   console.log(exerciseBySession)
    // }
    //Array.from.sessions.forEach(session => console.log(session));
  }
}

const home = new Home();
home.showSessions();