import wordArbImage from "../../../assets/img/books/ARABIC-BOOKS-LOGO-BUSTAN.png";
import OurBookCardArabic from "../../../components/OurBookCardArabic";
import ProtectImage from "../../../components/ProtectImage";
import bookArb1Image from "../../../assets/img/books/arabic_book_cover_1.png";
import bookArb2Image from "../../../assets/img/books/arabic_book_cover_2.png";
import bookArb3Image from "../../../assets/img/books/arabic_book_cover_3.png";
import bookArb4Image from "../../../assets/img/books/arabic_book_cover_4.png";
import bookArb5Image from "../../../assets/img/books/arabic_book_cover_5.png";
import bookArb6Image from "../../../assets/img/books/arabic_book_cover_6.png";
import TitleHead from "../../../components/TitleHead";
import { t } from "i18next";
const BooksArabic = () => {
    return (
        <div className="books-eng-arb md:mb-20 mb-24" >
            <div className="imageBg"></div>
            <div className="content">
                <div className="flex lg:flex-row flex-col  gap-6 lg:px-12 md:px-24  px-6 md:mt-0 mt-12" dir="ltr">
                    <div className="lg:w-2/5 w-100">
                        <ProtectImage src={wordArbImage} className={"object-fit"} alt={"word english"} />
                    </div>
                    <div className="lg:w-3/5 w-100 flex flex-col gap-y-2">
                        <TitleHead title={`${t("BUTSAN ALARABIA")}`} color={"text-word-blue-light-1"} />
                        <TitleHead title={`${t("ARABIC SERIES")}`} color={"text-word-blue-light-2"} />
                        <h5 className='text-2xl text-word-blue-light-2  font-medium '>Let us learn Arabic</h5>
                        <p className="text-sm text-word-dark lg:pr-40 pr-0">
                            Bustan Alarabia - is a series consists of six levels that have been built regarding to the students abilities. This series is a life story of characters face different life situations with childhood innocence. Words lovely characters enable kids to know a new life experiences and activities.                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-24 md:px-32   px-3 mt-12" >
                    <OurBookCardArabic title={`${t("Bustan Al-Arabiya")}`} imageUrl={bookArb1Image} level={`${t("Level one")}`}
                        description={`${t("The Arabic language book for Non-native speakers - First level - contains texts and effective and interactive activities to enhance understanding among learners and achieve the educational objectives.")}`}
                        subDescription={" 1- أَتَعَرَّفُ، 2- أُحِبُّ الْحَوَاْنَاتِ 1، 3- كَلِمَاْتِي الْأُوْلَى، 4- أُحِبُّ الْحَيَوَاْنَاْتِ 2"}
                    />
                    <OurBookCardArabic title={`${t("Bustan Al-Arabiya")}`} imageUrl={bookArb2Image} level={`${t("Level two")}`}
                        description={`${t("This is an Arabic book for Non-native speakers - Second level - One book that combines texts and activities to transform learning Arabic language to Fun trip. ")}`}
                        subDescription={" ١- جِسمِي. ٢- عَالَمِي. ٣- الوَقتُ. ٤- فِي المَدْرَسةِ."}
                    />
                </div>
            </div>
            <div className="imageBg"></div>
            <div className="content">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-24 md:px-32   px-3 mt-12">
                    <OurBookCardArabic title={`${t("Bustan Al-Arabiya")}`} imageUrl={bookArb3Image} level={`${t("Level three")}`}
                        description={`${t("The Arabic language book for Non-native speakers - Third level - contains texts and effective and interactive activities to enhance understanding among learners and achieve the educational objectives. ")}`}
                        subDescription={"١- أُرِيدُ أَنْ أُصبِحَ. ٢- يَومِ. ٣- حَولَ العَالَمِ. ٤-عَالَمُ الحَيْوَانِ."}
                    />
                    <OurBookCardArabic title={`${t("Bustan Al-Arabiya")}`} imageUrl={bookArb4Image} level={`${t("Level four")}`}
                        description={`${t("This is an Arabic book for Non-native speakers – Fourth level - One book that combines texts and activities to transform learning Arabic language to Fun trip.")}`}
                        subDescription={"١- الحُقُوْقُ وَالوَاجِبَاتُ . ٢- الهِوَايَاتُ .٣- مُدُنٌ حَوْلَ العَالَمِ .٤- عَجَائِبُ الدُّنْيَا."}
                    />
                    <OurBookCardArabic title={`${t("Bustan Al-Arabiya")}`} imageUrl={bookArb5Image} level={`${t("Level five")}`}
                        description={`${t("The Arabic language book for Non-native speakers - Fifth level - contains texts and effective and interactive activities to enhance understanding among learners and achieve the educational objectives. ")}`}
                         subDescription={" ١- العَمَلُ وَالمَالُ. ٢- البَيْعُ وَالشِّرَاءُ. ٣- أُسَافِرُ ٤- الأَعْمَالُ الخَيْرِيَّة"}
                    />
                    <OurBookCardArabic title={`${t("Bustan Al-Arabiya")}`} imageUrl={bookArb6Image} level={`${t("Level six")}`}
                        description={`${t("This is an Arabic book for Non-native speakers – Sixth level - One book that combines texts and activities to transform learning Arabic language to Fun trip.")}`}
                        subDescription={" ١- تَجَارُبٌ حَولَ العَالَمِ. ٢- العَادَاتُ والتَّقَالِيدُ. ٣- الأَمَاكِنُ. ٤- مَشَاهِيرُ."}
                    />
                </div>
            </div>
        </div>
    )
}

export default BooksArabic