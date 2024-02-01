import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./showDetail.css";
import FormField from "../form/form";

const ShowDetail = ({ shows }) => {
  const [form, setForm] = useState(false);

  const params = useParams();
  console.log(shows);
  console.log(params);

  const filteredObj = shows.find((ele) => ele.show.id == params.id);
  console.log(filteredObj);

  const handleBtn = () => {
    setForm(true);
  };

  const handleClose = () => {
    setForm(false);
  };

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: filteredObj?.show?.summary,
        }}
      />
      <div className="btns">
        <Link to="/">back</Link>
        <button onClick={handleBtn}>Book Ticket</button>
      </div>
      {form ? (
        <FormField handleClose={handleClose} filteredObj={filteredObj} />
      ) : null}
    </div>
  );
};

export default ShowDetail;
