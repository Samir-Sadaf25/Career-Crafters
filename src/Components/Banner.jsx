
import Lottie from "lottie-react";
import bannerAnimation from "../assets/Animation - 1750162738286.json";
import { motion } from "motion/react"
const Banner = () => {
    return (
        <section className="bg-base-200 py-16 px-6 flex flex-col-reverse md:flex-row items-center justify-between ">
            {/* Text Section */}
            <motion.div
                className="md:w-1/2 space-y-6  text-center md:text-left lg:ml-28 justify-self-center"
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl font-bold text-primary">
                    Find Your Dream Job with CareerCrafters
                </h1>
                <p className="text-base-content text-sm">
                    Explore thousands of opportunities, connect with employers, and craft a career that fits your passion.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </motion.div>

            {/* Animated Illustration */}
            <motion.div
                className="md:w-1/2 place-self-end"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Lottie
                    autoplay
                    animationData={bannerAnimation}
                    loop={true}
                    style={{ height: "400px", width: "400px" }}
                />
            </motion.div>
        </section>
    );
};

export default Banner;
