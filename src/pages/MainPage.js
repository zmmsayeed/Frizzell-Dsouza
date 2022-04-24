import Navbar from '../components/Navbar';
import About from '../sections/About';
import Contact from '../sections/Contact';
import MainSection from '../sections/MainSection';
import Music from '../sections/Music';
import Subscribe from '../sections/Subscribe';

import { useInView } from "react-intersection-observer";
import Watch from '../sections/Watch';

function MainPage() {
    const [mainSectionRef, MainSectionInView] = useInView({ threshold: 0.5 });
    const [musicRef, musicInView] = useInView({ threshold: 0.5 });
    const [subscribeRef, subscribeInView] = useInView({ threshold: 0.5 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
    const [watchRef, watchInView] = useInView({ threshold: 0.5 });
    const [contactRef, contactInView] = useInView({ threshold: 0.5 });

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

    return (
        <>
            <Navbar activeSection={activeSection} />
            <MainSection refSection={mainSectionRef} />
            <Music refSection={musicRef} />
            <Subscribe refSection={subscribeRef} />
            <About refSection={aboutRef} />
            <Watch refSection={watchRef} />
            <Contact refSection={contactRef} />
        </>
    );
}

export default MainPage;