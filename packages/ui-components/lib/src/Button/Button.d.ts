/// <reference types="react" />
import * as React from "react";
import { Theme } from "contiamo-ui-theme";
export interface IStyleProps {
    theme?: Theme;
    color?: string;
    active?: boolean;
    disabled?: boolean;
    condensed?: boolean;
}
export interface IProps {
    css?: any;
    className?: string;
    key?: string | number;
    onClick?: any;
    children?: React.ReactNode;
    color?: string;
    active?: boolean;
    disabled?: boolean;
    condensed?: boolean;
}
declare const Button: React.SFC<IProps>;
export default Button;
