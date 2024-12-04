import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";

function Leaderboards() {
  return (
    <MainLayout>
      {/* TITLE */}
      <Helmet>
        <title>Leaderboards</title>
      </Helmet>

      {/* MAIN CONTENT */}
      <section className="flex justify-between">
        <h1 className="text-2xl font-semibold">Leaderboards</h1>
      </section>
    </MainLayout>
  );
}

export default Leaderboards;
