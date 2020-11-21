import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
    <Timer/>
    <CurrentTime/>
    </div>
  );
}
function  CurrentTime(){
    let [now, update] = useState(new Date().toLocaleString());
    setInterval(()=>update(new Date().toLocaleString()), 1000)
    return(
        <div>Текущее время {now}</div>
    )
}
function Timer(){
    let [count, setTimeout] = useState(0);
    let [timer, setTimer] = useState();

    function stopTimer(){
        clearInterval(timer)
    }
    function startTimer () {
        setTimeout(count--)
        let t = setInterval(()=>{
          setTimeout(count--)
          if (count<0 ){
              clearInterval(t)
          }
        } , 1000)
        setTimer(t)
    }

    return(
        <div>
            <label>
                Введите секунды:
                <input onChange={e => {
                    setTimeout(e.target.value)
                    clearInterval(timer)}}
                    style={{width: 200}} type="number"  min="0"/>
            </label>
            <div>
                <button onClick={startTimer} >Старт</button>
                <button onClick={stopTimer}>Стоп</button>
                <p>Оставшееся время: {count}</p>
            </div>
        </div>
    )
}

export default App;
