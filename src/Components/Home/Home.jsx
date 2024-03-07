

import React from "react";
import AllQuestions from "../AllQuestions/AllQuestions";
import { Link } from "react-router-dom";
import { useAppStateValue } from "../../App";

function Home() {
  const username = localStorage.getItem("username");

  return (
    <div className="bg-slate-100 mt-[70px] pt-[50px] px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="container py-5 ">
        <div className="ask__question flex flex-col md:flex-row justify-between items-center md:mr-4">
          <div className="mb-4 md:mb-0">
            <Link to="/ask-question">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Ask Question
              </button>
            </Link>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl pr-0 md:pr-5">
            Welcome:
            <span className="username text-red-400"> {username}</span>
          </h3>
        </div>
        <div className="search__question pt-5 pb-3 pr-0 md:pr-5 md:mr-4">
          <input
            type="text"
            placeholder="search question"
            className="w-full md:w-96 lg:w-120 border border-gray-300 rounded-md p-3"
          />
        </div>
        <AllQuestions />
      </div>
    </div>
  );
}

export default Home;
