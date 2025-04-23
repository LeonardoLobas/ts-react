import React from "react";
import "./main.css";
import Button from "./Button";

function App() {
    const [total, setTotal] = React.useState(0);

    function incrementar() {
        setTotal(() => total + 1);
    }

    return (
        <div>
            {total}
            <Button onClick={incrementar} tamanho="1.25rem">
                Incrementar
            </Button>
        </div>
    );
}

export default App;
