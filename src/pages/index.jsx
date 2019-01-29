import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import toga from '../images/toga.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Matthew Kim.
        </BigTitle>
          <Subtitle>I'm a 7th grader at Egan Junior High, and this is my portfolio of projects. </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="About Me"
            link="/aboutme"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is my writing that states things about me.
          </ProjectCard>
          <ProjectCard
            title="Semester 1 Reflection"
            link="/semestergoals"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This is my Semester 1 Reflection at Egan.
          </ProjectCard>
          <ProjectCard
            title="A blank thing"
            link="https://www.youtube.com/watch?v=6n3pFFPSlW4"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            You can click this if you want, I guess, but there's really nothing there.
          </ProjectCard>
          <ProjectCard
            title="My Life in Pictures"
            link="/mlip"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            4 Pictures for every year of life- a slideshow.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={toga} alt="Matthew Kim" />
          <AboutSub>
            I am Matthew Kim, a 7th grader at Egan Middle School.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I like Rubik's Cubes. I also like playing video games (like Overwatch, even though I suck.) I also love watching anime (hence my profile picture of Toga Himiko from My Hero Academia)
          and I also enjoy coding, hence this website.
        </AboutDesc>
      </About>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
    </Parallax>
  </>
)

export default Index
