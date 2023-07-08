import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";



import "./index.css";
interface PageProps {
  number: number;
  imgSrc: string;
}
interface CoverProps {
  imgSrc: string;
}
const PageCover = React.forwardRef<HTMLDivElement, CoverProps>(({ imgSrc }, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <div
          className="page-image"
          style={{ backgroundImage: ` url(${imgSrc}) ` }}
        ></div>
      </div>
    </div>
  );
});



const Page = forwardRef<HTMLDivElement, PageProps>(({ number, imgSrc }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div
          className="page-image"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
        <div className="page-footer">{number + 1}</div>
      </div>
    </div>
  );
});

export default Page;
export function FlipBookPdf(props: { firstImage: string; pagesImage: { imgSrc: string; id: React.Key | null | undefined; }[]; lastImage: string; }) {
  return (
    <div
      className="container-md relative "
      style={{ backgroundColor: "#e3d0b5", maxHeight: "100vh", overflow: "hidden" }}
    >
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className={""}
        style={{}}
      // children={''}    
      >
        <PageCover imgSrc={props.firstImage} />
        {props.pagesImage?.map((p: { imgSrc: string; id: React.Key | null | undefined; }, index: number) => <Page imgSrc={p.imgSrc} number={index + 1}  key={p.id}/>)}

        <PageCover imgSrc={props.lastImage} />
      </HTMLFlipBook>
    </div>
  );
}
