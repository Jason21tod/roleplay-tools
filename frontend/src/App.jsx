import { useState } from "react";


function App() {
  return (
  <div>
      <ButtonTest/>
  </div>
  );
}

function ButtonTest() {
  const[pressedTimes, setPressed] = useState(0);

  const handlePressed = () => {
    setPressed(pressedTimes+1)
  }

  return (
    <div>
      <p>Vezes apertadas {pressedTimes}</p>
      <button onClick={handlePressed}>
        Aperta esse aqui
      </button>
    </div>
  )
}

export default App;
