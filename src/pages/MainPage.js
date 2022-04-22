import Navbar from '../components/Navbar';
import About from '../sections/About';
import Contact from '../sections/Contact';
import MainSection from '../sections/MainSection';
import Music from '../sections/Music';
import Subscribe from '../sections/Subscribe';

function MainPage() {
    return (
        <>
            <Navbar />
            <MainSection />
            <Music />
            <Subscribe />
            <About />
            <Contact />
        </>
    )
}

export default MainPage;