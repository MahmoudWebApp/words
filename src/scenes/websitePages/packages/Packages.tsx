import { t } from "i18next";
import './index.css'
import PackagesList from "./PackagesList";

const Packages = () => {
  return (
    <div className="package-page">
      <div className="flex lg:flex-row flex-col gap-x-6 gap-y-2 ">
        <h1 className='lg:text-6xl/[80px] md:text-5xl text-4xl text-word-green-dark lg:font-extrabold font-Luckiest'>{`${t("Get Started Now,")}`}</h1>
        <h1 className='lg:text-6xl/[80px] md:text-5xl text-4xl text-words-green-light lg:font-extrabold font-Luckiest'>{`${t("Pick a Plan")}`}</h1>
      </div>
      <div className="py-14">
        <PackagesList />
      </div>
    </div>
  )
}

export default Packages