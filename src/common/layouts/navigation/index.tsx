import * as React from 'react';

import './style.css';

export default function NavigationLayout(props) {
    return (<nav className={props.className}>
        <button>Battle</button>
    </nav>);
}