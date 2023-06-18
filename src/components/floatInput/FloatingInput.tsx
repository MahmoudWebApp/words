import React, { useState } from "react";
import { Input, InputNumber } from "antd";
import "./index.css";
import { fontDir } from "../../utils/helpFunctions";
interface IProps {
    label: string;
    value?: undefined | any;
    placeholder: string;
    type: string;
    onChange?: () => void;
}
const FloatInput: React.FC<IProps> = (props) => {
    const { currentFont } = fontDir();
    const [focus, setFocus] = useState(false);
    if (!props.placeholder) props.placeholder = props.label;
    const isOccupied = focus || (props.value && props.value.length !== 0);
    const labelClass = isOccupied ? "label as-label" : "label as-placeholder";
    const dirLabelClass = localStorage.getItem("lang") === "en" ? "left-3" : "right-3";
    return (
        <div
            className={`float-label ${currentFont}`}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {props.type === "number" ? (<>
                <InputNumber onChange={props.onChange} defaultValue={props.value} className={`${currentFont} w-full`} />
                <label className={`${labelClass} ${dirLabelClass} ${currentFont}`}>
                    {isOccupied ? props.label : props.placeholder}
                </label>
            </>)
                : (props.type === "password" ? <>
                    <Input.Password onChange={props.onChange} type={props.type} defaultValue={props.value} className={`${currentFont}`} />
                    <label className={`${labelClass} ${dirLabelClass} ${currentFont}`}>
                        {isOccupied ? props.label : props.placeholder}
                    </label></>
                    : (<><Input onChange={props.onChange} type={props.type} defaultValue={props.value} className={`${currentFont}`} />
                        <label className={`${labelClass} ${dirLabelClass} ${currentFont}`}>
                            {isOccupied ? props.label : props.placeholder}
                  </label></>)
                )}

        </div>
    );
};

export default FloatInput;