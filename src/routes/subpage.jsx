import { useLocation, useParams } from "react-router-dom";
import Gnb from "../components/gnb";
import Device from "../components/subpage/device";
import '../styles/_macbook.scss';
import MacBook from "../components/subpage/macbook";
import Loading from "../components/loading";
import BackgroundBall from "../components/bgBall";
import Language from "../components/subpage/Language";
import Result from "../components/subpage/result";
import { useEffect } from "react";
import Iphone from "../components/subpage/iphone";
import Page from "../components/subpage/page";
function SubPage(props) {
    let { id } = useParams();
    const location = useLocation();

    useEffect(() => {
      // 스크롤을 상단으로 이동시키는 함수 호출
      scrollToTop();
    }, [location]);
  
    const scrollToTop = () => {
      // 스크롤을 상단으로 이동시키는 함수 작성
      window.scrollTo(0, 0);
    };
    if (props.data.length === 0) {
        return <Loading />; // 데이터 로딩 중에는 로딩 메시지를 출력하도록 처리
    }
    const index = props.data.findIndex(item => item.id === id);


    return ( <>
        <Gnb/>
        <BackgroundBall />
        <main id="data-container" className="btn relative z-10 w-screen" >
            <div className="container mx-auto px-6">
                
                <section aria-label="intro" className="w-full relative pt-24">
                    <p className="text-xs tracking-widest flex flex-col mb-12 opacity-50 after:content-[''] after:w-[1px] after:mx-auto  after:h-[20px] after:bg-[--primary] after:mt-12">
                        <span className=" rounded px-1 leading-3">Web Design</span>
                        <span className=" rounded px-1 leading-3">Web Publishing</span>
                    </p>
                    <Device device={props.data[index].device}/>
                    <h2 className="title text-5xl font-semibold mt-6 capitalize">{props.data[index].title}</h2>
                    <h3 className="subTitle text-sm leading-relaxed w-2/3 mx-auto mt-2">{props.data[index].subTitle}</h3>
                   
                </section>
            
         
                <MacBook title={props.data[index].title} />
                <Language language={props.data[index].language}/>
                <article className="text-gray-600 mt-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                        <path
                            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                        </path>
                    </svg>
                    <h3 className="title text-3xl font-semibold mt-2 capitalize text-gray-400">할 수 있어요</h3>
                    <Result result={props.data[index].result}/>
                    <span rol="line" aria-label="desc-line" className="inline-block h-1 w-10 rounded bg-white/50 my-12"></span>
                </article>
                <Iphone device={props.data[index].device} url={props.data[index].url} title={props.data[index].title}/>
                <section className="my-12">
                    <header>
                        <h2 className="content__title grid text-center" data-splitting data-effect10>
                            <span className="md:text-[10vw] font-larger text-[15vw]  opacity-80 -mt-2">pages.</span>
                        </h2>
                    </header>            
                    <article className="flex justify-start lg:w-2/3 md:w-2/3 gap-3 mx-auto flex-col  sm:flex-row flex-nowrap items-start py-12  p-4">
              
                        <Page url={props.data[index].url} result={props.data[index].result} title={props.data[index].title}/>
                            
                    </article>
                    {/* <ul className="flex justify-center sm:w-[60vw] mx-auto flex-col  sm:flex-row flex-nowrap items-stretch py-12">
                            <li role="group" aria-label="page" className="flex flex-col w-1/2 md:self-start relative">
                            </li>
                    </ul> */}
                </section> 

               
               

                {props.data[index].link.pdf ? (<a href={props.data[index].link.pdf} className="pdf block border text-xs border-white/50 text-white/80 hover:text-white/100 hover:border-white/100 px-3 py-3 mt-4 text-sm uppercase font-medium"> 기획서 보러가기 </a>) : null }
                
              
            </div>

        </main>
    </> );
}

export default SubPage;