import ProtectImage from "../../../components/ProtectImage";
import wordEnImage from "../../../assets/img/books/ENG-BOOKS-LOGO-words.png"
import bookEng1Image from "../../../assets/img/books/english_book_cover1.jpeg";
import bookEng2Image from "../../../assets/img/books/english_book_cover2.jpeg";
import bookEng3Image from "../../../assets/img/books/english_book_cover3.jpeg";
import bookEng4Image from "../../../assets/img/books/english_book_cover4.jpeg";
import bookEng5Image from "../../../assets/img/books/english_book_cover5.jpg";
import bookEng6Image from "../../../assets/img/books/english_book_cover6.jpg";
import OurBookCardEnglish from "../../../components/OurBookCardEnglish";


const BooksEnglish = () => {
    return (
        <div className="books-eng-arb md:mt-0 mt-24" dir="ltr">
            <div className="imageBg"></div>
            <div className="content">
                <div className="flex lg:flex-row flex-col  gap-x-6 gap-y-0 lg:px-12 md:px-24  px-6 ">
                    <div className="lg:w-2/5 w-100">
                        <ProtectImage src={wordEnImage} className={"object-fit"} alt={"word english"} />
                    </div>
                    <div className="lg:w-3/5 w-100 flex flex-col gap-y-3">
                        <h2 className='lg:text-6xl md:text-5xl text-4xl text-word-blue-light-1 font-extrabold  font-Luckiest'>WORDS ENGLISH SERIES</h2>
                        <h5 className='text-2xl text-word-blue-light-2  font-medium '>Let us learn English</h5>
                        <p className="text-sm text-word-dark lg:pr-40 pr-0">
                            Words English series is a lovely graded English books. Words provides plenty of chances for non-native speakers to learn English smoothly in a meaningful, simple and fantastic ways. Words books accompany students step by step to learn and enjoy English. Our books start from level 1 to level 6 that have been built regarding to the European standards. Listening, Speaking, Reading and Writing are given equal focus in level 1 to 4 while in level 5 and 6 the focus is on Reading and Writing more.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-24 md:px-32  md:mt-6 px-3 mt-12">
                    <OurBookCardEnglish title="words"imageUrl={bookEng1Image} level={"Level 1"} description={"Words is a lovely graded primary English book helps everyone to take their first step in English . It contains 4 units of 4 lessons. Each lesson has a conversation, exercises and beautiful designs to enable non-native speakers to learn and enjoy English. This book will learn you English in a very easy and amazing way"} />
                    <OurBookCardEnglish title="words"imageUrl={bookEng2Image} level={"Level 2"} description={"Words world book Level 2 helps learners to take the first step in learning English, its is a rich primary English book contains four units of four lessons. Each lesson includes a text , exercises and lovely designs. It offers you great fun and information in English .. Stay with us and you will be the better."} />
                </div>
            </div>
            <div className="imageBg"></div>
            <div className="content">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-24 md:px-32  md:mt-6 px-3 mt-12">
                    <OurBookCardEnglish title="words"imageUrl={bookEng3Image} level={"Level 3"} description={"Words Level 3 is a rich primary English book contains four units of four lessons. Each lesson includes a text , exercises and lovely designs. Words provides knowledge , information , entertainment and fun for learners to use English in a wonderful way. Words is a leader to an amazing English."} />
                    <OurBookCardEnglish title="words"imageUrl={bookEng4Image} level={"Level 4"} description={"Words world book, Level 4 helps everyone to take his/her first step in English. Words contains four units of four lessons, each lesson has a conversation, exercises, and beautiful designs to enable non- native speakers to learn and enjoy English. We hope a very interesting and useful journey for you."} />
                    <OurBookCardEnglish title="words"imageUrl={bookEng5Image} level={"Level 5"} description={"Words world book, Level 5 helps everyone to take his/her first step in English. Words contains four units of four lessons, each lesson has a conversation, exercises, and beautiful designs to enable non- native speakers to learn and enjoy English. We hope a very interesting and useful journey for you."} />
                    <OurBookCardEnglish title="words"imageUrl={bookEng6Image} level={"Level 6"} description={"Words world book, Level 6 helps everyone to take his/her first step in English. Words contains four units of four lessons, each lesson has a conversation, exercises, and beautiful designs to enable non- native speakers to learn and enjoy English. We hope a very interesting and useful journey for you."} />
            </div>
            </div>
        </div>
    )
}

export default BooksEnglish