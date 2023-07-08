import boolIcon from "../../../assets/img/new icons/book-white.svg";
import songIcon from "../../../assets/img/new icons/songs-white.svg";
import videoIcon from "../../../assets/img/new icons/video-white.svg"
import { ILibraryCard } from "../../../models/LibraryCard.model";
import LibraryCard from "../../../components/LibraryCard";
import LibraryBooksArabic from "./bookLists/LibraryBooksArabic";
import { useEffect, useState } from "react";



const LibraryList = () => {

    const data: ILibraryCard[] = [
        {
            id: "book_key",
            iconSrc: boolIcon,
            title: "Books",
            arabicId: "book_arabic",
            englishId: "book_english"

        }, {
            id: "song_key",
            iconSrc: songIcon,
            title: "Songs",
            arabicId: "song_arabic",
            englishId: "song_english"
        }
        , {
            id: "video_key",
            iconSrc: videoIcon,
            title: "Videos",
            arabicId: "video_arabic",
            englishId: "video_english"
        }
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const arrayData = [
        { id: "book_arabic", bodyList: <LibraryBooksArabic /> },
        { id: "book_english", bodyList: <></> },
        { id: "song_arabic", bodyList: <></> },
        { id: "song_english", bodyList: <></> },
        { id: "video_arabic", bodyList: <></> },
        { id: "video_english", bodyList: <></> },
    ]
    const [bodyListId, setBodyListId] = useState<string>("book_arabic")
    const [bodyList, setBodyList] = useState<React.ReactNode>()
    useEffect(() => {
        return setBodyList(arrayData?.filter(item => item.id === bodyListId)[0]?.bodyList);

    }, [arrayData, bodyListId])

    return (
        <div className="library-list lg:px-40 px-6">
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  h-auto">
                {data?.map(d => <LibraryCard iconSrc={d.iconSrc} title={d.title} key={d.id}
                    arabicId={d.arabicId}
                    englishId={d.englishId}
                    onClick={(id) => setBodyListId(id)} />)}
            </div>
            <div className="mt-56">
                {bodyList}
            </div>
        </div>
    )
}

export default LibraryList