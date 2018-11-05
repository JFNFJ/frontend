import React from "react";

import CircleLoader from "react-spinners/CircleLoader";

function AutoRefresh({ ...props }) {
  const { refresh } = props;

  return (
    <a onClick={refresh}>
        <CircleLoader sizeUnit={"px"} size={50} color={'#123abc'} />
    </a>
  );
}

export default AutoRefresh;
