import { INewsCard } from "../models/NewsCard.model"

const NewsCard: React.FC<INewsCard> = (props) => {
    return (
        <div className='h-[22rem] shadow-md  cursor-pointer' >
            <img src={props.imageSrc} alt={props.id} className="block  w-full h-2/3" />
            <div className="w-full h-1/3 bg-word-white  p-6">
                <p className='text-xs text-word-gray-dark-3 text-center '>{props.description}</p>
            </div>
        </div>
        
    )
}

export default NewsCard