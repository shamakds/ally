import * as React from "react";
import classNames from "classnames";

export default function Form(params) {
    if (!params) {
        return null;
    }

    return (
        <section className="form-group">
            { params.title ? <label>{params.title}</label> : null }
            { params.children }
        </section>
    );
}