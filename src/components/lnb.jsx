function Lnb() {
    return ( <>
        <nav role="navigation" className="lnb fixed bottom-2 left-1/2 -translate-x-1/2  z-[10000] border border-white backdrop-blur-sm -webkit-backdrop-blur-sm  bg-black  text-textwhite rounded-full  shadow-2xl  font-medium mix-blend-difference">
            <ul className="container mx-auto px-6 py-3 flex justify-center gap-4">
                <li className="uppercase text-sm sm:text-base"><a href="#about">About</a></li>
                <li className="uppercase text-sm sm:text-base"><a href="#work">work</a></li>
                <li className="uppercase text-sm sm:text-base"><a href="#gallery">Gallery</a></li>
                <li className="uppercase text-sm sm:text-base"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </> );
}

export default Lnb;