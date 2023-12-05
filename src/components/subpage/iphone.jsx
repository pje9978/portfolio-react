import '../../styles/_iphone.scss'
function Iphone({url, title}) {

    return ( <>
            <section id="iphone" class="flex justify-center items-center mt-32">
                <div class="background-panels">
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
                <div class="phone">
                    <div class="phone-back">
                        <div class="phone-left-side">
                            <div class="phone-antena"></div>
                            <div class="phone-button top"></div>
                            <div class="phone-button"></div>
                            <div class="phone-button bottom"></div>
                            <div class="phone-antena bottom"></div>
                        </div>
                        <div class="phone-bottom">
                            <div class="phone-antena"></div>
                            <div class="bottom-speaker">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="phone-screw">
                                <div></div>
                            </div>
                            <div class="phone-charger">
                            </div>
                            <div class="phone-screw right">
                                <div></div>
                            </div>
                            <div class="bottom-speaker right">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="phone-antena right"></div>
                        </div>
                    </div>
                    <div class="phone-screen"></div>
                    <div class="phone-display">
                        <div class="phone-notch">
                            <div class="phone-speaker"></div>
                        </div>
                        
                        {/* here */}
                        <div class="display-content bg-black bg-cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/capture/${title}/mobile1.png)`}}>
                            <div class="home-button"></div>
                        </div>
                    </div>
                    <div class="phone-reflections">
                        <div class="reflection-1"></div>
                        <div class="reflection-2"></div>
                        <div class="reflection-3"></div>
                        <div class="reflection-4"></div>
                        <div class="reflection-5"></div>
                        <div class="reflection-6"></div>
                        <div class="reflection-7"></div>
                    </div>
                </div>
                <figure class="iphone bg-cover"></figure>
            </section>
    </> );
}

export default Iphone;