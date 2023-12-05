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
                    <h2 class="title text-5xl font-semibold mt-6 capitalize">{props.data[index].title}</h2>
                    <h3 class="subTitle text-sm leading-relaxed w-2/3 mx-auto mt-2">{props.data[index].subTitle}</h3>
                    <Device device={props.data[index].device}/>
                    <MacBook title={props.data[index].title} />
                </section>
            

                <section className="text-gray-600 body-font mt-12">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

                            <article>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                    <path
                                        d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                    </path>
                                </svg>
                                <h3 className="title text-3xl font-semibold mt-2 capitalize">사용했어요.</h3>
                                <Language language={props.data[index].language}/>
                                <span rol="line" aria-label="desc-line" className="inline-block h-1 w-10 rounded bg-white/50 my-12"></span>
                            </article>
                            <article className="mt-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                        <path
                                            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                        </path>
                                </svg>
                                <h3 className="title text-3xl font-semibold mt-6 capitalize">할 수 있어요.</h3>
                                <Result result={props.data[index].result} index={props.data[index].id}/>
                                <span rol="line" aria-label="desc-line" className="inline-block h-1 w-10 rounded bg-white/50 my-12"></span>
                            </article>
                                {props.data[index].link.pdf ? (<a href={props.data[index].link.pdf} className="pdf block border text-xs border-white/50 text-white/80 hover:text-white/100 hover:border-white/100 px-3 py-3 mt-4 text-sm uppercase font-medium"> 기획서 보러가기 </a>) : null }
                        </div>
                    </div>
                </section>
                
                <section className="my-12">
                    <header>
                        <h2 className="content__title grid text-center" data-splitting data-effect10>
                            <span className="md:text-[10vw] font-larger text-[15vw]  opacity-80 -mt-2">pages.</span>
                        </h2>
                    </header>            
                    <ul className="flex justify-center sm:w-[60vw] mx-auto flex-col  sm:flex-row flex-nowrap items-stretch py-12">
                            <li role="group" aria-label="page" className="flex flex-col w-1/2 md:self-start relative">
                                <section className="before:content-[''] before:absolute before:w-[2px] before:h-1/2 before:-translate-y-1/2 before:block before:bg-white before:left-0 before:top-1/2 p-4">
                                    <h4 className="text-2xl font-medium">Page {1}</h4>
                                    <p className="text-sm opacity-30">페이지 {1}</p>  
                                </section>
                                <figure className="flex-1 relative md:h-auto md:overflow-auto h-[20vh] overflow-y-scroll">
                                    <img src={`${process.env.PUBLIC_URL}/images/capture/${props.data[index].title}/desktop1.png`} alt="item.name" />
                                    <figcaption className="absolute flex justify-center items-center bg-black/80 backdrop-blur text-[--white] w-full h-full opacity-0 top-0 left-0 transition ease-in-out delay-150 hover:opacity-100 uppercase">
                                        {props.data[index].url.map((url,index) => (
                                            <a href={url} key={index} className="pageLink w-40 h-40 leading-[160px] text-center bg-black text-white rounded-full font-medium">Link</a>
                                        ))}
                                    </figcaption>
                                </figure>
                            </li>
                    </ul>
                </section>               
            </div>

        </main>
    </> );
}

export default SubPage;