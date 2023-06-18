import ProtectImage from '../../../components/ProtectImage';
import homeImage from '../../../assets/img/home/kids-with-sun.png';
import videoImage from '../../../assets/img/home/video.png';
import { useNavigate } from 'react-router-dom';
import SocialMenu from '../../../components/SoicalMenu';
import './index.css'
import BooksCardsEng from './BooksCards/BooksCardsEng';
import BooksCardsArc from './BooksCards/BooksCardsArc';

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="landing-page">
        <div className='flex flex-row gap-x-12 p-16 h-full'>
          <div className='basis-1/2'>
            <ProtectImage src={homeImage} className={`object-fit`} alt={'home-img'} />
          </div>
          <div className='basis-1/2'>
            <div className='flex flex-col gap-y-3 pr-12 pt-3'>
              <h1 className='text-7xl text-word-green-dark font-extrabold'>LEARNING IS ALWAYS FUN!</h1>
              <h5 className='text-2xl text-words-green-light font-medium '>Challenge the children to learn in a fun way!</h5>
              <p className='text-lg text-word-gray-dark-3'>Words academy has been found in hands of educators,
                content writers, painters and musical specialists who search to find the best practices and
                methods for kids to learn online Arabic and English languages by interactive and fun ways.</p>
              <div className='flex flex-row justify-between mt-24'>
                <button className='w-fit px-16 py-2 bg-words-green-light text-word-white text-base' onClick={() => navigate('/login')}>
                  Sign up Now!
                </button>
                <SocialMenu />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='why-words'>
        <div className='w-full imageBg '></div>
        <div className='w-full flex flex-row  content'>
          <div className='basis-1/2'>
            <div className='flex flex-col   justify-center items-center text-center'>
              <h1 className='text-6xl/[80px] text-word-green-dark font-extrabold'>Why Words</h1>
              <h1 className='text-6xl/[80px] text-word-green-dark font-extrabold -mt-2'>Learning Academy</h1>
              <h5 className='text-2xl text-words-green-light font-medium -mt-2'>Engagement, fun and daily passes!</h5>
              <div className='w-28 h-2 bg-words-green-light my-6'></div>
              <p className='text-lg/[26px] text-word-gray-dark-3'>An International concept has been implemented leading kids to think globally,
                using interactive, attractive and effective visions and activities..</p>
            </div>
          </div>
          <div className='basis-1/2  '>
            <ProtectImage src={videoImage} className={`object-fit h-full mx-auto `} alt={'video-image'} />
          </div>
        </div>
        <div className='w-full bg-words-green-light info  flex items-center justify-center ps-24' >
          <p className='text-word-white text-6xl/[80px] font-extrabold'>LEARNING IS ALWAYS FUN! JOIN US NOW..</p>
        </div>
      </div >
      <div className='our-books'>
        <div className='h-1/6 w-full main-title flex flex-col justify-center items-center pt-28 pb-6'>
          <h1 className='text-6xl/[80px] text-word-green-dark font-extrabold -mt-2'>Our Books</h1>
          <h5 className='text-2xl text-words-green-light font-medium -mt-2'>Fantastic and beautiful Journeys</h5>
          <div className='w-28 h-2 bg-words-green-light my-6'></div>
        </div>
        <div className='h-4/6 w-full group-books bg-word-gray-light-1 grid grid-row-2'>
          <div className="flex flex-col gap-y-12 px-24 py-12 h-full">
            <BooksCardsEng />
            <div className='flex flex-row justify-center'>
              <h5 className='text-2xl text-word-green-dark font-medium -mt-2'>Let us Learn English</h5>
            </div>
          </div>
          <div className='w-full pb-6'>
            <div className='w-full imageBg '></div>
            <div className='flex flex-col gap-y-12 px-24 py-12 h-full"'>
              <BooksCardsArc />
              <div className='flex flex-row justify-center'>
                <h5 className='text-2xl text-word-green-dark font-medium -mt-2'>Let us Learn Arabic</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-words-green-light w-full info-books py-6'>
          <div className=' bg-words-green-light info  flex flex-col items-center justify-center  w-3/5 mx-auto  gap-y-6 pt-2' >
            <p className='text-word-white text-2xl font-medium text-center'>Various and interesting levels according to European standards has been created by creative academics experts and consultants to raise awareness of teachers and students about new methods,
              strategies, and standards of learning languages</p>
              <button className='w-fit px-16 py-2 bg-word-green-dark text-word-white text-base' onClick={() => navigate('/')}>
              Find out more!
                </button>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home