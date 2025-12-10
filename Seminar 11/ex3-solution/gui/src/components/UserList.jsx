import React, { useState, useEffect } from "react";
import "./UserList.css";
import { User } from "./User";

const serverUrl = "http://localhost:3000";

function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(serverUrl + "/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="user-list">
        {users.map((u) => (
          <User key={u.id} item={u} />
        ))}
      </div>
    </>
  );
}

export default UserList;
