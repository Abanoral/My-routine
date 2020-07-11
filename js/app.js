const getData = () => {
  return fetch("https://journey-gym-server.herokuapp.com/session", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
    dataType: "text",
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};
getData();
