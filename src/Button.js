import "./App.css";

export default function Button({ incr, count }) {
  // create state
  // crete fun to inc this state
  return (
    <div >
      <button className="button"
        onClick={() => {
          incr(count);
        }}
      >
        <span className="buttonSpan">
        CLICK
        </span>
      </button>
    </div>
  );
}
