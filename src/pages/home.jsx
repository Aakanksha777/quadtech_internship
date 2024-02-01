import React from "react";
import Card from "../components/card/card";

const Home = ({ shows }) => {
  return (
    <div>
      <Card shows={shows} />
    </div>
  );
};

export default Home;
