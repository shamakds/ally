import * as React from "react";
import classNames from "classnames";

export default function Form(params) {
    if (!params) {
        return null;
    }

    const { valueKey, value, options = [], onChange } = params;

    return (
        <select onChange={(e) => {
            onChange(valueKey, e.target.value);
        }} value={value}>{
            options.map((o, i) => (<option key={i} value={o.value}>{o.label}</option>))
        }</select>
    );
}