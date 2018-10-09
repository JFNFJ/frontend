import React from "react";

import PacmanLoader from 'react-spinners/PacmanLoader';

function NotYetCompleted({ ...props }) {
    return (<div>
        <h2>No tenemos suficiente información</h2>
        <PacmanLoader />
        </div>);
}

export default NotYetCompleted;