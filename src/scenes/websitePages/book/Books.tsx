
import BooksArabic from './BooksArabic';
import BooksEnglish from './BooksEnglish';
import LandingPage from './LandingPage';
import './index.css';

const Books = () => {
  return (
    <>
      <LandingPage />
      <BooksEnglish />
      <BooksArabic />
    </>

  )
}

export default Books