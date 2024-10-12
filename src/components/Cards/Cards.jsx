import { motion } from "framer-motion";
import Img1 from "../../assets/icon/1.png";
import Img2 from "../../assets/icon/2.png";
import Img3 from "../../assets/icon/3.png";

const Cards = () => {
    return (
        <>
            <div className="bg-gray-50">
                <div className="container py-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Item 1 */}
                        <motion.div className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto">
                            <img
                                src={Img1}
                                alt=""
                                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
                            />
                            <p className="text-xl font-semibold">About</p>
                            <p className="text-sm text-black/80 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eum ratione consectetur ab
                                voluptas saepe odio reiciendis consequatur quam,
                                expedita voluptatibus sapiente labore voluptatum
                                fuga exercitationem dicta harum temporibus.
                                Consequatur, molestias.
                            </p>
                            <a href="#">Learn More</a>
                        </motion.div>
                        {/* Item 2 */}
                        <motion.div className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto">
                            <img
                                src={Img2}
                                alt=""
                                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
                            />
                            <p className="text-xl font-semibold">Connection</p>
                            <p className="text-sm text-black/80 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eum ratione consectetur ab
                                voluptas saepe odio reiciendis consequatur quam,
                                expedita voluptatibus sapiente labore voluptatum
                                fuga exercitationem dicta harum temporibus.
                                Consequatur, molestias.
                            </p>
                            <a href="#">Learn More</a>
                        </motion.div>
                        {/* Item 3 */}
                        <motion.div className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto">
                            <img
                                src={Img3}
                                alt=""
                                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
                            />
                            <p className="text-xl font-semibold">Plugin</p>
                            <p className="text-sm text-black/80 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eum ratione consectetur ab
                                voluptas saepe odio reiciendis consequatur quam,
                                expedita voluptatibus sapiente labore voluptatum
                                fuga exercitationem dicta harum temporibus.
                                Consequatur, molestias.
                            </p>
                            <a href="#">Learn More</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
