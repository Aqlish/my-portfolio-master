// import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title: "My Page",
        desc: "Explore my work, skills, and experiences, designed to showcase my passion for innovation and excellence.",
        img: "/project-1.png",
        tags: ["next.js , css"],
    },
    {
        id:1,
        title: "Static Resume",
        desc: "Discover my professional journey, skills, and accomplishments in a concise and structured format.",
        img: "/project-2.png",
        tags: ["next.js , css, typscript"],
       
    },
    {
        id:2,
        title: "Website Page",
        desc: "Explore my portfolio, showcasing my skills, projects, and professional journey in a simple and engaging format.",
        img: "/project-3.png",
        tags: ["next.js , css"],
       
    },
    {
        id:3,
        title: "Dynamic Resume",
        desc: "View my dynamic resume, where skills, experience, and achievements are updated in real-time to reflect my career growth.",
        img: "/project-4.png",
        tags: ["next.js ,css , typscript"],
        
    },]
const project = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading title="My Projects"/>

      <div className='grid gap-10 xl:gapp-y-10 md:grid.cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default project