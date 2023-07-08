import { useState } from "react";
import { Modal } from "antd";
import { FlipBookPdf } from "../flipBookPdf/FlibBookPdf";
interface IBookArabicModal {
    id?: string;
    imgSrc: string;
    firstImage: string;
    pagesImage: { imgSrc: string, id: React.Key | null | undefined; }[];
    lastImage: string
}
const BookArabic: React.FC<IBookArabicModal> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <div className='h-60 w-44 relative bg-cover overflow-hidden shadow-md cursor-pointer'
                style={{ backgroundImage: `url(${props.imgSrc})`, backgroundSize: "100%" }}
                onClick={() => setOpen(true)}>
            </div >
            <Modal
                title="Book"
                zIndex={100}
                width={1000}
                open={open}
                footer={null}
                onCancel={() => setOpen(false)}>
                <FlipBookPdf firstImage={props.firstImage} pagesImage={props.pagesImage} lastImage={props.lastImage} />
            </Modal>
        </>
    )
}
export default BookArabic;