function WindowNav() {
    return ( <>
            <nav className="h-12 border-b border-[#e8e5de]/20 w-full  flex justify-between items-center">
                <ul className="flex gap-3 shrink-0 ml-4">
                    <li className="w-4 h-4 bg-[#b22222] rounded-3xl"></li>
                    <li className="w-4 h-4 bg-[#d6bf3e] rounded-3xl"></li>
                    <li className="w-4 h-4 bg-[#4db434] rounded-3xl"></li>
                </ul>
                <h2>
                    index.html
                </h2>
                <ul className="flex gap-3 shrink-0">
                    <li className="w-4 h-4 invisible"></li>
                    <li className="w-4 h-4 invisible"></li>
                    <li className="w-4 h-4 invisible"></li>
                </ul>
            </nav>
    </> );
}

export default WindowNav;