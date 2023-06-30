import React from 'react'
import { IPackageCard } from '../models/PackageCard.model'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next';

const PackageCard: React.FC<IPackageCard> = (props) => {
    const navigate = useNavigate();
    return (
        <div className="rounded-md bg-word-gray-light-1 shadow-md h-96 px-10 pt-16 pb-8 relative ">
            <div className="w-28   py-2 before:w-full  bg-word-green-dark absolute right-6 -top-2
        before:border-t-word-green-dark before:border-x-word-gray-light-1
         before:border-t-[20px] before:border-x-[56px]  before:absolute before:top-12 before:left-0
         after:border-t-word-white after:border-r-words-green-light
         after:border-t-[10px] after:border-r-[20px] after:absolute after:top-0 after:-left-5
        ">

                <h3 className="text-2xl  text-word-white font-medium font-Luckiest text-center">AED {props.price}</h3>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div >
                    <h3 className="text-2xl  text-words-green-light font-semibold font-Luckiest">{props.name}</h3>
                    <h5 className="text-sm font-normal text-word-green-1 -mt-1">{props.description}</h5>
                    <ul className="my-3 ">
                        {props.list?.map(l => <li className="text-xs font-light text-dark mt-2 ml-6
                 relative before:absolute before:w-3 before:h-3 before:rounded-full before:bg-words-green-light
                  before:top-[2px] before:-left-6" key={l.id}>{l.item}</li>)
                        }
                    </ul>
                </div>
                <div className="mt-auto">
                    <h6 className="text-xs font-light text-word-green-dark">AED {props.price}/subscriber</h6>
                    <h6 className="text-xs font-light text-dark">(per subscriber per year)</h6>
                    <button className='w-full px-12 py-2 bg-word-green-dark text-word-white text-sm mt-4 rounded-md' onClick={() => navigate('/')}>
                        {`${t("Start Now")}`}
                    </button>
                </div>
            </div>


        </div>
    )
}

export default PackageCard