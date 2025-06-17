import { useState } from "react";
import loginLottie from "../assets/Animation - 1750150347922.json"; // download your preferred login animation
import Lottie from "lottie-react";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // 🔐 Add Firebase login logic here
        console.log("Logging in:", formData);
    };

    return (
        <div className="flex flex-col md:flex-row lg:flex-row-reverse items-center justify-center min-h-screen px-6">
            {/* Lottie Animation */}
            <div className=" justify-center">
                <Lottie
                    animationData={loginLottie}
                    loop={true}
                    style={{ height: "400px", width: "400px" }}
                />
            </div>

            {/* Login Form */}
            <div className="w-full max-w-md p-6 bg-base-100 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
