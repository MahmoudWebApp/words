import { t } from "i18next";
import { NavLink, useLocation } from "react-router-dom";
interface IFooterMenu {
    key: string;
    name: string;
    url: string;
}

const FooterMenu= () => {
    const location = useLocation();
    const { pathname } = location;
    const mainMenu: IFooterMenu[] = [
        {
            key: "key_about",
            name: `${t("About us")}`,
            url: "/about-us",
          
        },
        {
            key: "key_assessments",
            name: `${t("Assessments")}`,
            url: "/assessments",
           
        },
      
        {
            key: "key_courses",
            name: `${t("Courses")}`,
            url: "/books",
         
        },
        {
            key: "key_library",
            name: `${t("Library")}`,
            url: "/library",
        },
        {
            key: "key_contact",
            name: `${t("Contact")}`,
            url: "/contact",
        },
    ];
    return <>
        {mainMenu?.map((item) => (
            <NavLink
                to={item?.url}
                key={item?.key}
                className={`xl:text-base/[19px] text-sm ${pathname === item?.url
                    ? " text-word-green-dark"
                    : "text-word-dark "
                    }  hover:text-word-green-dark
                 
                       ` }
            >
                <div className="flex items-center ">
                    <span>{item?.name}</span>
                </div>

            </NavLink>
        ))}
    </>


};

export default FooterMenu;