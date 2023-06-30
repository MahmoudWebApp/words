
import { t } from "i18next";
import { INewsCard } from "../../../../models/NewsCard.model";
import NewsCard from "../../../../components/NewsCard";
import newsImage1 from "../../../../assets/img/home/news/news-1.png"
import newsImage2 from "../../../../assets/img/home/news/news-2.png"
import newsImage3 from "../../../../assets/img/home/news/news-3.png"
import newsImage4 from "../../../../assets/img/home/news/news-4.png"

const NewsListCards = () => {
  const data: INewsCard[] = [

    {
      id: "new1_key",
      imageSrc: `${newsImage1}`,
      description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
    },
    {
      id: "new2_key",
      imageSrc: `${newsImage2}`,
      description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
    },
    {
      id: "new3_key",
      imageSrc: `${newsImage3}`,
      description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
    },
    {
      id: "new4_key",
      imageSrc: `${newsImage4}`,
      description: `${t("After a day at Giraffe, I recognize that my little Angel - Joliet is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before.")}`,
    },



  ]
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 w-full justify-items-center'>
      {data?.map(item => <NewsCard id={item.id} imageSrc={item.imageSrc} description={item.description} key={item.id} />)}
    </div>
  )
}

export default NewsListCards 