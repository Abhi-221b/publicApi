import { useState, useEffect } from "react";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";
import Input from "../input/Input";
import '../../css/form.css'


export default function CounterLogic() {
    const initValue = () => {
        let savedValue = localStorage.getItem("initialCountValue");
        let value;
        savedValue ? value = parseInt(savedValue) : value = 0;
        return value
    }

    const [count, setCount] = useState<number>(initValue());
    const [override, setOverride] = useState<boolean>(false);
    const [cstIncValue, setCstIncValue] = useState<number>(0);
    const [cstDecValue, setCstDecValue] = useState<number>(0);
    const [incValue, setIncValue] = useState<number>(0);
    const [decValue, setDecValue] = useState<number>(0);
    const [autoCounting, setAutoCounting] = useState<boolean>(false);
    const [countingStatus, setCountingStatus] = useState<"increment" | "decrement" | "stop">("stop");

    const handleIncrement = () => setCount((prev) => prev + incValue);
    const handleDecrement = () => setCount((prev) => prev - decValue);

    useEffect(() => {
        if (countingStatus === "stop") return;
        let interval: ReturnType<typeof setInterval>;
        if (countingStatus === "increment") {
            interval = setInterval(function () {
                handleIncrement();
            }, 1000)
        } else if (countingStatus === "decrement") {
            interval = setInterval(function () {
                handleDecrement();
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [countingStatus, decValue, incValue]);

    useEffect(() => {
        localStorage.setItem("initialCountValue", String(count));
    }, [count]);

    return (
        <>
            <div className="text-center py-10">
                <h2 className="text-5xl xl:text-9xl">{count}</h2>
                <h4 className="text-center">Count</h4>
            </div>
            <div className=" lg:flex lg:flex-wrap lg:justify-between gap-6 py-10 max-w-2xl mx-auto">
                <Button disabled={override || autoCounting} onClick={() => setCount((prev) => prev + 1)} > Increment </Button>
                <Button onClick={() => { setCount(0); setOverride(false); setAutoCounting(false); setCountingStatus("stop"); }} > Reset </Button>
                <Button disabled={override || autoCounting} onClick={() => setCount((prev) => prev - 1)} > Decrement </Button>
            </div>
            <div className="custom_count py-4 text-center">
                <Checkbox
                    label="Override Count with Custom Value"
                    checkedValue={override}
                    onChange={(e) => { setOverride(e.target.checked); setAutoCounting(false); setCountingStatus("stop") }} />

                {override && <div className="mt-8 flex justify-center gap-6 items-center">
                    <div className="p-4 w-2/4 max-w-80 border border-blue-600 rounded-2xl text-left" >
                        <Input placeholder="Increeement Value..." onChange={(e) => setCstIncValue(parseInt(e.target.value) || 0)} />
                        <Button disabled={!cstIncValue} onClick={() => setCount((prev) => prev + cstIncValue)} > Increment </Button>
                    </div>
                    <div className="p-4 w-2/4 max-w-80 border border-blue-600 rounded-2xl text-left" >
                        <Input placeholder="Decrement Value..." onChange={(e) => setCstDecValue(parseInt(e.target.value) || 0)} />
                        <Button disabled={!cstDecValue} onClick={() => setCount((prev) => prev - cstDecValue)} > Decrement </Button>
                    </div>
                </div>}
            </div>

            <div className="custom_count py-4 text-center">
                <Checkbox
                    label="Start auto Countdown and Countup"
                    checkedValue={autoCounting}
                    onChange={(e) => { setOverride(false); setAutoCounting(e.target.checked); setCountingStatus("stop") }} />

                {autoCounting && <div className="lg:flex lg:flex-wrap lg:justify-between gap-6 py-10 max-w-2xl mx-auto">

                    <div className="p-4 w-2/4 max-w-80 border border-blue-600 rounded-2xl text-left" >
                        <Input placeholder="Increeement Value..." onChange={(e) => setIncValue(parseInt(e.target.value) || 0)} />
                        <Button disabled={!incValue} onClick={() => setCountingStatus((prev) => prev === "increment" ? "stop" : "increment")} > Increment </Button>

                    </div>
                    <div className="p-4 w-2/4 max-w-80 border border-blue-600 rounded-2xl text-left" >
                        <Input placeholder="Decrement Value..." onChange={(e) => setDecValue(parseInt(e.target.value) || 0)} />
                        <Button disabled={!decValue} onClick={() => setCountingStatus((prev) => prev === "decrement" ? "stop" : "decrement")} > Decrement </Button>
                    </div>
                </div>}
            </div>
        </>

    );
}
