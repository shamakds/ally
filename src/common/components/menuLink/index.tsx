import * as React from "react";
import classNames from "classnames";
import { NavLink } from 'react-router-dom';

import "./style.css";

export default function MenuLink(params) {
    if (!params) {
        return null;
    }

    const { disabled, path,  label, icon, title } = params;
    const className = classNames("menu-link", { disabled: disabled });

    return (
        <section className={params.className}>
            <NavLink exact activeClassName="active"
                     className={className}
                     to={disabled ? "#" : path}
            >
                { icon ? <em className={icon} /> : null }
                <label>{label}</label>
            </NavLink>
        </section>
    );
}