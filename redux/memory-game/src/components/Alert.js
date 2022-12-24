import React from "react";
import { useDispatch } from "react-redux";
import { restart } from "../redux/Card/cardSlice";

function Alert() {
  const dispatch = useDispatch();
  return (
    <div
      id="alert-additional-content-1"
      className={`p-2 myalert text-white rounded-lg text-center mt-4 `}
      role="alert"
    >
      <div className="items-center">
        <button
          type="button"
          onClick={() => dispatch(restart())}
          className="text-slate-900 bg-slate-200  hover:bg-slate-300 hover:text-slate-500 ml-auto focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 text-center inline-flex items-center"
        >
          <svg
            className="-ml-0.5 mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Alert;
