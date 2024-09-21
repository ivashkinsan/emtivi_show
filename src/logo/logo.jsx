import React from "react";
import EElem from "./EElem";

const Logo = ()=>{
    // const sixElem = {
    //     EElem: {
    //         containWidth: 164,
    //         containHeight: 164,
    //         childElem: {
    //             childWidth: 164,
    //             childHeight: 39,
    //             gap: 24,
    //         }
    //     },
    //     M_elem: [],
    //     T_elem: [],
    //     I_left_elem: [],
    //     V_elem: [],
    //     I_right_elem: [],
    // };
    

    const draw_1 = (context, count)=>{
        // console.log(context);
        context.clearRect(0,0,context.canvas.width, context.canvas.height)
        context.fillStyle = 'grey';
        // const delta = count % 800;
        // context.fillRect(10 + delta,10,100,100);
        context.fillRect(0,0,164,39);
        context.fillRect(0,64,164,39);
        context.fillRect(0,128,164,39);
    }
    const draw_2 = (context, count)=>{
        context.clearRect(0,0,context.canvas.width, context.canvas.height)
        context.fillStyle = 'grey';
        // const delta = count % 100;
        console.log(context);
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(39, 0);
        context.lineTo(106, 85);
        context.lineTo(174, 0);
        context.lineTo(213, 0);
        context.lineTo(213, 164);
        context.lineTo(174, 164);
        context.lineTo(174, 61);
        context.lineTo(106, 146);
        context.lineTo(39, 61);
        context.lineTo(39, 164);
        context.lineTo(0, 164);
        context.lineTo(0, 0);
        context.fill();
    }
    const draw_3 = (context, count)=>{
        context.clearRect(0,0,context.canvas.width, context.canvas.height)
        context.fillStyle = 'grey';
        // const delta = count % 100;
        console.log(context);
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(164, 0);
        context.lineTo(164, 39);
        context.lineTo(102,39);
        context.lineTo(102,164);
        context.lineTo(63,164);
        context.lineTo(63,39);
        context.lineTo(0,39);
        context.lineTo(0,0);
        context.fill();
    }

    const draw_4 = (context, count)=>{
        context.clearRect(0,0,context.canvas.width, context.canvas.height)
        context.fillStyle = 'grey';
        // const delta = count % 100;
        console.log(context);

        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(82, 164);
        context.lineTo(0, 164);
        context.lineTo(0, 0);
        context.fill();

        context.beginPath();
        context.moveTo(67,0);
        context.lineTo(109, 0);
        context.lineTo(168, 119);
        context.lineTo(225, 0);
        context.lineTo(267, 0);
        context.lineTo(190, 164);
        context.lineTo(145, 164);
        context.lineTo(67, 0);
        context.fill();

        context.beginPath();
        context.moveTo(333,0);
        context.lineTo(333, 164);
        context.lineTo(255, 164);
        context.lineTo(333, 0);
        context.fill();

        // context.fill();
        context.closePath()
    }


    return(
            <div width="500" className="logoContain">
            {/* <svg width="365" height="163" viewBox="0 0 365 163" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 23.9217V38.6566H62.5947V23.9217H0ZM0 0V14.7349H62.5947V0H0ZM0 47.8435V62.5783H62.5947V47.8435H0ZM154.153 0H138.896L113.653 32.2274L88.4093 0H73.1359V62.5783H87.8708V23.1711L113.653 56.1165L139.418 23.1711V62.5783H154.153V0ZM227.289 0H164.711V14.7349H188.632V62.5783H203.367V14.7349H227.289V0ZM237.847 0V62.5783H252.565H269.252L237.847 0ZM339.473 0H323.368L301.698 45.249L279.228 0H263.123L293.213 62.5783H310.232L339.473 0ZM335.162 62.5783H350.031H364.766V0L335.162 62.5783Z" fill="url(#paint0_linear_1365_157)"/>
            <defs>
            <linearGradient id="paint0_linear_1365_157" x1="182.383" y1="0" x2="182.383" y2="62.5783" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.75" stop-color="#D7D7D7" stop-opacity="0.77"/>
            </linearGradient>
            </defs>
            </svg> */}
            {/* <EElem draw={draw}  style={{border: '1px solid black'}} width="164" height="164"/> */}
            <EElem className="logoElem" draw={draw_1} width="164" height="164"/>
            <EElem className="logoElem" draw={draw_2} width="213" height="164"/>
            <EElem className="logoElem" draw={draw_3} width="164" height="164"/>
            <EElem className="logoElem" draw={draw_4} width="333" height="164"/>
            </div>
    )
}

export default Logo;