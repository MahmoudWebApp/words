import ProtectImage from "../../../components/ProtectImage"
import boolIcon from "../../../assets/img/new icons/book-white.svg";
import songIcon from "../../../assets/img/new icons/songs-white.svg";
import videoIcon from "../../../assets/img/new icons/video-white.svg"
import VideosList from "./VideosList";



const LibraryList = () => {

    return (
        <div className="library-list px-40">
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
                <div className="relative rounded-lg flex flex-col gap-y-3 bg-word-orange-dark justify-center items-center pt-6 pb-3">
                    <ProtectImage src={boolIcon} className={"h-20"} alt={`list-book-icon`} />
                    <h3 className="text-2xl text-word-white">Books</h3>
                    <div className="absolute flex flex-row gap-x-2 -bottom-11  justify-center">
                        <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2" >
                            Arabic Book
                        </button>
                        <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2">
                            English Book
                        </button>
                    </div>
                </div>
                <div className="relative rounded-lg flex flex-col gap-y-3 bg-word-orange-light justify-center items-center pt-6 pb-3">
                    <ProtectImage src={songIcon} className={"h-20"} alt={`list-book-icon`} />
                    <h3 className="text-2xl text-word-white">Songs</h3>
                    <div className="absolute flex flex-row gap-x-2 -bottom-11  justify-center">
                        <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2" >
                            Arabic Songs
                        </button>
                        <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2">
                            English Songs
                        </button>
                    </div>
                </div>
                <div className="relative rounded-lg flex flex-col gap-y-3 bg-word-orange-dark justify-center items-center pt-6 pb-3">
                    <ProtectImage src={videoIcon} className={"h-20"} alt={`list-book-icon`} />
                    <h3 className="text-2xl text-word-white">Video</h3>
                    <div className="absolute flex flex-row gap-x-2 -bottom-11  justify-center">
                        <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2" >
                            Arabic videos
                        </button>
                        <button className="bg-word-gray-light-1 py-3 px-8 text-sm text-word-gray-dark-2">
                            English videos
                        </button>
                    </div>
                </div>

            </div>
            <div className="mt-16">
                <VideosList />
            </div>

        </div>
    )
}

export default LibraryList