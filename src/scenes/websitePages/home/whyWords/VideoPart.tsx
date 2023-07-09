import "video-react/dist/video-react.css";
import videoImage from '../../../../assets/img/home/video.png';
import videoSrc from "../../../../assets/words.mp4";
const VideoPart = () => {
    return (
        <video controls controlsList=" timeline volume" poster={videoImage} src={videoSrc} style={{ maxHeight: "330px" }} />

    );

}

export default VideoPart