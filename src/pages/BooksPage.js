import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

const BooksPage = () => {
  return <main>
    <PageHero title='books'></PageHero>
    <Wrapper className="page">
      <div className="section-center books">
        <Filters />
        <div>
          <Sort />
          <ProductList/>
        </div>
      </div>
    </Wrapper>
  </main>
};

const Wrapper = styled.div`
  .books {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .books {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default BooksPage;
