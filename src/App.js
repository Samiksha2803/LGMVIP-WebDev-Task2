import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <Router> */}

      <section className="wholecontainer">
        <div class="topnav" id="myTopnav">
          <a
            rel="noreferrer" href="#" target="_blank"  class="active" >Lets Grow More </a>
          <a
            rel="noreferrer" href="#" target="_blank"  class="active" >Home </a>
          <a href="#getusers" class="btn" onClick={handleClick} >
            <h2>Get Users</h2>
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
            ) : (
              <div className="instruction">
                <p align="center"><h3>Click on"Get Users"</h3></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* </Router> */}
    </>
  );
}

export default App;