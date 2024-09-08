import { useState } from "react";
import "./App.css";
import { AddUSer } from "./components/addUser";
import { UserList } from "./components/userList";
import type { IUser } from "./types";
import type { InputUser } from "./types";
import { UserContext } from "./context";

function App() {
  const [users, setUsers] = useState<IUser[]>([
    {id:101, name:"Muhamad",age:45,salary:50000, isMarried:true},
    {id:102, name:"Alee",age:18,salary:75000, isMarried:false},
    {id:103, name:"Raul",age:55,salary:100000, isMarried:false},
    {id:104, name:"Gonzales",age:20,salary:63000, isMarried:true}
  ]);

const removeUser = (id:number):void=>{
    setUsers(users.filter(user=>user.id !=id))
}


const handleAdd = (user: InputUser) => {
  const newUser = { ...user, id: Date.now() };
  setUsers([...users, newUser]);
};

return (
    <>
    <UserContext.Provider value={{users,removeUser,handleAdd}}>
      <AddUSer />
      <UserList />
    </UserContext.Provider>
    </>
  );
}

export default App;
