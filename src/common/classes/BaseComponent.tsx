import * as React from 'react';
import { LoaderLayout } from "sources";

export default class BaseComponent<P, S> extends React.Component<P, S> {
    props: any;
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchData();
    }
    fetchData() {}
    renderContent() { return null; }

    render() {
        const { isPending } = this.props;
        if (isPending) {
            return <LoaderLayout />;
        }

        return this.renderContent();
    }
}