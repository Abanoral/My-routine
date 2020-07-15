const getData = async () => {
  const response = await fetch("https://journey-gym-server.herokuapp.com/usuario", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
    },
    dataType: "text",
  });
    const respJson = await response.json();
    return respJson;
};
getData();