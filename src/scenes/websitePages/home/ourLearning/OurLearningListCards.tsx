import { IOurLearningListCard } from "../../../../models/LearningCard.model";
import collaborationGreenIcon from "../../../../assets/img/home/collaboration.svg";
import collaborationWhiteIcon from "../../../../assets/img/home/collaboration-white.svg";
import communicationGreenIcon from "../../../../assets/img/home/communication.svg";
import communicationWhiteIcon from "../../../../assets/img/home/communication-white.svg";
import creativeGreenIcon from "../../../../assets/img/home/creative.svg";
import creativeWhiteIcon from "../../../../assets/img/home/creative-white.svg";
import independenceGreenIcon from "../../../../assets/img/home/independence.svg";
import independenceWhiteIcon from "../../../../assets/img/home/independence-white.svg";
import OurLearningCard from "../../../../components/OurLearningCard";
import { t } from "i18next";


const OurLearningListCards = () => {
  const data: IOurLearningListCard[] = [
    {
      id: "Collaboration_key",
      iconGreen: `${collaborationGreenIcon}`,
      iconWhite: `${collaborationWhiteIcon}`,
      title: `${t("Collaboration")}`,
      description: `${t("Students contribute and add value to shared learning experiences.")}`,
    },
    {
      id: "Communication_key",
      iconGreen: `${communicationGreenIcon}`,
      iconWhite: `${communicationWhiteIcon}`,
      title: `${t("Communication")}`,
      description:`${t("Students effectively convey their ideas and understandings in multiple formats.")}`,
    },
    {
      id: "Creative _key",
      iconGreen: `${creativeGreenIcon}`,
      iconWhite: `${creativeWhiteIcon}`,
      title: `${t("Creative Thinking")}`,
      description:`${t("Students gain facility with the creative process and confidence in self-expression.")}`,
    },
    {
      id: "Independence_key",
      iconGreen: `${independenceGreenIcon}`,
      iconWhite: `${independenceWhiteIcon }`,
      title: `${t("Independence")}`,
      description:`${t("Students take responsibility for and are increasingly self-directed in their own learning.")}`,
    },


  ]
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-6 w-full justify-items-center'>
      {data?.map(item => <OurLearningCard iconGreen={item.iconGreen} iconWhite={item.iconWhite} title={item.title} description={item.description} key={item.id} />)}
    </div>
  )
}

export default OurLearningListCards