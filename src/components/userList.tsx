import { useContext } from "react";
import { UserContext } from "../context";

export const UserList = () => {
    const context = useContext(UserContext)
    if(!context){
        throw new Error("undefined error")
    }
    const {users,removeUser} = context
    
    
  return (
    <><table  >
        <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>age</td>
                <td>salary</td>
                <td>action</td>
            </tr>
        </thead>
        <tbody>
        {
        users.map(user =>
            <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
                <td>
                    <button onClick={()=>removeUser(user.id)}>delete</button>
                </td>
            </tr>
            
        )
      }
        </tbody>
    </table>
      
    </>
  );
};
