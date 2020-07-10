const tryAA = async () => {
  try {
    const data = await fetch("https://journey-gym-server-app.herokuapp.com/session")
    console.log(data);
    const info = await data.json();
    console.log(info); 
  } catch (error) {
    console.log("error", error);
  }
}
tryAA();