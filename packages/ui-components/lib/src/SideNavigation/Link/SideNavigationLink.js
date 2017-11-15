"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var glamorous_1 = require("glamorous");
var contiamo_ui_utils_1 = require("contiamo-ui-utils");
var style = function (_a) {
    var theme = _a.theme, color = _a.color;
    var backgroundColor = color ? contiamo_ui_utils_1.hexOrColor(color)(theme.colors.palette[color]) : theme.colors.palette.grey90;
    return {
        backgroundColor: backgroundColor,
        position: "relative",
        zIndex: theme.baseZIndex + 1,
        margin: "0 " + theme.spacing * -0.5 + "px",
        padding: theme.spacing + "px",
        minWidth: 200,
        borderRadius: 2,
        transition: ".1s background-color ease",
        color: contiamo_ui_utils_1.readableTextColor(backgroundColor)(["black", "white"]),
        "& + &": {
            borderTop: "1px solid " + theme.colors.palette.grey90
        },
        ":hover": {
            backgroundColor: contiamo_ui_utils_1.darken(backgroundColor)(10)
        },
        ":focus": {
            outline: 0,
            backgroundColor: contiamo_ui_utils_1.darken(backgroundColor)(15)
        },
        ":first-child": {
            marginTop: theme.spacing * -0.5 + "px"
        },
        ":last-child": {
            marginBottom: theme.spacing * -0.5 + "px"
        }
    };
};
exports.style = style;
var SideNavigationLink = function (_a) {
    var key = _a.key, style = _a.style, className = _a.className, children = _a.children, onClick = _a.onClick;
    return (React.createElement("div", { key: key, style: style, className: className, onClick: onClick, role: "button", tabIndex: -1 }, children));
};
exports.SideNavigationLink = SideNavigationLink;
exports.default = glamorous_1.default(SideNavigationLink)(style);
//# sourceMappingURL=SideNavigationLink.js.map