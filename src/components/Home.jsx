import React from "react";
import { Box, CssBaseline } from "@mui/material";
import {
  Hero,
  HowItWorks,
  TrendingServices,
  BrowseTalent,
  Testimonials,
  TalentStats,
} from "@/components/home/";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box component="main">
        <section id="hero"><Hero /></section>
        <section id="howitworks"><HowItWorks /></section>
        <section id="trending"><TrendingServices /></section>
        <section id="browse"><BrowseTalent /></section>
        <section id="stats"><TalentStats /></section>
        <section id="testimonials"><Testimonials /></section>
      </Box>
    </>
  );
};

export default Home;
