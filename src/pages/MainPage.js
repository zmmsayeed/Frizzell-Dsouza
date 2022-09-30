import Navbar from '../components/Navbar';
import About from '../sections/About';
import Contact from '../sections/Contact';
import MainSection from '../sections/MainSection';
import Music from '../sections/Music';
import Press from '../sections/Press';
import Subscribe from '../sections/Subscribe';
import MainSectionNew from '../sections/MainSectionNew';
import MusicNew from '../sections/MusicNew';
import Watch from '../sections/Watch';
import Gallery from '../sections/Gallery';
import Footer from '../components/Footer';
import Launch from './Launch';

import { useInView } from "react-intersection-observer";

function MainPage() {
    const [mainSectionRef, MainSectionInView] = useInView({ threshold: 0.5 });
    const [musicRef, musicInView] = useInView({ threshold: 0.5 });
    const [subscribeRef, subscribeInView] = useInView({ threshold: 0.5 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
    const [watchRef, watchInView] = useInView({ threshold: 0.5 });
    const [contactRef, contactInView] = useInView({ threshold: 0.5 });
    const [galleryRef, galleryInView] = useInView({ threshold: 0.5 });
    const [pressRef, pressInView] = useInView({ threshold: 0.5 });

    let activeSection = "";

    if (MainSectionInView) 
        activeSection = "mainSection";
    else if (musicInView) 
        activeSection = "music";
    else if (subscribeInView) 
        activeSection = "subscribe";
    else if (aboutInView) 
        activeSection = "about";
    else if (contactInView) 
        activeSection = "contact";
    else if (watchInView)
        activeSection = "watch";
    else if (galleryInView)
        activeSection = "gallery";
    else if (pressInView)
        activeSection = "press";

    return (
        <>
            <Navbar activeSection={activeSection} />
            {/* <MainSection refSection={mainSectionRef} /> */}
            <MainSectionNew refSection={mainSectionRef} />
            {/* <Music refSection={musicRef} /> */}
            <MusicNew refSection={musicRef} />
            <Subscribe refSection={subscribeRef} />
            <About refSection={aboutRef} />
            <Watch refSection={watchRef} />
            <Gallery refSection={galleryRef} />
            <Press refSection={pressRef} />
            <Contact refSection={contactRef} />
            <Footer />
        </>
    );
}

export default MainPage;