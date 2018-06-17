import * as React from "react";

interface ViewProps {
    isPending: boolean;
    location?: any;
    match?: any;
    renderContent: () => {}
}

export default class View extends React.Component<ViewProps> {
    constructor(props) {
        super(props);

        this.renderContent = this.renderContent.bind(this);
    }

    renderContent() {
        return null;
    }

    render() {
        return this.renderContent();
    }
}