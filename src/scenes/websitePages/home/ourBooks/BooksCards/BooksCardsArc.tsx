import { IBookCard } from "../../../../../models/bookCard.model";
import bookArLevel1 from "../../../../../assets/img/books/arabic_book_cover_1.png";
import bookArLevel2 from "../../../../../assets/img/books/arabic_book_cover_2.png";
import bookArLevel3 from "../../../../../assets/img/books/arabic_book_cover_3.png";
import bookArLevel4 from "../../../../../assets/img/books/arabic_book_cover_4.png";
import bookArLevel5 from "../../../../../assets/img/books/arabic_book_cover_5.png";
import bookArLevel6 from "../../../../../assets/img/books/arabic_book_cover_6.png";
import BookCard from "../../../../../components/BookCard";




const BooksCardsArc = () => {
    const data: IBookCard[] = [
        {
            id: "ar_a_1",
            imgSrc: `${bookArLevel1}`,
            background: `rgba(252,233,151,0.9)`,
            rate: "A",
            subRate: "1",
            level: "Level 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "ar_a_2",
            imgSrc: `${bookArLevel2}`,
            background: `rgba(111,177,96,0.9)`,
            rate: "A",
            subRate: "2",
            level: "Level 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "ar_b_1",
            imgSrc: `${bookArLevel3}`,
            background: `rgba(174,211,234,0.9)`,
            rate: "B",
            subRate: "1",
            level: "Level 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "ar_b_2",
            imgSrc: `${bookArLevel4}`,
            background: `rgb(238,159,88,0.9)`,
            rate: "B",
            subRate: "2",
            level: "Level 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "ar_c_1",
            imgSrc: `${bookArLevel5}`,
            background: `rgba(242,229,148,0.9)`,
            rate: "C",
            subRate: "1",
            level: "Level 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },
        {
            id: "ar_c_2",
            imgSrc: `${bookArLevel6}`,
            background: `rgba(145,212,159,0.9)`,
            rate: "C",
            subRate: "2",
            level: "Level 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia et sed ex itaque ipsam  Deleniti.",
        },

    ]
    return (
     
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
                {data?.map((item ,index)=> <BookCard imgSrc={item.imgSrc}
                    background={item.background} rate={item.rate}
                    subRate={item.subRate} level={item.level}
                    description={item.description} key={item.id} delay={200*index +1} />)}
            </div>
    
    )
}

export default BooksCardsArc