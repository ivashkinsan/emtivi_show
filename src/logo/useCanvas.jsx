import { useRef, useEffect } from "react";

const useCanvas = (draw)=> {

   const ref = useRef();

   useEffect(()=>{  // для отображения холста и обращение к нему до добавления в дом
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    let count = 0;
    let animationID;

    const renderer = () =>{
        // count ++;
       
        animationID = window.requestAnimationFrame(renderer);

    }
    // renderer();
    draw(context, count);
    return ()=> window.cancelAnimationFrame(animationID);

   },[draw])

    return ref
}

export default useCanvas;