import { InputUser } from "../types";
import { useContext, useState } from "react";
import { UserContext } from "../context";

export const AddUSer = () => {
    const context = useContext(UserContext)
    if(!context){
        throw new Error("undefined error")
    }
    const {handleAdd} = context

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | "">("");
    const [salary, setSalary] = useState<number | "">("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if (!name.trim() || !age || !salary) {
            setError("All fields are required");
            return;
          }
      
          const newUser: InputUser = {
            name: String(name),
            age: Number(age),
            salary: Number(salary),
          };
          handleAdd(newUser);
      
          setName("");
          setAge("");
          setSalary("");
          setError("");
    }
      return (
        <>
          <h3>Add User</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter Your age"
              value={age}
              onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
            />
            <input
              type="number"
              placeholder="Enter Your salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value ? Number(e.target.value) : "")}
            />
            <button type="submit">Add</button>
          </form>
        </>
      );
    };