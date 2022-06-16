import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
  return (
    <section className="MainDash">
      <h1>Dashboard</h1>
      <Cards></Cards>
      <Table></Table>
    </section>
  );
};

export default MainDash;
