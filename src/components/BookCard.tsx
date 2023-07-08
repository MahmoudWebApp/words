import {  Roll } from "react-awesome-reveal"
import { IBookCard } from "../models/bookCard.model"

const BookCard: React.FC<IBookCard> = (props) => {
    return (
        <Roll cascade delay={props.delay} triggerOnce={true} >
            <div className='md:h-64 h-72 relative bg-cover overflow-hidden shadow-md cursor-pointer w-[200px]'
                style={{ backgroundImage: `url(${props.imgSrc})`, backgroundSize: "100%" }}>
                <div className='absolute left-0 bottom-0 w-full  h-2/3 z-20 translate-y-1/2 hover:translate-y-0 
     flex flex-col items-center justify-center '
                    style={{
                        transition: "transform .5s"
                    }}>
                    <h2 className='text-5xl text-word-white w-full h-1/3 text-center font-bold pt-2 relative' style={{
                        backgroundColor: `${props.background}`,
                        borderTopLeftRadius: "70% 120%", borderTopRightRadius: "70% 120%", transition: "transform .5s"
                    }}>
                        {props.rate}
                        <span className="text-xl text-word-white  absolute top-2">{props.subRate}</span>
                    </h2>
                    <div className='h-2/3 w-full text-center px-2' style={{
                        backgroundColor: `${props.background}`,
                    }}>
                        <h6 className='text-xl text-word-white -mt-2' >{props.level}</h6>
                        <p className='text-xs text-word-white pt-6'>
                            {props.description}</p>
                    </div>
                </div>
            </div>
        </Roll>
    )
}

export default BookCard