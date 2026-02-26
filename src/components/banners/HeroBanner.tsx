import Button from "../button/Button";
import { useNavigate } from "react-router";


export default function HeroBanner() {

    const navigate = useNavigate();

    return (
        <div className="bg-linear-to-r from-blue-500 to-purple-600 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-white mb-4">Welcome to Our Website</h1>
                    <p className="text-xl text-blue-100 mb-8">Discover our services and solutions designed to help you achieve your goals.</p>
                    <Button className="btn__secondary" onClick={() => navigate("/project")}>
                        Go to Project
                    </Button>
                </div>
            </div>
        </div>
    );
}
