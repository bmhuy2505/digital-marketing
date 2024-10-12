import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideDown } from "../../utility/animation";

const NavbarLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Features",
        link: "#",
    },
    {
        id: 3,
        title: "Shop",
        link: "#",
    },
    {
        id: 4,
        title: "About us",
        link: "#",
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
    },
];

const Navbar = () => {
    return (
        <>
            <motion.div
                variants={slideDown(0.4)}
                initial="initial"
                animate="animate"
                className="container flex justify-between items-center py-8"
            >
                {/* Logo section */}
                <div className="flex items-center gap-1">
                    <img src={Logo} alt="" className="w-[70px]" />
                    <p className="font-bold text-2xl">HUSTLE</p>
                </div>
                {/* Link section */}
                <div className="hidden md:block">
                    <ul className="flex gap-3 lg:gap-7">
                        {NavbarLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a
                                        href={link.link}
                                        className="hover:text-primary uppercase text-sm xl:text-base"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Button section */}
                <div>
                    <button className="primary-btn">Request For Quotes</button>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
