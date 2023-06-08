import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/img2.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt='books'></img>
      <article>
        <div className='title'>
          <h2>My story</h2>
          <div className='underline'></div>
        </div>
        <p>
          My name is Bharani Aswath R. I am currently pursuing my final year
          bachelors of technology in Artificial Intelligence and Data Science
          at Chennai Institute of Technology. I would like to eagerly introduce
          myself as full stack developer and Machine learning engineer.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
