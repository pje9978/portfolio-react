function Device({device}) {
    const keywords = ["desktop","mobile","tablet"];

    return ( <>
        <div className="deviceArea group flex justify-center items-center gap-3 mt-12">
            {keywords.map((keyword, index) => {
                if(device[keyword] === true){
                    
                    if(keyword === "desktop") {
                        return(
                            <div key={index} className="desktop flex flex-col justify-center items-center">
                                <svg className="w-[44px] opacity-60" fill="#ffefe5" viewBox="0 0 64 64" data-name="Layer 1"
                                    id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                                    <g className="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g className="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g className="SVGRepo_iconCarrier">
                                        <title></title>
                                        <path
                                            d="M55.88,45H42.32a2,2,0,0,1,0-4H53.88V37.55a2,2,0,0,1,4,0V43A2,2,0,0,1,55.88,45Z">
                                        </path>
                                        <path
                                            d="M21.87,45H8.13a2,2,0,0,1-2-2V10.78a2,2,0,0,1,2-2H55.88a2,2,0,0,1,2,2v16a2,2,0,0,1-4,0v-14H10.13V41H21.87a2,2,0,0,1,0,4Z">
                                        </path>
                                        <path d="M33.19,19.3H24.77a2,2,0,0,1,0-4h8.42a2,2,0,0,1,0,4Z"></path>
                                        <path d="M39.23,19.3H39a2,2,0,0,1,0-4h.25a2,2,0,0,1,0,4Z"></path>
                                        <path
                                            d="M42.13,53.72H21.87a2,2,0,0,1-2-2V43a2,2,0,0,1,2-2H42.13a2,2,0,0,1,2,2v8.68A2,2,0,0,1,42.13,53.72Zm-18.26-4H40.13V45H23.87Z">
                                        </path>
                                        <path d="M48.4,53.72H15.6a2,2,0,1,1,0-4H48.4a2,2,0,1,1,0,4Z"></path>
                                    </g>
                                </svg>
                                <span className="tracking-widest text-xs opacity-40">Desktop</span>
                            </div>
                        )
                    }else if(keyword === "tablet"){
                        return (
                        <div key={index} className="tablet flex flex-col justify-center items-center">
                            <svg className="w-[44px] opacity-60" fill="#ffefe5" viewBox="0 0 64 64" data-name="Layer 1"
                                id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title></title>
                                    <path
                                        d="M56.75,52.44h-6a2,2,0,0,1,0-4h4V15.56H9.25V48.44H39.5a2,2,0,0,1,0,4H7.25a2,2,0,0,1-2-2V13.56a2,2,0,0,1,2-2h49.5a2,2,0,0,1,2,2V50.44A2,2,0,0,1,56.75,52.44Z">
                                    </path>
                                    <path d="M36.37,44.68H27.63a2,2,0,0,1,0-4h8.74a2,2,0,0,1,0,4Z"></path>
                                </g>
                            </svg>
                            <span className="tracking-widest text-xs opacity-40">Tablet</span>
                        </div>
                        )
                    }else if(keyword === "mobile"){
                        return (
                        <div key={index} className="mobile flex flex-col justify-center items-center">
                            <svg className="w-[44px] opacity-60" fill="#ffefe5" viewBox="0 0 64 64" data-name="Layer 1"
                                id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title></title>
                                    <path
                                        d="M47,59.5H17a2,2,0,0,1-2-2V6.5a2,2,0,0,1,2-2H47a2,2,0,0,1,2,2v6.23a2,2,0,1,1-4,0V8.5H19v47H45V24.27a2,2,0,1,1,4,0V57.5A2,2,0,0,1,47,59.5Z">
                                    </path>
                                    <path d="M36.5,51h-9a2,2,0,0,1,0-4h9a2,2,0,0,1,0,4Z"></path>
                                </g>
                            </svg>
                            <span className="tracking-widest text-xs opacity-40">Mobile</span>
                        </div>
                        );
                    }
                }else {
                    return null;
                }
            })}
        
        </div>
    </> );
}

export default Device;