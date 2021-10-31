import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/new-landing/Hero";
import Brands from "../sections/new-landing/Brands";
import Categories from "../sections/new-landing/Categories";
import Content1 from "../sections/new-landing/Content1";
import Content2 from "../sections/new-landing/Content2";
import Content3 from "../sections/new-landing/Content3";
import FeaturedJobs from "../sections/new-landing/FeaturedBounties";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Brands />
        <Categories />
        <Content1 />
        <Content2 />
        <Content3 />
        <FeaturedJobs />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
