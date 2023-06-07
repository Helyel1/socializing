import { InputProps } from "../../types";
import "./styles.scss";

export const Input = (props: InputProps) => {
    return(
        <input type={props.type} placeholder={props.placeholder} />
    )
}