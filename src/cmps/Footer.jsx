import React from "react";

export default function Footer(props) {
  const { showAll, showCompleted, showLeft, filter } = props;
  return (
    <div className="m-2">
      {filter === "All" ? (
        <button
          onClick={showAll}
          className="btn btn-warning me-1 w-auto h-auto "
        >
          ALL
        </button>
      ) : (
        <button
          onClick={showAll}
          className="btn btn-primary me-1 w-auto h-auto "
        >
          ALL
        </button>
      )}
      {filter === "Completed" ? (
        <button
          onClick={showCompleted}
          className="btn btn-warning me-1 w-auto h-auto "
        >
          COMPLETED
        </button>
      ) : (
        <button
          onClick={showCompleted}
          className="btn btn-primary me-1 w-auto h-auto "
        >
          COMPLETED
        </button>
      )}
      {filter === "Left" ? <button
        onClick={showLeft}
        className="btn btn-warning w-auto me-1 h-auto "
      >
        LEFT
      </button>:<button
        onClick={showLeft}
        className="btn btn-primary w-auto me-1 h-auto "
      >
        LEFT
      </button>}
    </div>
  );
}
