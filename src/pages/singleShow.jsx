import React from "react";
import ShowDetail from "../components/showDetail/showDetail";

const SingleShow = ({ shows }) => {
  return (
    <div>
      <ShowDetail shows={shows} />
    </div>
  );
};

export default SingleShow;
