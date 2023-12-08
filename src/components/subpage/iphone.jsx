import '../../styles/_iphone.scss'
function Iphone({url, title}) {

    return ( <>
            <section id="iphone" className="flex justify-center items-center mt-32">
                <div className="background-panels">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="phone">
                    <div className="phone-back">
                        <div className="phone-left-side">
                            <div className="phone-antena"></div>
                            <div className="phone-button top"></div>
                            <div className="phone-button"></div>
                            <div className="phone-button bottom"></div>
                            <div className="phone-antena bottom"></div>
                        </div>
                        <div className="phone-bottom">
                            <div className="phone-antena"></div>
                            <div className="bottom-speaker">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="phone-screw">
                                <div></div>
                            </div>
                            <div className="phone-charger">
                            </div>
                            <div className="phone-screw right">
                                <div></div>
                            </div>
                            <div className="bottom-speaker right">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="phone-antena right"></div>
                        </div>
                    </div>
                    <div className="phone-screen"></div>
                    <div className="phone-display">
                        <div className="phone-notch">
                            <div className="phone-speaker"></div>
                        </div>
                        
                        {/* here */}
                        <div className="display-content bg-black bg-cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/capture/${title}/mobile1.png)`}}>
                            <div className="home-button"></div>
                        </div>
                    </div>
                    <div className="phone-reflections">
                        <div className="reflection-1"></div>
                        <div className="reflection-2"></div>
                        <div className="reflection-3"></div>
                        <div className="reflection-4"></div>
                        <div className="reflection-5"></div>
                        <div className="reflection-6"></div>
                        <div className="reflection-7"></div>
                    </div>
                </div>
                <figure className="iphone bg-cover"></figure>
            </section>
    </> );
}

export default Iphone;