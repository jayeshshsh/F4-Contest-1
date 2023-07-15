import logo from "./logo.svg";
import "./App.css";
import abs from "./Abstraction.png";
import { useState } from "react";
function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  function nameHandler(event) {
    setFname(event.target.value);
    // console.log(event.target.value);
  }

  function emailHandler(event) {
    setEmail(event.target.value);
    // console.log(event.target.value);
  }

  function passHandler(event) {
    setPass(event.target.value);
    // console.log(event.target.value);
  }

  function cpassHandler(event) {
    setCpass(event.target.value);
    // console.log(event.target.value);
  }

  function saveHandler() {
    if (pass == cpass && pass.trim().length != 0) {
      var successmsg = document.getElementById("successmsg");
      successmsg.style.display = "block";

      var failmsg = document.getElementById("failmsg");
      failmsg.style.display = "none";

      var blankmsg = document.getElementById("blankmsg");
      blankmsg.style.display = "none";

      setCpass("");
      setPass("");
      setEmail("");
      setFname("");
    } else if (
      fname.trim().length == 0 ||
      email.trim().length == 0 ||
      pass.trim().length == 0 ||
      cpass.trim().length == 0
    ) {
      var blankmsg = document.getElementById("blankmsg");
      blankmsg.style.display = "block";
    } else {
      var successmsg = document.getElementById("successmsg");
      successmsg.style.display = "none";

      var failmsg = document.getElementById("failmsg");
      failmsg.style.display = "block";

      var blankmsg = document.getElementById("blankmsg");
      blankmsg.style.display = "none";
    }
  }

  return (
    <div>
      <div className="project">
        <div className="left-side">
          <div>
            <h3>Find 3D Objects, Mockups and IIustration here</h3>
            <img className="image" src={abs} alt="image" />
          </div>
        </div>

        <div className="right-side">
          <h2>Create Account</h2>

          <input
            required
            onChange={nameHandler}
            type="text"
            id="fname"
            placeholder="First Name"
            value={fname}
          />
          <input
            required
            onChange={emailHandler}
            type="email"
            id="email"
            placeholder="Email"
            value={email}
          />
          <input
            required
            onChange={passHandler}
            type="password"
            id="pass"
            placeholder="Password"
            value={pass}
          />
          <input
            required
            onChange={cpassHandler}
            type="password"
            id="cpass"
            placeholder="Confirm Password"
            value={cpass}
          />

          <button onClick={saveHandler}>Create Account</button>

          <h5 id="successmsg">Successfully Created !</h5>
          <h5 id="failmsg">Password didn't matched</h5>
          <h5 id="blankmsg">Enter All Details</h5>
          <h5></h5>
        </div>
      </div>
    </div>
  );
}

export default App;
