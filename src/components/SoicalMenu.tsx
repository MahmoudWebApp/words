
import { useNavigate } from 'react-router-dom'
import FacebookIcon from '../assets/img/sociaux/icon_facebook.svg';
import InstagramIcon from '../assets/img/sociaux/icon_instagram.svg';
import YoutubeIcon from '../assets/img/sociaux/icon_youtube.svg';
import TwitterIcon from '../assets/img/sociaux/icon_twitter.svg';
import ProtectImage from './ProtectImage';
interface ISocialList {
    id: string;
    icon: string;
    link: string;
}
const SocialMenu = () => {
    const socialList: ISocialList[] = [
        { id: "facebook_icon", icon: FacebookIcon, link: "/" },
        { id: "instagramIcon _icon", icon: InstagramIcon, link: "/" },
        { id: "youtubeIcon_icon", icon: YoutubeIcon, link: "/" },
        { id: "twitterIcon_icon", icon: TwitterIcon, link: "/" },
    ]
    const navigate = useNavigate();
    return (
        <ul className='flex flex-row gap-x-3'>
            {socialList?.map(x =>
                <li onClick={() => navigate(x.link)} key={x.id}>
                    <ProtectImage src={x.icon} className={''} alt={x.id} />
                </li>)}
        </ul>
    )
}

export default SocialMenu