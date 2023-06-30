
import { ITestimonialsListCard } from "../models/testimonialCard.model"


const TestimonialCard: React.FC<ITestimonialsListCard> = (props) => {
  return (
    <div className='h-[16rem] shadow-md  cursor-pointer ' >
      <div className=" flex flex-row justify-around  w-full h-1/2 pt-6 ">
        <img src={props.avatar} alt={props.id} className="w-14 h-14 object-cover rounded-full " />
        <div>
          <h5 className='text-2xl text-words-green-light font-medium '>{props.name}</h5>
          <h6 className='text-lg text-word-gray-dark-3  italic'>{props.subName}</h6>
        </div>
      </div>
      <div className="w-full h-1/3 bg-word-white  p-6">
        <p className='text-xs text-word-gray-dark-3 text-center '>{props.description}</p>
      </div>
    </div>
  )
}

export default TestimonialCard