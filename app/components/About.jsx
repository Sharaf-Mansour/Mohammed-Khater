"use client";
import React,{ useTransition, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import TabButton from './TabButton';
import Skills from './Skills';
import Education from './Education';
import Certificates from './Certificates';


const getContent = (id) => {
  switch (id) {
    case 'skills':
      return <Skills />;
    case 'education':
      return <Education />;
    case 'certificates':
      return <Certificates />;
    default:
      return null;
  }
}

const About = () => {

  const [tab,setTab]= useState("skills");
  const [isPending, startTransition]=useTransition();

  const handleTapChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    });
  }

  return (

    <section className='text-white ' id="about">
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 items-start py-8 px-4 sm:py-16 xl:px-16'>
        <Image
          src="/images/About.jpg"
          alt='Fayez Kassem Image'
        width={500}
        height={500}
        />
        <div className='mt-4 lg:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            A student at Cairo University currently ranked second in my class and an ALX fellow.
            I used ETL, automation, and predictive modeling to build a dataset and extract insights.
            Forecast geomagnetic storms to anticipate and mitigate risks during NASA space apps hackathon 2023.
            Analyzed data and built dashboards using power BI to inform strategic decisions at ALX.
            Led two entrepreneurial projects with two teams of diverse cultures at ALX ventures and university.
            Proficient in SQL, Python, Power BI, and bash scripting with an analytical mindset.
         </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTap={() => handleTapChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTap={() => handleTapChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTap={() => handleTapChange("certificates")} active={tab === "certificates"}>Certificates</TabButton>
          </div>
          <div className='mt-8'>
            {getContent(tab)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About