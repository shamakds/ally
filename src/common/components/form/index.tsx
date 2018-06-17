import * as React from "react";
import classNames from "classnames";

import "./style.css";

export default function Form(params) {
    if (!params) {
        return null;
    }
    const onSubmit = params.onSubmit || (() => {});
    const className = classNames("form");

    return (
        <form onSubmit={onSubmit} className={className}>{params.children}</form>
    );
}