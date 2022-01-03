import React, { Fragment } from "react";
import Comments from "../components/comments/Comments";
import { useParams, Route } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  console.log(params.quoteId);

  return (
    <Fragment>
      <h1>Quote details page</h1>
      <p> {params.quoteId} </p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
