import { Button, Drawer } from 'antd';
import { useState } from 'react';
import MainMenu from './MainMenu';
import { HiMenuAlt2 } from "@react-icons/all-files/hi/HiMenuAlt2";
import { NavLink } from 'react-router-dom';
import logo from "../assets/img/words-logo.png";
import LangSwitcher from './LangSwitcher';
import { t } from 'i18next';
import { fontDir } from '../utils/helpFunctions';

const DrawerMenu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const { currentFont, dir } = fontDir();


    return (
        <>
            <Button type="link" onClick={showDrawer} icon={<HiMenuAlt2 />}
                className='bg-words-green-light rounded-full menu_btn flex justify-center items-center'>
            </Button>
            <Drawer title={
                <NavLink to="/">
                    <img src={logo} alt="logo" className="w-32  m-auto" />
                </NavLink>
            } placement="right" onClose={onClose} open={open}
                style={{ direction: dir === "rtl" ? "rtl" : "ltr" }} className={currentFont}>
                <div className='flex flex-col justify-center items-start gap-y-6 my-6'>
                    <MainMenu beforeEffect={false} hasIcon={true} />
                </div>
                <div className="flex flex-row  justify-between items-center gap-y-6 my-16  ms-4">
                    <LangSwitcher />
                    <button className="bg-words-green-light py-2 px-10 rounded">
                        <NavLink to="/login">
                            <span className="text-word-white text-base">{`${t("Login")}`}</span>
                        </NavLink>
                    </button>
                </div>
            </Drawer>
        </>
    );
};

export default DrawerMenu;