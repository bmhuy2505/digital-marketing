import ServiceImg from "../../assets/2.png";
import { motion } from "framer-motion";
import { slideLeft } from "../../utility/animation";
const Services = () => {
    return (
        <div className="container py-12">
            {/* Header section */}
            <div className="py-12 flex justify-between items-center">
                <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
                    Classes to Spark Your{" "}
                    <span className="text-gray-400 underline">Creativity</span>
                </h1>
                <p className="hidden md:block">
                    Notified to Spark your <br />
                    <span className="text-gray-400 underline">
                        Balance
                    </span>{" "}
                </p>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div
                    variants={slideLeft(0.4)}
                    initial="initial"
                    animate="animate"
                >
                    <img
                        src={ServiceImg}
                        alt=""
                        className="w-[300px] mx-auto md:max-w-[500px]"
                    />
                </motion.div>
                <motion.div
                    variants={slideLeft(0.5)}
                    initial="initial"
                    animate="animate"
                    className="max-w-[300px] mx-auto space-y-4"
                >
                    <img src={ServiceImg} alt="" className="w-14" />
                    <p className="uppercase font-semibold text-xl">
                        Learn By doing
                    </p>
                    <p className="text-gray-500 pl-6 border-l-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptates vel eaque ea dolorem voluptate,
                        nesciunt mollitia asperiores magnam? Assumenda
                        perferendis optio dicta natus nobis, cupiditate eveniet
                        libero ratione quam iusto!
                    </p>
                </motion.div>
                <motion.div
                    variants={slideLeft(0.6)}
                    initial="initial"
                    animate="animate"
                    className="max-w-[300px] mx-auto space-y-4"
                >
                    <img src={ServiceImg} alt="" className="w-14" />
                    <p className="uppercase font-semibold text-xl">
                        Learn By doing
                    </p>
                    <p className="text-gray-500 pl-6 border-l-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptates vel eaque ea dolorem voluptate,
                        nesciunt mollitia asperiores magnam? Assumenda
                        perferendis optio dicta natus nobis, cupiditate eveniet
                        libero ratione quam iusto!
                    </p>
                </motion.div>
                <motion.div
                    variants={slideLeft(0.7)}
                    initial="initial"
                    animate="animate"
                    className="max-w-[300px] mx-auto space-y-4"
                >
                    <img src={ServiceImg} alt="" className="w-14" />
                    <p className="uppercase font-semibold text-xl">
                        Learn By doing
                    </p>
                    <p className="text-gray-500 pl-6 border-l-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptates vel eaque ea dolorem voluptate,
                        nesciunt mollitia asperiores magnam? Assumenda
                        perferendis optio dicta natus nobis, cupiditate eveniet
                        libero ratione quam iusto!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
