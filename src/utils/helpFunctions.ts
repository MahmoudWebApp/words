interface IFDProps{
    currentFont:string;
    dir  :string;
}
export const fontDir = ():IFDProps=> {
    const currentFont = localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto";
    const dir = localStorage.getItem("lang") === "ar" ? "rtl" : "ltr";
    return {
        currentFont,
        dir
    }
}