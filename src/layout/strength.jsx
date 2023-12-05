
function Strength() {
    return ( <>
            <section id="strength" className="w-screen my-24">
                <div role="group" aria-label="conainer" className="container relative mx-auto flex flex-col justify-center px-6">
                    <header className="text-center mb-8">
                        <h2 className="content__title grid text-center" data-splitting data-effect10>
                            <span className="md:text-[10vw] font-larger text-[15vw]  opacity-80">Strength.</span>
                        </h2>
                        <a href="https://www.notion.so/GALLUP-5-b1c9b3e695064cf1a51e8175a170877e?pvs=4" className="hover:opacity-100 text-xs opacity-50 p-2 link z-0  text-xs underline  after:content-['_↗']">강점 보고서 자세히 보기</a>
                    </header>
                    <ul className="relative flex flex-wrap justify-center items-center mt-4">
                        <li className="popup-item w-32 flex flex-col  justify-center items-center  aspect-square border border-white/40 hover:border-white/100 hover:text-xl cursor-pointer after:opacity-0">
                            <h4 className="text-xs font-thin tracking-widest">적응력</h4>
                            <h3 className="font-medium">Adaptability</h3>
                        </li>
                        <li className="popup-item w-32 flex  flex-col  justify-center items-center  aspect-square border border-white/40 hover:border-white/100 hover:text-xl cursor-pointer">
                            <h4 className="text-xs font-thin tracking-widest">문제해결</h4>
                            <h3 className="font-medium">Restorative</h3>
                        </li>
                        <li className="popup-item w-32 flex  flex-col  justify-center items-center  aspect-square border border-white/40 hover:border-white/100 hover:text-xl cursor-pointer">
                            <h4 className="text-xs font-thin tracking-widest">공감능력</h4>
                            <h3 className="font-medium">Empathy</h3>
                        </li>
                        <li className="popup-item w-32 flex  flex-col  justify-center items-center  aspect-square border border-white/40 hover:border-white/100 hover:text-xl cursor-pointer">
                            <h4 className="text-xs font-thin tracking-widest">미래지향</h4>
                            <h3 className="font-medium">Futuristic</h3>
                        </li>
                        <li className="popup-item w-32 flex flex-col  justify-center items-center  aspect-square border border-white/40 hover:border-white/100 hover:text-xl cursor-pointer">
                            <h4 className="text-xs font-thin tracking-widest">긍정적</h4>
                            <h3 className="font-medium">Positivity</h3>
                        </li>
                    </ul>

                    <article className="popup absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-textwhite backdrop-blur w-11/12 h-3/4 flex justify-center items-center z-100">
                        <h2 className="hidden">팝업</h2>
                        <section className="popup-content flex flex-col justify-center items-center m-4 p-4">
                            <span className="text-xs font-thin tracking-widest">적응력</span>
                            <span className="font-medium text-4xl">Adaptability</span>
                            <h3 className="text-base opacity-80 mt-8 text-center leading-relaxed">저는 변화에 민감하고, 유연하며, 상황의 흐름에 따라
                                적응하는 것을 선호합니다.<b>급변하는 미래에 민감하게 받아들이고 대처합니다</b></h3>
                            <h4 className="block text-sm opacity-50 my-4">
                                #도전 #미래지향 #유연함 #창의력 #효율성 #끊임없는 공부
                            </h4>
                        </section>
                        <section className="popup-content flex flex-col justify-center items-center m-4 p-4">
                            <span className="text-xs font-thin tracking-widest">문제해결</span>
                            <span className="font-medium text-4xl">Restorative</span>
                            <h3 className="text-base opacity-80 mt-8 text-center leading-relaxed">저는 문제 분석하고 해결하는 과정을
                                즐깁니다.<b>문제를 해결하는 과정에서 창의적인 사고를 하고, 새로운 관점에서 문제를 바라보고, 기존의 방식에서 구애받지 않은 새로운 해결책을
                                    도출합니다.</b></h3>
                            <h4 className="block text-sm opacity-50 my-4">
                                #도전 #미래지향 #유연함 #창의성 #효율성 추구 #끊임없는 공부
                            </h4>
                        </section>
                        <section className="popup-content flex flex-col justify-center items-center m-4 p-4">
                            <span className="text-xs font-thin tracking-widest">공감능력</span>
                            <span className="font-medium text-4xl">Empathy</span>
                            <h3 className="text-base opacity-80 mt-8 text-center leading-relaxed">상대방의 상황과 감정들을 사람들의 감정을 잘 헤아릴 수
                                있고 다른 사람의 입장에서 한 번 더 생각합니다. <b>이러한 강점은 사용자의 니즈를 파악해 서비스를 제공하겠습니다.</b></h3>
                            <h4 className="block text-sm opacity-50 my-4">
                                #이해심 #감수성 #편안함 #안정감 #통찰력
                            </h4>
                        </section>
                        <section className="popup-content flex flex-col justify-center items-center m-4 p-4">
                            <span className="text-xs font-thin tracking-widest">미래지향</span>
                            <span className="font-medium text-4xl">Futuristic</span>
                            <h3 className="text-base opacity-80 mt-8 text-center leading-relaxed">새로운 기회와 도전으로 많은 아이디어와 가능성을
                                찾아내고 혁신을 추구합니다. 변화에 대한 유연성과 적응력에 뛰어납니다. <b>저는 적극적인 변화와 혁신을 통해 생산성을 향상합니다.</b></h3>
                            <h4 className="block text-sm opacity-50 my-4">
                                #유연함 #변화 #혁신 #도전 #창의성 #예측 #비전 #변화
                            </h4>
                        </section>
                        <section className="popup-content flex flex-col justify-center items-center m-4 p-4">
                            <span className="text-xs font-thin tracking-widest">긍정적</span>
                            <span className="font-medium text-4xl">Positivity</span>
                            <h3 className="text-base opacity-80 mt-8 text-center leading-relaxed">저는 사람들의 긍정적인 모습을 잘 발견하고, 긍정적인
                                상황 속에서 그들을 돕는 것을 좋아합니다. <b>이러한 에너지와 긍정적인 힘으로 최고의 결과물을 낼 수 있습니다.</b></h3>
                            <h4 className="block text-sm opacity-50 my-4">
                                #화합 #공감 #긍정적 #에너지 #유쾌 #존중 #배려
                            </h4>
                        </section>
                        <button className="closeBtn absolute right-0 top-0 m-4" aria-label="">
                            <svg className="hover:stroke-textwhite stroke-textwhite hover:stroke-2" width="44px" height="44px"
                                viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8e5de"
                                strokeWidth="1">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <line x1="20" y1="20" x2="44" y2="44"></line>
                                    <line x1="44" y1="20" x2="20" y2="44"></line>
                                    <rect x="8" y="8" width="48" height="48"></rect>
                                </g>
                            </svg>
                        </button>
                    </article>

                    <article className="icon1 flex flex-col justify-center animate-bounce items-center mt-12">
                        <h5 className="text-xs opacity-80 z-0">블록을 클릭해주세요.</h5>
                        <svg className="mt-2" width="40px" height="40px" viewBox="0 0 24 24" fill="none"
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
                </div>
            </section>
    </> );
}

export default Strength;