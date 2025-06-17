import { useState } from "react";

import registerLottie from "../assets/Animation - 1750142963559.json"; // make sure you have this
import Lottie from "lottie-react";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // 🔐 Add Firebase register logic here
    console.log("Registering user:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row-reverse items-center justify-center min-h-screen px-6">
      {/* Lottie Animation */}
      <div className="  justify-center">
        <Lottie
          animationData={registerLottie}
          loop={true}
          style={{ height: "400px", width: "400px" }}
        />
      </div>

      {/* Registration Form */}
      <div className="w-full max-w-md p-6 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
