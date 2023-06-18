import { IBookCard } from "../../../../models/bookCard.model";
import bookEngLevel1 from "../../../../assets/img/books/English_book_cover1.png";
import bookEngLevel2 from "../../../../assets/img/books/english_book_cover2.jpeg";
import bookEngLevel3 from "../../../../assets/img/books/english_book_cover3.jpeg";
import bookEngLevel4 from "../../../../assets/img/books/english_book_cover4.jpeg";
import bookEngLevel5 from "../../../../assets/img/books/English_book_cover5.jpg";
import bookEngLevel6 from "../../../../assets/img/books/English_book_cover6.jpg";
import BookCard from "../../../../components/BookCard";



const BooksCardsEng = () => {
    const data: IBookCard[] = [
        {
            id: "eng_a_1",
            imgSrc: `${bookEngLevel1}`,
            background: `rgba(252,233,151,0.9)`,
            rate: "A",
            subRate: "1",
            level: "Level 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "eng_a_2",
            imgSrc: `${bookEngLevel2}`,
            background: `rgba(111,177,96,0.9)`,
            rate: "A",
            subRate: "2",
            level: "Level 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "ar_b_1",
            imgSrc: `${bookEngLevel3}`,
            background: `rgba(174,211,234,0.9)`,
            rate: "B",
            subRate: "1",
            level: "Level 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "eng_b_2",
            imgSrc: `${bookEngLevel4}`,
            background: `rgb(238,159,88,0.9)`,
            rate: "B",
            subRate: "2",
            level: "Level 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "eng_c_2",
            imgSrc: `${bookEngLevel5}`,
            background: `rgba(242,229,148,0.9)`,
            rate: "C",
            subRate: "1",
            level: "Level 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "eng_c_2",
            imgSrc: `${bookEngLevel6}`,
            background: `rgba(145,212,159,0.9)`,
            rate: "C",
            subRate: "2",
            level: "Level 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },

    ]
    return (
        <div className="grid grid-cols-6  gap-x-6">
            {data?.map(item => <BookCard imgSrc={item.imgSrc}
                background={item.background} rate={item.rate}
                subRate={item.subRate} level={item.level}
                description={item.description} />)}
        </div>
    )
}

export default BooksCardsEng