import { Link } from "react-router-dom";


function UrlNav({id, index, url, link, item}) {
        
    return (<>
        <article className="bg-[#202020] w-full flex flex-col p-4 rounded-md md:flex-wrap sm:flex-row justify-center items-center truncate">
            <h2 className="hidden">page url</h2>
            <section className="urlArea rounded inline-flex overflow-hidden flex-wrap text-black/70">
                <h2 className="hidden">urlArea</h2>
                <ul>
                    {url && url.map((urlItem, index) => (
                        <li key={index}><a href={urlItem === undefined ? "#" : urlItem}>{urlItem === undefined ? "" : `page${index+1}`}</a></li>
                    ))} 
                </ul>
            </section>
        
            <section className="linkArea rounded inline-flex overflow-hidden flex-wrap mt-2  md:mt-0 sm:mt-2 sm:ml-2">
                <h2 className="hidden">linkArea</h2>
                <ul className="flex flex-wrap">
                    {link && Object.keys(link).map((a,index)=>(
                         <li key={id}>
                            <a href={link === undefined ? "#" : link[a]}>{link === undefined ? "" : a}</a>
                             <Link to={`pages/${id}`}>자세히 보기</Link>
                         </li>
                    ))}
               
                </ul>
            </section>

        </article>
    </>  );
}

export default UrlNav;