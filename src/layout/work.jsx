
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import EditorNav from '../components/work/editorNav'
import HtmlWindow from "../components/work/htmlWindow";
import ConsoleNav from "../components/work/consoleNav";
import WindowNav from "../components/work/windowNav"
import ConsoleWindow from "../components/work/consoleWindow";
import UrlNav from "../components/work/urlNav";
import BrowserNav from "../components/work/browserNav";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Loading from "../components/loading";



function Work() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        const fetchData = async () => {
            // ... try, catch 생략
            const q = query(collection(db, "database"), orderBy('data', 'desc') );
            getDocs(q).then((querySnapshot) => {
            let data = []; // 데이터를 저장할 배열
            querySnapshot.forEach((doc) => {
                let docData = doc.data(); // 저장된 데이터
                let docId = doc.id; // 고유 아이디
                data.push({
                ...docData,
                id: docId
                });
            });
            setData(data);
            setLoading(false);
            return data;
            });
        }

        fetchData();
        
    }, []);

    return ( 
    <>
        {loading ? (
            <Loading />
        ) : (
            <section id="work" className="w-screen my-24">
                <div role="group" aria-label="conainer" className="container md:container-2xl mx-auto flex flex-col justify-center px-6">
                    <header>
                        <h2 className="content__title grid text-center" data-splitting data-effect10>
                                <span className="md:text-[10vw] font-larger text-[15vw]  opacity-80">Work.</span>
                        </h2>
                        <h3 className="w-3/4 mx-auto text-center text-3xl text-textwhite font-semibold mt-2 ">
                            <span className="block  w-full whitespace-pre-wrap text-textwhite opacity-100">My latest projects:</span>
                            <span className="block whitespace-pre-wrap text-textwhite opacity-50">Here you can see
                                some of my latest designs and projects</span>
                        </h3>
                    </header>
                    <article className="swiper01 w-full relative mt-12">
                        <h2 className="hidden">swiper area</h2>
                        <div role="group" aria-label="swiper conainer" className="swiper-container  h-auto relative  border border-[#e8e5de]/20 rounded-[5px] overflow-hidden">
                            <WindowNav />
                            <Swiper 
                                cssMode={true} 
                                navigation={true} 
                                pagination={true}
                                mousewheel={true}
                                keyboard={true}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}  
                                className="swiper-wrapper container mx-auto sm:max-w-[fit-content] w-full  h-auto  relative bg-bgblack rounded-[5px] ">
                                {data.map((item, index) => (
                                    <SwiperSlide key={item.id} className="mySwiper h-auto workItem p-4 -pb-0 text-center text-[18px] bg-bgwhite flex flex-wrap border border-[#e8e5de]/20 ">
                                        <article className="lg:w-1/3 w-full h-[60vh] bg-black flex flex-wrap  items-stretch justify-start rounded-[5px]">
                                            <h2 className="hidden">editor</h2>
                                            <EditorNav />
                                            <HtmlWindow title={item.title} subtitle={item.subTitle}/>
                                            <ConsoleNav id={item.id} />
                                            <ConsoleWindow id={item.id} title={item.title} part={item.part} language={item.language} />
                                            <UrlNav id={item.id} index={index} url={item.url} link={item.link} title={item.titile} data={item}/>
                                        </article>
                                    
                                        <article className="lg:w-2/3 w-full h-[60vh] rounded-[5px] overflow-hidden">
                                            <h2 className="hidden">project image</h2>
                                            <div className="[box-shadow:0px_2px_3px_0px_rgba(50,_50,_50,_0.11)] border-[1px] border-[solid]  border-[#c3c3c3] w-full  rounded-[5px] relative h-full">
                                                <BrowserNav url={item.url}/>
                                                <figure className="window w-full h-fit overflow-y-scroll scale-100 rounded-tl-[0] rounded-br-[5px] rounded-tr-[0] rounded-bl-[5px]">
                                                    <img src={`${process.env.PUBLIC_URL}/images/capture/${item.title}/desktop1.png`} className="w-full border-[0] ml-[0] mr-[0] my-[0]"  alt="desktop"></img>
                                                </figure>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                    
                                ))}
                            </Swiper>
                        </div>
                        <article className="icon1  w-2/3 mx-auto animate-bounce mt-12 inline-flex justify-center flex-col items-center">
                            <h4 className="text-xs opacity-80 z-0 text-center w-2/3"> 버튼을 눌러 다음 프로젝트를 확인해 보세요.</h4>
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
                        </article>
                    </article>
                </div>
            </section>
        )}
        
    </> 
    );
}

export default Work;