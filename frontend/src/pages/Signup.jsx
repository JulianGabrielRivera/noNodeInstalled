import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Signup = () => {
  const [users, setUsers] = useState(null);
  const [signUpObject, setSignUpObject] = useState({
    email: "",
  });
  const emailHandler = (e) => {
    setSignUpObject({ ...signUpObject, [e.target.name]: e.target.value });
  };

  const signUpUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/signup", signUpObject)
      .then((response) => {
        setUsers([...users, response.data]);
        console.log(users);
      });
  };
  const allUsers = () => {
    axios.get("http://localhost:3001/users/all").then((response) => {
      setUsers(response.data);
      console.log(users);
    });
  };

  useEffect(() => {
    allUsers();
  }, []);
  console.log(signUpObject);
  return (
    <div>
      <form>
        <h1>Signup</h1>
        <input
          type="text"
          onChange={emailHandler}
          name="email"
          value={signUpObject.email}
        />
        <button onClick={signUpUser}>Sign up</button>
      </form>
      {users &&
        users.map((user) => {
          return (
            <>
              <p>{user.email}</p>
            </>
          );
        })}
    </div>
  );
};
