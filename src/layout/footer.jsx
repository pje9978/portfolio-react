function Footer() {
    return ( <>
        <footer id="contact" className="mt-24">
            <div className="container mx-auto">
                <h2 className="content__title md:text-[10vw] font-larger text-[15vw]  opacity-80" data-splitting
                                data-effect10>Contact.</h2>
                
            </div>
            {/* <svg className=" w-full" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                <span className="text-white">Contact.</span>
                <polygon className="w-full" points="5,5 195,10 185,185 10,195" />
               
                <foreignobject className="text-white w-full  text-2xl text-center" y="15" width="100%" height="100%">

                
                
                </foreignobject>

            </svg> */}
            <div role="group" aria-label="contact" className="container mx-auto flex flex-wrap w-full justify-center mt-6">
                <section className="flex flex-col justify-center items-center gap-4  tracking-widests w-full">
                    <h3 className="w-3/4 mx-auto text-3xl opacity-100 -mt-2 font-semibold text-center">Want to work together on a
                        project?</h3>
                    <section className="email relative flex flex-col sm:flex-row justify-center items-center">
                        <h4>
                            <a href="mailto:pje9978@gmail.com" className="copy-button left-0  sm:after:content-['|'] sm:after:mx-1 text-xs  opacity-50 hover:bg-[--primary] hover:text-[--secondary]">📧 pje9978@gmail.com</a>
                        </h4>


                        <h4 className="sm:after:content-['|'] after:mx-1 text-xs  opacity-50">+82 10 6563 9978</h4>
                        <h4 className="sm:after:mx-1 text-xs  opacity-50"> Gwanak-gu, Seoul</h4>
                    </section>
                </section>

            </div>
            <div role="group" aria-label="footer" className="container mx-auto px-6 py-12 ">
                <article className="flex justify-between pt-3 border-t">
                    <h5 className=" text-2xl">© 2023
                    </h5>
                    <section className="time text-2xl flex justify-center items-center sm:flex relative gap-3">
                        <section className="relative flex h-3 w-3">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bgwhite opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-bgwhite"></span>
                        </section>
                        <h5>SEOUL</h5>
                        <span id="currentTime" className="hidden sm:flex"></span>
        
                    </section>
                    <a href="#!" className="underline text-2xl">TOP</a>
                </article>
            </div>
        </footer>
    </> );
}

export default Footer;