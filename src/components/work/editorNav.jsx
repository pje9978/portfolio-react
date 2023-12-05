function EditorNav() {
    return ( <>
        <ul className="editorNav  flex w-full rounded-[5px] overflow-hidden">
            <li className="h-8 leading-8 w-full text-xs text-white/50 tracking-widest bg-[#202020]/20">
                HTML
            </li>
            <li className="h-8 leading-8 w-full text-xs text-white/50 tracking-widest bg-[#202020]">
                CSS
            </li>
            <li className="h-8 leading-8 w-full text-xs text-white/50 tracking-widest bg-[#202020]">
                JAVASCRIPT
            </li>
    </ul>
    </> );
}

export default EditorNav;