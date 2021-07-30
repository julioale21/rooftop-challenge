import React from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer";
import "./styles.css";

const AppLayout: React.FC = ({ children }) => (
  <div id="app-layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default AppLayout;
