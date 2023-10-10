import React, { useEffect } from 'react'

export default function Form() {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        script.onload = () => {
          var formsappForm = new window.formsapp('64f61b9ef0b17b023b43bb8d', 'standard', {"width":"100%","height":"750px","opacity":0});
        }
      },[])
      return <div formsappId="64f61b9ef0b17b023b43bb8d" className='w-100'></div>;
}
