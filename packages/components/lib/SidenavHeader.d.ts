/// <reference types="react" />
import * as React from "react";
import { IconName } from "./Icon";
export interface IProps {
    id?: string | number;
    css?: {};
    className?: string;
    children?: React.ReactNode;
    label: string;
    icon: IconName | React.ReactNode;
    active?: boolean;
    expanded?: boolean;
    onClick?: () => void;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
