function ConsoleWindow({id,title, language, part, percent}) {
    return ( <>
        <section key={id} className="work h-[200px] relative  overflow-y-scroll flex flex-col w-full p-4  items-start font-[monospace] text-sm overflow-y-auto overflow-x-hidden">
            <h2 className="hidden">work</h2>
            <h3 className="before:content-['>'] before:mr-2 opacity-50">title</h3>
            <h4 className="before:content-['>'] before:mr-2 opacity-100">{title}</h4>
            
            <h3 className="before:content-['>'] before:mr-2 opacity-50">language</h3>
            <ul className="flex before:content-['>'] before:mr-2 flex-wrap" >
                {Object.keys(language).map((lang,index) => (
                    <li key={index} className="mr-2 pacity-100 "><h4>{lang}</h4></li>
                ))}
            </ul>
            <h3 className="before:content-['>'] before:mr-2 opacity-50">part</h3>
            <ul className="flex before:content-['>'] before:mr-2 " >
                {part.map((part1,index) => (
                    <li key={part1[index]} className="mr-2 pacity-100"><h4>{part1}</h4></li>
                ))}
            </ul>
            <h3 className="before:content-['>'] before:mr-2 opacity-50">percent</h3>
            <h4 className="before:content-['>'] before:mr-2 opacity-100">{percent}</h4>
            
        </section>
    </> );
}

export default ConsoleWindow;