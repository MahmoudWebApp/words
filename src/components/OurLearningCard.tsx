
import { IOurLearningListCard } from '../models/LearningCard.model';
import './index.css'

const OurLearningCard: React.FC<IOurLearningListCard> = (props) => {
    return (
        <div className='h-80  bg-word-white shadow-md px-6 pb-12 pt-6 hover:bg-words-green-light our-learning-card cursor-pointer' >
            <div className='flex flex-col items-center justify-center gap-y-10'>
                <img src={props.iconGreen} alt={props.title} className="block icon-green w-24 h-24" />
                <img src={props.iconWhite} alt={props.title} className="hidden icon-white w-24 h-24 animate-spin " />
                <h5 className='text-2xl text-words-green-light font-medium card-title'>{props.title}</h5>
                <p className='text-sm text-word-gray-dark-3 text-center card-description'>{props.description}</p>
            </div>
        </div>
    )
}

export default OurLearningCard