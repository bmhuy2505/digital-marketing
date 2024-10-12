import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Cards from "./components/Cards/Cards";
import Email from "./components/Email/Email";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

const App = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <Services />
            <Banner />
            <Cards />
            <Banner2 />
            <Email />
        </main>
    );
};

export default App;
