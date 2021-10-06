import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";

export function useStyles() {
    return useContext(StylesContext)
}