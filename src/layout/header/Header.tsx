import { t } from "i18next";
import logo from "../../assets/img/words-logo.png";
import LangSwitcher from "../../components/LangSwitcher";
import MainMenu from "../../components/MainMenu";
import { NavLink } from "react-router-dom";
import DrawerMenu from "../../components/DrawerMenu";
import {  Zoom } from "react-awesome-reveal";
import { fontDir } from "../../utils/helpFunctions";
const MainHeader = () => {
  
  return (
    <nav className="mx-auto  xl:pe-4 pe-3  py-8 max-h-32  fixed left-0 right-0  top-0 z-50 shadow-md bg-word-white ">
      <div className="flex flex-1 items-center sm:items-stretch justify-around   ">
        <div className="flex items-center justify-center  ">
          <NavLink to="/">
            <Zoom triggerOnce>
              <img src={logo} alt="logo" className="w-32 " />
            </Zoom>
          </NavLink>
        </div>
        <div className="hidden  lg:flex xl:gap-x-8 lg:gap-x-3 items-center xxl:-ms-56 xl:-ms-12">
          <MainMenu beforeEffect={true} hasIcon={false} />
        </div>
        <div className="hidden md:flex flex-row justify-between items-center gap-x-6 ms-0 lg:ms-24 md:ms-72">
          <LangSwitcher />
          <button className="bg-words-green-light py-2 px-10 rounded btn-animated">
            <NavLink to="/login">
              <span className="text-word-white text-base">{`${t("Login")}`}</span>
            </NavLink>
          </button>
        </div>
        <div className="lg:hidden block">
          <DrawerMenu />
        </div>
      </div>
    </nav>
  )
}

export default MainHeader 