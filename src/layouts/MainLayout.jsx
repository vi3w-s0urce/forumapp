import React from "react";
import MenuSidebar from "./MenuSidebar";
import InfoSidebar from "./InfoSidebar";
import PropTypes from "prop-types";

function MainLayout({ children }) {
  return (
    <main className="flex">
      <MenuSidebar />
      <section className="bg-slate-100 ml-[252px] mr-[400px] min-h-[100dvh] grow px-8 py-6 flex flex-col">{children}</section>
      <InfoSidebar />
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
