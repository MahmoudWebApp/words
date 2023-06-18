import React from 'react'
interface IProps {
    src: string;
    className: string;
    alt: string;

}
const ProtectImage: React.FC<IProps> = (props) => {
    return (
        <img src={props.src} alt={props.alt} className={props.className} contextMenu="return false;" />
    )
}

export default ProtectImage