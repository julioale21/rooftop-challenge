import React from "react";
import { Header } from "../../components";
import "./styles.css";

const AppLayout: React.FC = ({ children }) => (
  <div id="app-layout">
    <Header />
    {children}
  </div>
);

export default AppLayout;
