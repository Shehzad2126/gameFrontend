import React from "react";
import Game from "./components/Game";
function Home() {
  return (
    <center>
      <div className="d-flex justify-content-center align-items-center bg-slate-300 vh-100">
        <div className="bg-white  pt-16 pr-4 pb-2 pl-4  rounded w-4/12 h-50">
          <Game />{" "}
        </div>
      </div>
    </center>
  );
}

export default Home;
