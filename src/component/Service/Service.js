import React from 'react'
// import '.../css/Service/Service.css'
import '../../css/Service/Service.css'
import LeftImageSection from './LeftImageSection'
const Service = () => {
    const obj=[
        {
            img:"1.png",
            heading:"Cloud Transformation",
            content:"We offer a full spectrum of solutions to help companies maximize the benefits of cloud.",
            order1:1,
            order2:2

        },
        {
            img:"2.png",
            heading:"App Modernization, Cloud Native",
            content:"Effectively employ technologies such as hybrid cloud, microservices, open source & API to acheive digital transformation.",
            order1:2,
            order2:1
        },
        {
            img:"3.png",
            heading:"DevOps & Automation",
            content:"Automate end-to-end delivery pipeline across cloud platforms for increased efficiency, faster time-to-market and reduced cost. Create, orchestrate and connect Digital components on-the-go with DevOps.",
            order1:1,
            order2:2
        },
        {
            img:"4.png",
            heading:"Application Development and Management",
            content:"Kainskep application development and management services to give your business an edge. We help you innovate, modernize, and update your legacy systems to achieve competitive digitization.",
            order1:2,
            order2:1
        },
        {
            img:"5.png",
            heading:"Cloud Data Services",
            content:"In the world of ever-growing data, organizations must tap into the power of cloud-based data platforms and analytics services. At Kainskep Solutions, we understand the significance of data in today’s digital world and we offer extensive Cloud Data Services.",
            order1:1,
            order2:2
        },
    ]
  return (
    <>
    {
        obj.map(val=> 
        <div className='service_hero_section'><LeftImageSection val={val}/></div>
        )
    }
   
    
    
    
    </>
  )
}

export default Service