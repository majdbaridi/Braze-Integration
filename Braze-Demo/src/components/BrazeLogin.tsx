import React, { useState } from "react";

interface BrazeLoginProps {
  onSubmit: (username: string) => void;
}

const BrazeLogin: React.FC<BrazeLoginProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    onSubmit(username);

    //braze.changeUser(username);
    alert(`Entered username sent to braze with external ID: ${username}`);
    // You can add further logic here, such as clearing the input field
    // setUsername('');
  };

  return (
    <div>
        <p className="text-center">Search for </p>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BrazeLogin;
