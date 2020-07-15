class Exercise{
  constructor(){
    this.containerExercises = document.querySelector('#container-exercises');
  }

  getSession = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const session = urlParams.get('session');
    console.log(session);
    return session;
  }

  showExercises = async (session) => {
    const sessionsData = await getData();
    const sessions = Object.entries(sessionsData).map(session => session);
    const exercises = Object.entries(sessions[session][1]);


    for(let i = 0; i <= exercises.length; i++){
      //cambiamos el titulo 
      const exercisesProp = {...[exercises[0][1]]}

      for (const iterator in exercisesProp[0]) {
        console.log(`${iterator} and ${exercisesProp[0][iterator]}`)

        const listExerciseContainer = document.createElement('div');
        listExerciseContainer.setAttribute('class', 'card');
        
        const listNameExercise = document.createElement('p');
        listNameExercise.setAttribute('id', `exercise-${iterator}`)
        listNameExercise.innerHTML = exercisesProp[0][iterator];
  
        this.containerExercises.appendChild(listExerciseContainer);
        listExerciseContainer.appendChild(listNameExercise);
      }
    }
  }
  getExercises = async () => {
    const session = this.getSession();
    const exercises = await this.showExercises(session);
    return exercises;
  }

}

const exercise = new Exercise();
// exercise.getExercises();