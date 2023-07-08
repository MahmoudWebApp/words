import React from "react";

// interface PageProps {
//   bg?: string;
//   nextBg?: string;
//   zIndex?: number;
//   pageTotal?: number;
// }
const BookViewer = ({bg = '', nextBg = '', zIndex = 0, pageTotal = 0}) => {
  const [flipStatus, setFlipStatus] = React.useState<boolean>(false);
  const [zIndexState, setZIndexState] = React.useState<number>(zIndex);
  
  const flipDegree = 179 - pageTotal + zIndex;
  
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if(nextBg === '') return;
    if(flipStatus) {
      // e.currentTarget.classList.add('animate-reverse');
      e.currentTarget.style.animation = `flip-reverse-${flipDegree} 1s ease-in-out forwards`;
    } else {
      // e.currentTarget.classList.add('animate');
      setZIndexState(pageTotal + 1);     
      e.currentTarget.style.animation = `flip-${flipDegree} 1s ease-in-out forwards`;
    }
  }
  const onAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    // e.currentTarget.classList.remove('animate','animate-reverse');
    e.currentTarget.style.animation = 'none';
    if(flipStatus) {
      e.currentTarget.style.transform='rotateY(0deg)'; 
      setZIndexState(zIndex); 
    } else {
      e.currentTarget.style.transform=`rotateY(-${flipDegree}deg)`;
    }
    setFlipStatus(!flipStatus);
  }
  
  const css = window.document.styleSheets[0];
  css.insertRule(`
    @keyframes flip-${flipDegree} {
      0%   { transform: rotateY(0deg); }
      100% { transform: rotateY(-${flipDegree}deg); }
    }`, css.cssRules.length);
  
  css.insertRule(`
    @keyframes flip-reverse-${flipDegree} {
      0%   { transform: rotateY(-${flipDegree}deg); }
      100% { transform: rotateY(0deg); }
    }`, css.cssRules.length);
  
  return (
    <div className="page" style={{zIndex: zIndexState}}>
      <div className="section left" style={{backgroundImage: 'url('+bg+'})'}}></div>
      <div className="section right" onClick={onClick} onAnimationEnd={onAnimationEnd} >
        <div className="frontface" style={{backgroundImage: 'url('+bg+'})'}} ></div>
        <div className="backface" style={{backgroundImage: 'url('+nextBg+'})'}}></div>  
      </div>
    </div>
  )
}
export default BookViewer 