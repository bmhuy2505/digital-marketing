import HeroImg from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideUp, slideLeft } from "../../utility/animation";

const Hero = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
                {/* Text content section */}
                <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
                    <motion.h1
                        variants={slideUp(0.4)}
                        initial="initial"
                        animate="animate"
                        className="text-4xl xl:text-5xl font-bold"
                    >
                        Unlock a Passion, Side Hustle, or New{" "}
                        <span className="text-gray-400 underline">
                            Profession
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={slideUp(0.6)}
                        initial="initial"
                        animate="animate"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dignissimos eligendi mollitia
                    </motion.p>
                    <motion.button
                        variants={slideUp(0.8)}
                        initial="initial"
                        animate="animate"
                        className="primary-btn bg-gray-900 hover:bg-primary duration-300"
                    >
                        More News
                    </motion.button>
                </div>

                {/* Hero Image section */}
                <div className="flex justify-center items-center">
                    <motion.img
                        variants={slideLeft(1)}
                        initial="initial"
                        animate="animate"
                        src={HeroImg}
                        alt=""
                        className="w-[90%] md:w-[550px] xl:w-[600px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
