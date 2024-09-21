// const EElem = ()=>{

//     let ctx = 
//     return (
//         <>
//             <div style={{width: '164px', height: '164px'}}>
//                 <div style={{width: '164px', height: '39px', background: 'red'}}>1</div>
//                 <div style={{width: '164px', height: '24px', background: ''}}>0</div>
//                 <div style={{width: '164px', height: '39px', background: 'red'}}>2</div>
//                 <div style={{width: '164px', height: '24px', background: ''}}>0</div>
//                 <div style={{width: '164px', height: '39px', background: 'red'}}>3</div>
//             </div>
//         </>
//     )
// }

import useCanvas from "./useCanvas";
const EElem = (props)=> {
    const {draw, ...rest} = props;
   const ref = useCanvas(draw);

    return (
        <canvas ref={ref} {...rest}/>
    );
}

export default EElem;