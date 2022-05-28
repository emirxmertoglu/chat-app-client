import { useState } from "react";
import { io } from "socket.io-client";

const UserSelection = () => {
  const [name, setName] = useState("");

  const handleName = () => {
    if (!name) {
      alert("Please enter your name");
    } else {
      const socket = io("http://localhost:3000");
      socket.emit("new-user", name);
    }
  };

  return (
    <form onSubmit={handleName}>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input
          className="name-area"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit Name" className="name-btn" />
      </div>
    </form>
  );
};

export default UserSelection;
