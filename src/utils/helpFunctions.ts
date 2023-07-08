interface IFDProps {
    currentFont: string;
    titleFont: string;
    dir: string;
}
export const fontDir = (): IFDProps => {
    const currentFont = localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto";
    const titleFont = localStorage.getItem("lang") === "ar" ? "font-ElMessiri" : "font-Luckiest";
    const dir = localStorage.getItem("lang") === "ar" ? "rtl" : "ltr";
    return {
        currentFont,
        titleFont,
        dir
    }
}
export const compareObjects = (obj1: any, obj2: any):number| boolean => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    let count = 0;
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      // eslint-disable-next-line no-prototype-builtins
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }
  
      if (obj1[key] === obj2[key]) {
        count += 5;
      }
    }
  
  
    return count;
  };