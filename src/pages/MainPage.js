import Navbar from '../components/Navbar';
import About from '../sections/About';
import Contact from '../sections/Contact';
import MainSection from '../sections/MainSection';
import Music from '../sections/Music';

function MainPage() {
    return (
        <>
            <Navbar />
            <MainSection />
            <Music />
            <About />
            <Contact />
        </>
    )
}

export default MainPage;