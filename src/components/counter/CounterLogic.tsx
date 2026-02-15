import { useState } from "react";
import Button from "../button/Button";


export default function CounterLogic() {
    const initValue = () => {
        let savedValue = localStorage.getItem("initialCountValue");
        let value;
        savedValue ? value = parseInt(savedValue) : value = 0;
        return value
    }

    const [count, setCount] = useState(initValue());

    return (
        <>
            <div className="text-center py-10">
                <h2 className="text-5xl xl:text-9xl">{count}</h2>
                <h4 className="text-center">Count</h4>
            </div>
            <div className=" lg:flex lg:flex-wrap lg:justify-between gap-6 py-10 max-w-2xl mx-auto">
                <Button
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    Count Up
                </Button>
                <Button
                    onClick={() => setCount(0)}
                >
                    Reset
                </Button>
                <Button
                    onClick={() => setCount((prev) => prev - 1)}
                >
                    Count Down
                </Button>
            </div>
        </>

    );
}
