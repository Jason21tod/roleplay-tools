import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import './app.css';
import './styles/reset.css'

import MapContainer from './components/map_container/map_container'
import ToggleSide from './components/toggle_side/toggle_side';


const socket = io(process.env.REACT_APP_SERVER, {
  transports: ["websocket"],
});

console.log(process.env.REACT_APP_SERVER)

function App() {
  return (
    <main className="app_container">
      <section className="app_container_game">
        <div className="player_area">
          <MapContainer />
          <ToggleSide/>
        </div>
        <ButtonTest />
      </section>
    </main>
  );
}

function ButtonTest() {
  const [pressedTimes, setPressed] = useState(0);

  const handlePressed = () => {
    socket.emit("button_pressed", "button clicked");
  };

  useEffect(() => {
    // Recebe atualizações de estado
    socket.on("state_received", (pressed_times) => {
      setPressed(pressed_times);
    });

    // Limpeza do evento
    return () => {
      socket.off("state_received");
    };
  }, []);

  return (
    <div>
      <p>Vezes apertadas: {pressedTimes}</p>
      <button onClick={handlePressed}>Aperta esse aqui</button>
    </div>
  );
}

export default App;
