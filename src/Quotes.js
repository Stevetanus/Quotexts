import "./App.js";

function Quotes({ inx }) {
  return (
    <div>
      <article className="lorem-text">
        <p>
          {/* {data}[{setInx}] */}
          {inx}
        </p>
      </article>
    </div>
  );
}

export default Quotes;
