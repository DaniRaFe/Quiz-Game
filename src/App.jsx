import { useState } from "react";
import './Components/Game.css'
import HomePagina from "./Components/HomePagina";
import CapturePagina from "./Components/CapturePagina";
import GamePagina from "./Components/GamePagina";
import FinalPagina from "./Components/FinalPagina";
import SeeAnswers from "./Components/SeeAnswers";

function App() {

  const [pagina, setPagina] = useState('Home')
  const [puntuacion, setPuntuacion] = useState(0);

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (

    <div className="container mt-2">

      {
        pagina === 'Home' && (
          <div>
            <HomePagina
              setPagina={setPagina}
            />
          </div>
        )
      }

      {
        pagina === 'Capture' && (
          <div>
            <CapturePagina
              setPagina={setPagina}
              listQuestions={listQuestions}
              setListQuestions={setListQuestions}
            />
          </div>
        )
      }

      {

        pagina === 'Game' && (
          <div>
            <GamePagina
              pagina={pagina}
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Finish' && (
          <div>
            <FinalPagina
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Answers' && (
          <div>
            <SeeAnswers
              setPagina={setPagina}
              listQuestions={listQuestions}
            />
          </div>
        )
      }

    </div>
  )
}

export default App