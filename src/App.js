import React, { useState, useRef } from "react";
import "./App.css";
import { Aurth } from "./components/Aurth";

import Cookies from "universal-cookie";
import { Chat } from "./components/chat";

import { signOut } from "firebase/auth";

import { auth } from "./firebase-config";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <Aurth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter chat
          </button>
        </div>
      )}

      <div className="sign-out">
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  );
}

export default App;
