import * as React from "react";
import classNames from "classnames";

import MenuLink from "../menuLink";

import "./style.css";

export default (props) => {
    if (!props || !props.links) {
        return null;
    }

    return (<nav className={classNames("navigation", props.className)}>{
        props.links.map((l, i) => (
            <MenuLink key={i} {...l} />
        ))
    }</nav>);
}