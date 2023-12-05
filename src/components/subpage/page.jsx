
function Page({url,title}) {

    const imageCount = url.length;
    const imageUrls = Array.from({ length: imageCount }, (_, index) => `${process.env.PUBLIC_URL}/images/capture/${title}/desktop${index + 1}.png`);
    
    return ( <>
                { imageUrls.map((imageUrl,index)=>(
                    <section key={index} className="text-center h-[500px] md:h-auto lg:h-auto  w-3/4 mx-auto flex flex-col gap-2">
                        <>
                            <h4 key={index} className="text-2xl font-medium mb-4">{`Page${index + 1}`}</h4>
                        
                            <a href={url[index]} className="w-full py-2 text-center border border-white/20">Link</a>
                            <figure key={index} className="relative overflow-auto">
                                <img src={`${imageUrl}`} alt={`page${index + 1}`} />

                            </figure>
                        </>
                    </section>
                ))}
    </> );
}

export default Page;