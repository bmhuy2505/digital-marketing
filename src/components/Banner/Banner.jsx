import BannerImg from "../../assets/3.png";
import { motion } from "framer-motion";
import { slideUp, slideLeft } from "../../utility/animation";

const Banner = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
                {/* Text content section */}
                <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
                    <motion.h1
                        variants={slideUp(0.4)}
                        initial="initial"
                        animate="animate"
                        className="text-4xl xl:text-5xl font-bold"
                    >
                        Design is not what it looks like and feels like. Design
                        is how <br />
                        <span className="text-gray-400 underline">
                            It Works
                        </span>
                    </motion.h1>
                    <motion.button
                        variants={slideUp(0.8)}
                        initial="initial"
                        animate="animate"
                        className="primary-btn bg-primary hover:bg-black hover:text-white duration-300 text-black"
                    >
                        More News
                    </motion.button>
                    <div className="flex gap-3">
                        <motion.div
                            variants={slideUp(1)}
                            initial="initial"
                            animate="animate"
                            className="space-y-2"
                        >
                            <p className="font-semibold text-lg">
                                Design Tools
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit
                            </p>
                        </motion.div>
                        <motion.div
                            variants={slideUp(1.2)}
                            initial="initial"
                            animate="animate"
                            className="space-y-2"
                        >
                            <p className="font-semibold text-lg">
                                Design Tools
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Banner Image section */}
                <div className="flex justify-center items-center">
                    <motion.img
                        variants={slideLeft(1)}
                        initial="initial"
                        animate="animate"
                        src={BannerImg}
                        alt=""
                        className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-125"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
