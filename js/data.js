const getData = async () => {
  const response = await fetch("https://journey-gym-server.herokuapp.com/session", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
    dataType: "text",
  });
    const respJson = await response.json();
    console.log(respJson)
};
getData();
