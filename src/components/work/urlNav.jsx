import { Link } from "react-router-dom";


function UrlNav({id, index, url, link, item}) {
        
    return (<>
        <article className="bg-[#202020] w-full flex flex-row p-4 rounded-md md:flex-wrap  justify-center items-center truncate">
            <h2 className="hidden">page url</h2>
            <section className="urlArea rounded inline-flex overflow-hidden flex-wrap text-black/70">
                <h2 className="hidden">urlArea</h2>
                <ul className="flex">
                    {url && url.map((urlItem, index) => (
                        <li key={index}><a className="block text-sm bg-white px-3 py-1 capitalize" href={urlItem === undefined ? "#" : urlItem}>{urlItem === undefined ? "" : `page${index+1}`}</a></li>
                    ))} 
                </ul>
            </section>
        
            <section className="linkArea rounded inline-flex overflow-hidden flex-wrap ">
                <h2 className="hidden">linkArea</h2>
                <ul className="flex">
                    {link && Object.keys(link).map((a,index)=>(
                        <>
                            <li key={id}>
                                <a className="block text-sm bg-black/60 hover:bg-black/100 hover: hidden xl:flex px-4 py-1 capitalize " href={link === undefined ? "#" : link[a]}>{link === undefined ? "" : a}</a>
                            </li>
                            <li key={id}>
                                <Link to={`pages/${id}`} className="block text-sm bg-black/60 hover:bg-black/100 px-4 py-1 capitalize">자세히 보기</Link>
                            </li>
                        </>
                    ))}
               
                </ul>
            </section>

        </article>
    </>  );
}

export default UrlNav;