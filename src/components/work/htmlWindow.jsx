function HtmlWindow({subtitle , title}) {
    return ( <>
        <section className="editorhtml  h-[250px] content__title  p-4 flex flex-col items-start grow w-full bg-bgblack font-[monospace] text-[15px] rounded-[5px] overflow-y-auto"  data-splitting data-effect1>
            <h2 className="hidden">editoir line</h2>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px] ">
                <span className="element text-[rgb(100,150,250)]">&lt;div className=<span className="quotes text-[rgb(150,150,150)]">"header"</span>&gt;</span>
            </div>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="tab mr-[15px]"></span>
                <span className="element text-[rgb(100,150,250)]">&lt;h1&gt;</span>My
                Project<span className="element text-[rgb(100,150,250)]">&lt;/h1&gt;</span>
            </div>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="element text-[rgb(100,150,250)]">&lt;/div&gt;</span>
            </div>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="element text-[rgb(100,150,250)]">&lt;div className=<span className="quotes text-[rgb(150,150,150)]">"Project"</span>&gt;</span>
            </div>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="tab mr-[15px]"></span>
                <span className="element text-[rgb(100,150,250)]">&lt;div className=<span className="quotes text-[rgb(150,150,150)]">"Project-Intro"</span>&gt;</span>
            </div>
            <div
                className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="tab mr-[15px]"></span><span className="tab mr-[15px]"></span>
                <span className="element text-[rgb(100,150,250)]">&lt;h3&gt;</span> <span className="editorTitle">{title}</span>
                <span className="element text-[rgb(100,150,250)]">&lt;/h3&gt;</span>
            </div>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="tab mr-[15px]"></span><span className="tab mr-[15px]"></span>
                <span className="element text-[rgb(100,150,250)]">&lt;p&gt;</span>
                <span className="editorSubTitle">{subtitle}</span>
                <span className="element text-[rgb(100,150,250)]">&lt;/p&gt;</span>
            </div>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="tab mr-[15px]"></span>
                <span className="element text-[rgb(100,150,250)]">&lt;/div&gt;</span>
            </div>
            <div className="editor-line text-sm m-[2px] text-[rgb(195,215,225)] [content-increment:line] before:content-[counter(line)] before:mr-[15px]">
                <span className="element text-[rgb(100,150,250)]">&lt;/div&gt;</span>
            </div>
            <div className="p-[15px] flex flex-col justify-start items-start content__title"
            >
            </div>
        </section>
    </> );
}

export default HtmlWindow;