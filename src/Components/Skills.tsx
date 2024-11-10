import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
            <p className='text-gray-500 pt-2'>I am proficient in a wide range of skills, including [list key skills such as programming languages, design tools, project management, etc.]. With a strong foundation in [relevant area], I excel at problem-solving and adapting to new technologies and methodologies. My expertise allows me to effectively collaborate with teams, deliver high-quality solutions, and continuously improve processes. I am committed to staying current with industry trends and continuously enhancing my skill set to drive success in every project I undertake.</p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2>Typescript</h2>
                    <h2>React.js</h2>
                    <h2>Next.js</h2>
                </div>
                <div className='space-y-2'>
                    <h2>Tailwind</h2>
                    <h2>css</h2>
                    <h2>Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
