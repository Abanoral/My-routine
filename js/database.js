class Database {
  getAllUsers = () => {
    const usersStr = localStorage.getItem("users");
    if(!usersStr){
      return []
    }else{
      return JSON.parse(usersStr);
    }
  }

  saveNewUser = (newUser) => {
    const usersArr = this.getAllUsers();

    usersArr.push(newUser);
    
    localStorage.setItem("users", JSON.stringify(usersArr))
  }
}

const db = new Database();
console.log('db', db);

