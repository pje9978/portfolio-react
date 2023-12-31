function ConsoleWindow({id,title, language, part, percent}) {
    const keywords = ["html", "css", "scss", "tailwindcss", "javascript", "react", "notion", "photoshop", "illustrator", "GitHub","firebase","figma"];
 
    return ( <>
        <section key={id} className="work relative  overflow-y-scroll flex flex-col w-full p-4  items-start font-[monospace] text-sm overflow-y-auto overflow-x-hidden">
            <h2 className="hidden">work</h2>
            <h3 className="before:content-['>'] before:mr-2 opacity-50">language</h3>
            <ul className="flex before:content-['>'] before:mr-2 flex-wrap" >
                {keywords.map((keyword,index) => {
                    if(language[keyword] === true){
                    return (
                        <li key={index} className="mr-2 pacity-100 "><h4>{keyword}</h4></li>
                    );
                    }else {
                        return null;
                    }
                })}

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