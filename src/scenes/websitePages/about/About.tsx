import ProtectImage from "../../../components/ProtectImage"
import aboutPageImage from '../../../assets/img/aboutus-new.png'
import { t } from "i18next"
import './index.css'
import { fontDir } from "../../../utils/helpFunctions"
import TitleHead from "../../../components/TitleHead"
const About = () => {
  const { dir } = fontDir();

  const backColor: string =
    dir === "ltr" ? "left-side-en"
      : "left-side-ar";
  return (
    <div className="about-page">
      <div className='flex lg:flex-row flex-col gap-y-6 gap-x-0  h-full'>
        <div className='basis-1/2 lg:pl-16 lg:pr-0 rtl:lg:pl-0 rtl:lg:pr-16 lg:py-12 bg-word-white h-full py-6 px-6 flex justify-center items-center'>
          <ProtectImage src={aboutPageImage} className={`object-fit max-h-[35rem]`} alt={'home-img'} />
        </div>
        <div className={`basis-1/2 lg:py-16 lg:pr-24 lg:pl-0 rtl:lg:pr-6 rtl:lg:pl-24 h-full px-12 py-6 ${backColor}`}>
          <div className='flex flex-col gap-y-2 justify-start'>
            <TitleHead title={`${t("WORDS ACADEMY")}`} color={"text-word-pink-light"} />
            <p className='text-2xl font-bold text-word-pink-dark -mt-3'>{`${t("Who we are ?")}`}</p>
            <div className='w-28 h-2 bg-word-pink-light my-3'></div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-3 gap-x-16 gap-y-12 lg:pb-12 pb-0">
            <div className="flex flex-col gap-y-3">
              <p className="text-sm text-word-dark">
                {`${t("Words academy has been found in hands of educators, content writers, painters and musical specialists who search to find the best practices and methods for kids to learn online Arabic and English languages by interactive and fun ways. The journey to build this platform has passed many difficulties and spent months to discover the international languages get along acquisitive standards to create topics, stories and songs suit learners around the world. Our team had many years in creating content for children and part of them had over than 20 years in educational field.")}`}
              </p>
              <p className="text-sm text-word-dark">
                {`${t("The interest of learners comes in the top of our website goals as we try to share the best topics, stories, songs and interactive activities to keep our students in passion to learn languages.")}`}
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-sm text-word-dark">
                {`${t("When we decided to create Words Academy, we looked around and wondered why our learners faces difficulties in learning languages? The common points were that many methods in learning language don’t meet the types of learners according to their intelligence and abilities! Starting from that point we have collected the most lessons and activities that suit visual, musical, social and self-learning.")}`}
              </p>
              <p className="text-sm text-word-dark">
                {`${t("We looked at European, Middle East, and international standards then we have integrated all in 12 interesting Arabic and English books. Our main characters (Jad, Tala, Sam and Sophia ) grow up with our learners, show their life stories since year 4 to year 12 in many daily biases (school, home, restaurant, park, trips, airport, hotel, malls, with celebrities and space).")}`}
              </p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About