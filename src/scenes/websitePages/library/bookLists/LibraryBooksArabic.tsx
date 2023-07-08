


import BookArabic from "./BookArabic";
import { data } from "./dataBookArabaic";

const LibraryBooksArabic = () => {
  

    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3">
            {data?.map(d => <BookArabic imgSrc={d.imgSrc} key={d.id} firstImage={d.firstImage} pagesImage={d.pagesImage} lastImage={d.lastImage} />)}
        </div>
    )
}

export default LibraryBooksArabic