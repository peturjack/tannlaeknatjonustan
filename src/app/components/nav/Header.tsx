import { createClient } from "@/prismicio";
import React from "react";
import Nav from "./Nav";

const Header = async () => {
  const client = createClient();
  const nav = await client.getSingle("navbar");

  return (
    <header>
      <Nav nav={nav} />
    </header>
  );
};

export default Header;
