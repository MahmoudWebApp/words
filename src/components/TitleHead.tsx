import React from 'react'
import { fontDir } from '../utils/helpFunctions';

interface IProps {
    title: string;
    color:string;
    moreClasses?: string;
}
const TitleHead: React.FC<IProps> = (props) => {
    const { titleFont }=fontDir();
    return (
        <h2 className={`lg:text-7xl md:text-5xl text-4x font-extrabold uppercase ${props.color} ${titleFont} ${props.moreClasses}`}>{props.title}</h2>
    )
}

export default TitleHead