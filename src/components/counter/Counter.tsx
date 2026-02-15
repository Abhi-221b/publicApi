import Container from "../container/Container";
import TopContent from "../topContent/TopContent";
import { useNavigate } from "react-router";
import CounterLogic from "./CounterLogic";

export default function Counter() {

    const navigate = useNavigate()
    const topContent = {
        title: "A Practical Approach to Developing Modern Web Interfaces with Best Practices",
        content: [
            " This project demonstrates a clean and minimal user interface built with modern web technologies. The focus is on simplicity, performance, and a smooth user experience.Each component is designed with readability and maintainability in mind. The structure keeps the code organized and easy to scale as the project grows."
        ],
        button: {
            children: "Get Started",
            onClick: () => navigate("/")
        }
    }


    return (
        <div className="counter_wrapper py-10 xl:py-20">

            <Container>
                <div className="counter_inner">
                    <TopContent
                        columnType="two"
                        titleTag="h2"
                        title={topContent.title}
                        content={topContent.content}
                        buttonProp={topContent.button}
                        isInsideComponent={true}
                    />

                    <CounterLogic />
                </div>
            </Container>
        </div>
    );
}
