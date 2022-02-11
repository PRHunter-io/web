import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import Hero from '@/components/landing/Hero';
import Brands from '@/components/landing/Brands';
import Categories from '@/components/landing/Categories';
import Content1 from '@/components/landing/Content1';
import Content2 from '@/components/landing/Content2';
import Content3 from '@/components/landing/Content3';
import FeaturedBounties from '@/components/landing/FeaturedBounties';

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: 'dynamic-sticky-bg',
        }}
      >
        <Hero />
        <Brands />
        <Categories />
        <Content1 />
        <Content2 />
        <Content3 />
        <FeaturedBounties />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
