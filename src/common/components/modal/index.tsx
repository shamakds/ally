import * as React from "react";
import classNames from "classnames";

import "./style.css";

export default function Modal(params) {
    if (!params) {
        return null;
    }

    const { onClose, onShow} = params;
    const className = classNames("modal-window", params.className);

    return (
        <section className={className}>
            <section className="modal-header">
                <h2 className="title">
                    {params.title}
                    {/*<em className="fas fa-times" />*/}
                </h2>
            </section>
            <section className="modal-body">{params.children}</section>
        </section>
    );
}