import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { gsapAnimate } from "../script/gsap";

function Gallery() {

    const [data, setData] = useState([]);


    useEffect(()=>{
        
        const demo = document.createElement("script");
        demo.src = "/script/lib/demo.js";
        // demo.type = "text/javascript";
        // demo.async = true;
      
        const imagesloaded = document.createElement("script");
        imagesloaded.src = "/script/lib/imagesloaded.pkgd.min.js";
        // imagesloaded.async = true;
      
        const charming = document.createElement("script");
        charming.src = "/script/lib/charming.min.js";
        // charming.async = true;
      
        const TweenMax = document.createElement("script");
        TweenMax.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js";
        // TweenMax.async = true;
      
        // document.body.appendChild(imagesloaded);
        // document.body.appendChild(charming);
        // document.body.appendChild(TweenMax);
        document.body.appendChild(demo);
        gsapAnimate();
    })
    useEffect(() => {
        
        const fetchData = async () => {
            const usersCollectionRef = collection(db, 'gallery'); 
            const userSnap = await getDocs(usersCollectionRef); 
            const data = userSnap.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setData(data);
            
            // setLoding(false);
            return data;
        }

        fetchData();
        
    }, []);
    
    return ( <>
    
            <section id="gallery" className="mainpage ">
                <header className="text-center">
                    <h2 className="content__title md:text-[10vw] font-larger text-[15vw]  opacity-80" data-splitting
                        data-effect10>Gallery.</h2>
                    <h3 className="text-center text-3xl text-textwhite font-semibold mt-2 "> <span className="block  w-full whitespace-pre-wrap text-textwhite opacity-100">Previous Company Portfolio:</span>
                        <span className="text-textwhite opacity-50">A showcase of various graphic design</span>
                    </h3>
                </header>
                <div className="slideshow reveal reveal_RTL py-24 grid-cols-30">
                    {data.map((item,index) => (
                        <section key={item.id} className="slide container-2xl mx-auto">
                            <figure className="slide__img-wrap">
                                <div  alt={item.name} className="slide__img w-full bg-cover bg-center bg-no-repeat " style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/capture/gallery/thumb/${item.name}.jpg)`}}/>
                               
                            </figure>
                            <h2 className="slide__side">{item.title}</h2>
                            <article className="slide__title-wrap flex flex-col justify-start items-start">
                                <h5 className="slide__number">{index + 1}</h5>
                                <h3 className="slide__title font-semibold text-3xl mb-4">{item.title}</h3>
                                <h4 className="slide__subtitle text-sm opacity-80 -mt-3">{item.subtitle}</h4>
                                <a href={`${process.env.PUBLIC_URL}/images/capture/gallery/dtl/${item.name}.jpg`}
                                    className="relative inline-flex z-100 mt-6 px-2 py-1 border border-white/20 text-white/70 hover:border-white/100 hover:text-white/100"
                                    target="_blank" rel="noopener noreferrer">Detail Page</a>
                            </article>
                        </section>
                        
                    ))}   
                  
                    <section className="slideshow__deco">
                        <h2 className="hidden">slide background</h2>
                    </section>
                    <button className="nav nav--prev">
                        <svg className="icon icon--navarrow-prev">
                            {/* <use xlink:href="#icon-navarrow"></use> */}
                        </svg>
                    </button>
                    <button className="nav nav--next">
                        <svg className="icon icon--navarrow-next">
                            {/* <use xlink:href="#icon-navarrow"></use> */}
                        </svg>
                    </button>
                </div>
                <div className="hidden content w-[90%] sm:w-[50%] md:w-[50%] lg:w-[45%] xl:w-[30%]" id="desc">
                    <div className="content__item">
                        <span className="content__number text-xs tracking-widest">1</span>
                        <h3 className="content__title text-3xl font-medium">Automation</h3>
                        <h4 className="content__subtitle text-lg">A tree needs to be your friend if you're going to paint him
                        </h4>
                        <div className="content__text leading-relaxed text-base">Just let this happen. We just let this flow
                            right out of our minds. Just relax and let it flow. That easy. Let's put some happy little
                            clouds in our world. It's a very cold picture, I may have to go get my coat. It’s about to
                            freeze me to death. This is gonna be a happy little seascape. Let's go up in here, and start
                            having some fun The least little bit can do so much. Work on one thing at a time. Don't get
                            carried away - we have plenty of time. Put your feelings into it, your heart, it's your world.
                            These trees are so much fun. I get started on them and I have a hard time stopping.</div>
                    </div>
                    <div className="content__item">
                        <span className="content__number text-xs tracking-widest">2</span>
                        <h3 className="content__title text-3xl font-medium">Machines</h3>
                        <h4 className="content__subtitle text-lg">This is probably the greatest thing to happen in my life</h4>
                        <div className="content__text leading-relaxed text-base">We're not trying to teach you a thing to copy.
                            We're just here to teach you a technique, then let you loose into the world. Now, we're going to
                            fluff this cloud. We don't have anything but happy trees here. Let's do that again. Use what you
                            see, don't plan it. Let's go up in here, and start having some fun The least little bit can do
                            so much. Work on one thing at a time. Don't get carried away - we have plenty of time. Put your
                            feelings into it, your heart, it's your world. These trees are so much fun. I get started on
                            them and I have a hard time stopping.</div>
                    </div>
                    <div className="content__item">
                        <span className="content__number text-xs tracking-widest">3</span>
                        <h3 className="content__title text-3xl font-medium">Coexistence</h3>
                        <h4 className="content__subtitle text-lg">The only guide is your heart</h4>
                        <div className="content__text">Let's go up in here, and start having some fun The least little bit can
                            do so much. Work on one thing at a time. Don't get carried away - we have plenty of time. Put
                            your feelings into it, your heart, it's your world. These trees are so much fun. I get started
                            on them and I have a hard time stopping. But we're not there yet, so we don't need to worry
                            about it. Now let's put some happy little clouds in here. What the devil. A thin paint will
                            stick to a thick paint. I'm going to mix up a little color. </div>
                    </div>
                    <div className="content__item">
                        <span className="content__number text-xs tracking-widest">4</span>
                        <h3 className="content__title text-3xl font-medium">Bellamio</h3>
                        <h4 className="content__subtitle text-lg">The only prerequisite is that it makes you happy</h4>
                        <div className="content__text">See. We take the corner of the brush and let it play back-and-forth. This
                            is unplanned it really just happens. I'm sort of a softy, I couldn't shoot Bambi except with a
                            camera. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I
                            have more fun than most people. We'll play with clouds today. Didn't you know you had that much
                            power? You can move mountains. You can do anything. Let's go up in here, and start having some
                            fun The least little bit can do so much. Work on one thing at a time. Don't get carried away -
                            we have plenty of time. Put your feelings into it, your heart, it's your world. These trees are
                            so much fun. I get started on them and I have a hard time stopping.</div>
                    </div>
                    <div className="content__item">
                        <span className="content__number text-xs tracking-widest">5</span>
                        <h3 className="content__title text-3xl font-medium">Pastures</h3>
                        <h4 className="content__subtitle text-lg">Let's go up in here, and start having some fun</h4>
                        <div className="content__text">So often we avoid running water, and running water is a lot of fun.
                            Everyone is going to see things differently - and that's the way it should be. A big strong tree
                            needs big strong roots. Steve wants reflections, so let's give him reflections. We don't have to
                            be committed. We are just playing here. Making all those little fluffies that live in the
                            clouds. Let's go up in here, and start having some fun The least little bit can do so much. Work
                            on one thing at a time. Don't get carried away - we have plenty of time. Put your feelings into
                            it, your heart, it's your world. These trees are so much fun. I get started on them and I have a
                            hard time stopping.</div>
                    </div>
                    <div className="content__item">
                        <span className="content__number text-xs tracking-widest">6</span>
                        <h3 className="content__title text-3xl font-medium">Focus</h3>
                        <h4 className="content__subtitle text-lg">This is unplanned it really just happens</h4>
                        <div className="content__text">But we're not there yet, so we don't need to worry about it. Now let's
                            put some happy little clouds in here. What the devil. A thin paint will stick to a thick paint.
                            I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of
                            Prussian Blue. Let's go up in here, and start having some fun The least little bit can do so
                            much. Work on one thing at a time. Don't get carried away - we have plenty of time. Put your
                            feelings into it, your heart, it's your world. These trees are so much fun. I get started on
                            them and I have a hard time stopping.</div>
                    </div>
                    <button className="content__close">
                        <svg className="icon icon--longarrow">
                            {/* <use xlink:href="#icon-longarrow"></use> */}
                        </svg>
                    </button>
                </div>
                <div className="icon1 animate-bounce flex justify-center flex-col items-center mt-20">
                    <span className="text-xs opacity-80 z-0 text-center"> 이미지를 클릭해 다양한 그래픽 디자인을 확인하세요.</span>
                    <svg className=" mt-2" width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="#e8e5de">
                        <g className="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g className="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g className="SVGRepo_iconCarrier">
                            <path
                                d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="#e8e5de" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </g>
                    </svg>
                </div>
            </section>
    
    </> );
}

export default Gallery;