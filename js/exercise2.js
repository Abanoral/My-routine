class Exercise {
  constructor() {
    this.containerCards = document.querySelector('#container-exercises');
  }

  getSession = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const session = urlParams.get("session");
    console.log(session);
    return session;
  };

  getTitleSession = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionTitle = urlParams.get("titleSession");
    console.log(sessionTitle);
    return sessionTitle;
  };

  showExercises = async (session) => {
    const sessionsData = await getData();
    const sessions = Object.entries(sessionsData).map((session) => session);
    const exercises = Object.entries(sessions[session][1]);

    const exercisesProp = { ...[exercises[0][1]] };
    
    //Div card
    const card = document.createElement('div');
    card.setAttribute('class', 'card')
    //Title header
    const cardHeaderTitle = document.createElement("div");
    cardHeaderTitle.setAttribute("class", "card-header");
    
    //Card body
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    
    for (const key in exercises) {
      console.log(`Linea 41 key ${key} y exercises ${exercises[key]}`)
      if (exercises.hasOwnProperty(key)) {
        const exerciseObj = exercises[key];

        for (const prop of exerciseObj) {
          let exercise = exerciseObj[1];
          console.log(`Second loop line 47 prop: ${prop} and value${exercise}`);
          
          for (const prop in exercise) {
            if (exercise.hasOwnProperty(prop)) {
              const value = exercise[prop];
              console.log(`third loop line 52 prop ${prop} and value ${value}`)
            
              if(prop === 'name')
              {
                //add card
                this.containerCards.appendChild(card);
                //header card
                cardHeaderTitle.innerHTML = value;
                card.appendChild(cardHeaderTitle);
            
                //body card
                card.appendChild(cardBody);
              }
              else if (prop !== "video" || prop !== "image")
              {
                // title name with prop value
                const cardTitle = document.createElement("h5");
                cardTitle.setAttribute("class", "card-title");
                cardTitle.innerHTML = prop;
                cardBody.appendChild(cardTitle);
        
                const valueP = document.createElement("p");
                valueP.setAttribute("class", "card-text");
                valueP.innerHTML = value;
                cardTitle.appendChild(valueP);
              }
              else if (prop === "video")
              {
                const videoExercise = document.createElement("a");
                listSessionContainer.setAttribute("class", "btn btn-primary");
                listSessionContainer.setAttribute("href", `${value}`);
              }
            
            }
            
          }

          
        }
      }
    }
  };

  getExercises = async () => {
    const session = this.getSession();
    const exercises = await this.showExercises(session);
    return exercises;
  };
}

const exercise = new Exercise();
exercise.getExercises();
