class Exercise {
  constructor() {
    this.card = document.querySelector(".card");
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

    
      //header card
      const cardHeaderTitle = document.createElement("div");
      cardHeaderTitle.setAttribute("class", "card-header");
      cardHeaderTitle.innerHTML = this.getTitleSession();
      this.card.appendChild(cardHeaderTitle);
      //body card
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      this.card.appendChild(cardBody);
  
      const exercisesProp = { ...[exercises[0][1]] };
  
      for (const prop in exercisesProp[0]) {
        let value = exercisesProp[0][prop];
  
        console.log(`${prop} and ${value}`);
  
        if (prop !== "video" || prop !== "image") {
          // title name with prop value
          const cardTitle = document.createElement("h5");
          cardTitle.setAttribute("class", "card-title");
          cardTitle.innerHTML = prop;
          cardBody.appendChild(cardTitle);
  
          const valueP = document.createElement("p");
          valueP.setAttribute("class", "card-text");
          valueP.innerHTML = value;
          cardTitle.appendChild(valueP);
        } else if (prop === "video") {
          const videoExercise = document.createElement("a");
          listSessionContainer.setAttribute("class", "btn btn-primary");
          listSessionContainer.setAttribute("href", `${value}`);
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
