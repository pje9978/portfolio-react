function Language({language}) {
    const keywords = ["html", "css", "scss", "tailwindcss", "javascipt", "react", "notion", "photoshop", "illustrator", "GitHub","firebase","figma"];
 
    return ( <>
    <article className="flex w-1/2 mx-auto mt-12 flex-wrap" >
        <div role="group" aria-label="language" className="container mx-auto w-full flex gap-2 flex-wrap justify-center">
            {keywords.map((keyword, index) => {
                const filteredItems = language.filter(item => item.includes(keyword));
                if (filteredItems.length > 0) {
                return (
                        <figure key={index} role="group" aria-label="language-img" className="w-[44px]">
                            {filteredItems.map((item, itemIndex) => (
                                <img key={itemIndex} src={`${process.env.PUBLIC_URL}/images/stack/stack-${keyword}.png`} alt={item} className="w-full" />
                            ))}
                        </figure>
                );
                } else {
                    return null;
                }
            })}
        </div>
    </article>
        
    </> );
}

export default Language;