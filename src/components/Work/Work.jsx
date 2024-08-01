import React from 'react'
import { Wrapper } from './Style'
import Works from './Works'

const Work = () => {
  return (
    <Wrapper>
        <section className="work section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most Recent Works</span>

            <Works/>
        </section>
    </Wrapper>
  )
}

export default Work
