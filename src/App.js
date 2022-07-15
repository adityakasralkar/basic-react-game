import './App.css';
import { useState } from "react";
import Button from "./Button";


function App() {
  const [total, setTotal] = useState(0);
  const [noOfClick, setNoOfClick] = useState(0);

  const incr = (no) => {
    setTotal(total + no);
    setNoOfClick(noOfClick + 1);
  };

  function refreshPage() {
    window.location.reload();
  }


  return (
    <div className="App">
      <header className="App-header">
      <h2 className='bn40'>WELCOME</h2>
      <p>
         You can <b>CLICK</b> any of the "3 Buttons Out of 9" 
        <br/>&
         If Total Goes <b style={{fontSize:"x-large" }}>Greater Than 10</b>
        <br/> 
        You will <span className='win'>Win</span> or You <span className='lose'>Lose</span>
      </p>
      <h1>{total}</h1>
      {noOfClick <= 2 && (
        <>
          <div className="buttons">
            <Button incr={incr} count={2} />
            <Button incr={incr} count={5} />
            <Button incr={incr} count={1} />
            <Button incr={incr} count={3} />
            <Button incr={incr} count={2} />
            <Button incr={incr} count={4} />
            <Button incr={incr} count={1} />
            <Button incr={incr} count={3} />
            {/* <Button incr={incr} count={5} /> */}
          </div>
        </>
      )}

      {noOfClick > 2 ? total > 10 ? <p>You <span className='win'>Won🎉</span></p> : <p>You <span className='lose'>Lose😞</span></p> : <></>}
      
      <div >
      <button onClick={ refreshPage } className="reload">Reload</button>
    </div>

      </header>

    </div>
  );
}

export default App;
