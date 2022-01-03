import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  console.log(params.quoteId);

  return (
    <Fragment>
      <h1>Quote details page</h1>
      <p> {params.quoteId} </p>
    </Fragment>
  );
};

export default QuoteDetail;
