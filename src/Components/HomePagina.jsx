const HomePagina = ({ setPagina }) => {

    return (
        <div>
            <h1
                style={{
                    textAlign: "center"
                    
                }}
            >Quiz Game</h1>

            <button
                type="button"
                className="btn btn-info"
                onClick={() => setPagina('Capture')}
                style={{
                    padding: "30px 20px",
                    border: "none",
                    width: "20%",
                    margin: "30px 150px",
                }}
            >Capturar Pregunta</button>

            <button
                type="button"
                className="btn btn-info"
                onClick={() => setPagina('Game')}
                style={{
                    padding: "30px 20px",
                    border: "none",
                    width: "20%",
                    margin: "30px 150px",
                }}
            >Jugar </button>
        </div>
    )
}

export default HomePagina