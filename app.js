import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>User Notification Dashboard</h1>
        <p>Click the bell icon to view notifications.</p>
      </div>

    </div>
  );
}

export default App;
