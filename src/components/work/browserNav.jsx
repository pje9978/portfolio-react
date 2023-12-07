function BrowserNav({url}) {
    console.log(url)
    return ( <>
        <nav className="header flex justify-center items-center bg-[#e8e8e8] h-[45px] rounded-tl-[5px] rounded-br-[0] rounded-tr-[5px] rounded-bl-[0] pl-[10px] pr-[10px] py-[10px]">
            <ul className="menu w-[70px] flex h-[25px]">
                <li className="close mx-[4px] my-[6px] p-0 h-[12px] w-[12px] block float-left rounded-[50%] bg-[#df7065]"></li>
                <li className="minimize mx-[4px] my-[6px] p-0 h-[12px] w-[12px] block float-left rounded-[50%] bg-[#e6bb46]"></li>
                <li className="maximize mx-[4px] my-[6px] p-0 h-[12px] w-[12px] block float-left rounded-[50%] bg-[#5bcc8b]"></li>
            </ul>
            <div className="search flex items-center justify-center bg-[white] w-1/2  h-[25px]  rounded-[5px] relative overflow-hidden">
                    <a href={url[0] === undefined ? "#" : url[0]} className="opacity-50 hover:opacity-100 hover:text-blue-500 leading-[25px] text-xs text-black text-left truncate ml-4">{url[0] === undefined ? "" : url[0]}</a>
            </div>
        </nav>
    </> );
}

export default BrowserNav;