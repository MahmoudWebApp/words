interface IFDProps{
    currentFont:string;
    titleFont:string;
    dir  :string;
}
export const fontDir = ():IFDProps=> {
    const currentFont = localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto";
    const titleFont =localStorage.getItem("lang") === "ar" ? "font-ElMessiri" : "font-Luckiest";
    const dir = localStorage.getItem("lang") === "ar" ? "rtl" : "ltr";
    return {
        currentFont,
        titleFont,
        dir
    }
}