// useScript.jsx

import { useState, useEffect } from "react";

export default function useScript(url) {
  // "idle", "loading", "ready", "error"
  const [status, setStatus] = useState(url ? "loading" : "idle");
  
  useEffect(() => {
    if (!url){
      setStatus("idle");
      return;
    }
    
    let script = document.querySelector(`script[src="${url}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);

      const setAttributeFromEvent = (event) => {
        script.setAttribute("data-status", event.type === "load" ? "ready" : "error");
      };

      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    } else {
      setStatus(script.getAttribute("data-status"));
    }

    const setStateFromEvent = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };

    // 이벤트 리스너 추가
    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);

    // 정리(cleanup) 시 이벤트 리스너 제거
    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    };
  }, [url]);
  
  return status;
}
