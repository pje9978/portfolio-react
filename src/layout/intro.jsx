import { useEffect } from "react";

function Intro() {

    useEffect(() => {
        const marquee = document.createElement("script");
        marquee.src = "/script/lib/marquee-effect.js";
        marquee.async = true;
        document.body.appendChild(marquee);
    },[]);

    return ( <>
        <section className="intro sm:h-[60vh] h-
        [30vh] sm:mt-32 mt-20  grid sm:mb-0 mb-40 place-items-center text-center">


            <header>
                <h2 className="block text-xs tracking-widest">Web Publisher</h2>
                <h3 className="intro__info text-xs tracking-widest relative opacity-60 mt-auto leading-normal info_after">나를 표현하는 동사
                </h3>
            </header>
            <h4 className="sm:text-7xl content__title relative text flex items-center text-5xl text-center py-32 pt-0 after:content-['}'] after:opacity-50 after:m-6 after:text-9xl before:content-['{'] before:text-9xl before:m-6 before:opacity-50 mb-auto"
                data-splitting data-effect28>Develop</h4>
            <section className="grid place-items-center text-center overflow-x-clip">
                <h2 className="hidden">배너</h2>
                <div className="border-t border-b border-[#e8e5de] cover w-screen mb-20 flex mt-[1vh] transform sm:-rotate-2 rotate-0  text-textwhite opacity-100">
                    <p className="first-parallel tracking-widest font-light p-2 flex selection:bg-textwhite opacity-70 hover:opacity-100">
                    </p>
                </div>
                <div className="hidden sm:flex border-t border-b border-[#e8e5de] cover w-screen mb-20 flex transform rotate-2 text-textwhite justify-end opacity-20">
                    <p className="second-parallel tracking-widest font-light p-2 flex selection:bg-textwhite opacity-70 hover:opacity-100">
                    </p>
                </div>
            </section>
        </section>
    </> );
}

export default Intro;