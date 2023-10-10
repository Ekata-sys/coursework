import React, { useEffect } from 'react'

export default function Form() {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        script.onload = () => {
          var formsappForm = new window.formsapp('64f56e791a02c75af21e7b28', 'standard', {"width":"100%","height":"480px","opacity":0});
        }
      },[])
      return <div formsappId="64f56e791a02c75af21e7b28" className='formwidth'></div>;
}
