import { useEffect } from 'react';
import {Popup} from '../script/popup'

function About() {
    useEffect(()=>{
        Popup();
    },[])
    return (
         <>
            <section id="about" className="w-screen my-24">
                <div role="group" aria-label="conainer" className="container mx-auto lg:w-2/3 md:w-2/3 w-full  flex flex-wrap justify-start px-6">
                    <header className="w-fit">
                        <h2 className="text-xs tracking-widest w-1/2">{'{'} About {'}'}</h2>
                        <h3 className="w-1/2 text-3xl font-medium mt-2">A brief introduction</h3>
                        <a href="#contact" className="hidden xl:flex lg:hidden mt-8 w-fit inline-flex border px-4 py-1">Contact</a>
                    </header>
                    <article className="max-w-fit xl:w-2/3 lg:w-full md:w-full sm:w-full w-full">
                        <h4 className="leading-relaxed font-small text-lg font-normal mt-4">
                            저는 다양한 경험 속에서 많은 문제들을 마주했습니다. 남들보다 문제를 많이 생각하고 발견하며, 그 문제를 반드시 해결해야 했습니다. 그 과정은 저를 성장시키고 발전시킵니다. 그리고 사람을 기본적으로 애정하는 마음이 있어, 사람들의 긍정적인 면을 많이 발견합니다. 협업에 있어 긍정적인 커뮤니케이션을 할 수 있습니다. 생산성 향상 시키는 것을 좋아해 계속해서 새로운 것을 습득해서 작업 흐름을 최적화합니다. 따라서 저는 사용자 경험을 개선해 사용자의 생산성을 향상시키겠습니다.
                        </h4>
                    </article>
                    <a href="#contact" className="xl:hidden w-32 h-32 mx-auto text-center mt-24 hover:bg-[--primary] hover:text-[--secondary] border rounded-full leading-[128px]">
                        Contact
                    </a>
                </div>
            </section>
    </> 
    );
}

export default About;