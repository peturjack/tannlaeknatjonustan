import React from "react";
type Props = {
  children: React.ReactNode;
};
const HeroSection = ({ children }: Props) => {
  return <section className="h-screen">{children}</section>;
};

export default HeroSection;
