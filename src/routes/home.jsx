import Gnb from "../components/gnb";
import Lnb from "../components/lnb";
import About from "../layout/about"
import Strength from "../layout/strength"
import Intro from "../layout/intro"
import Work from "../layout/work"
import Footer from "../layout/footer"
import BackgroundBall from "../components/bgBall"
import Gallery from "../layout/gallery";
import { animate } from "../script/animate";
import { useEffect } from "react";

function Home() {
    useEffect(()=>{
        animate();
    },[])

    return ( <>
        <BackgroundBall />
        <Gnb/>
        <Lnb/>
        <main className="btn relative z-10 w-screen flex flex-col justify-center items-center ">
            <Intro />
            <About />
            <Strength/>
            <Work/>
            <Gallery />
        </main>
        <Footer/>
       
    </> );
}

export default Home;