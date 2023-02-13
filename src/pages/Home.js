import Banner from "../components/Banner";
import Footer from "../components/Footer";
import List from "../components/List";
import Navbar from "../components/Navbar";

export function Home(params) {
    return (
        <>
            <Navbar />
            <Banner />
            <List />
            <Footer />
        </>
    )
}