import { t } from "i18next";
import { HiInformationCircle } from "@react-icons/all-files/hi/HiInformationCircle";
import { MdAssessment } from "@react-icons/all-files/md/MdAssessment";
import { ImBooks } from "@react-icons/all-files/im/ImBooks";
import { HiLibrary } from "@react-icons/all-files/hi/HiLibrary";
import { AiFillContacts } from "@react-icons/all-files/ai/AiFillContacts";
import { SiPaypal } from "@react-icons/all-files/si/SiPaypal";



import { NavLink, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { JackInTheBox } from "react-awesome-reveal";
import { fontDir } from "../utils/helpFunctions";
interface IMainMenu {
    key: string;
    name: string;
    url: string;
    icon: ReactNode;
}
interface IProps {
    beforeEffect: boolean;
    hasIcon: boolean;
}
const MainMenu: React.FC<IProps> = (props) => {
    const location = useLocation();
    const { pathname } = location;
    const mainMenu: IMainMenu[] = [
        {
            key: "key_about",
            name: `${t("About us")}`,
            url: "/about-us",
            icon: <HiInformationCircle />
        },
        {
            key: "key_assessments",
            name: `${t("Assessments")}`,
            url: "/assessments",
            icon: <MdAssessment />
        },
        {
            key: "key_book",
            name: `${t("Books")}`,
            url: "/books",
            icon: <ImBooks />
        },
        {
            key: "key_library",
            name: `${t("Library")}`,
            url: "/library",
            icon: <HiLibrary />
        },
        {
            key: "key_packages",
            name: `${t("Packages")}`,
            url: "/packages",
            icon: <SiPaypal />
        },
        {
            key: "key_contact",
            name: `${t("Contact")}`,
            url: "/contact",
            icon: <AiFillContacts />
        },
    ];
    const { titleFont }=fontDir();
    return <>
        {mainMenu?.map((item, index) => (
            <NavLink
                to={item?.url}
                key={item?.key}
                className={`xl:text-base/[19px] md:text-sm text-xl ${pathname === item?.url
                    ? "before:scale-100 text-words-green-light"
                    : "before:scale-0 text-word-green-dark"
                    }  hover:before:scale-100 hover:text-words-green-light transition  hover:scale-110 hover:duration-500 ease-in-out
                     relative 
                     before:w-full before:block before:absolute before:h-1 before:left-0 before:transition-transform before:bg-words-green-light
                     ${props.beforeEffect ? "before:top-14 "
                        : "before:top-8"}
                       ` }
            >
                <JackInTheBox delay={400} duration={500 * (index + 1)} triggerOnce>
                    <div className="flex items-center ">
                        {props.hasIcon && <span className="mx-3 mt-1 ">{item.icon}</span>}
                        <span className={`font-normal ${titleFont }`}>{item?.name}</span>
                    </div>
                </JackInTheBox>
            </NavLink>
        ))}
    </>


};

export default MainMenu;
