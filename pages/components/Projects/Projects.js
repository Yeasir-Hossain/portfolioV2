import React from 'react';
import HorizontalGallery from './HorizontalGallery';
import SectionHeading from '../Shared/SectionHeading';

const Projects = () => {
    const projects = [
        {
            "title": "Electronics Lab",
            "images": [
                "/P1-2.png",
                "/P1-1.png",
                "/P1-3.png",
                "/P1-4.png",
                "/P1-5.png",
                "/P1-6.png"],
            "description": "Fullstack website for a manufacturer",
            "features": [
                "1. Authentication for user and admin integrated using firebase",
                "2. Users can see the product detalis",
                "3. Payment method is added using Stripe",
                "4. Both user and admin can update profile",
                "5. Users can manage orders and also cancel them",
                "6. Reviews by the users can be added",
                "7. Admin can give set the role of other users to admin"
            ],
            "livesite": "https://electronics-lab-b1944.web.app/",
            "clientside": "https://github.com/Yeasir-Hossain/electronic-parts-manufacturer",
            "serverside": "https://github.com/Yeasir-Hossain/electronics-part-manufacturer-server",
            "tools": ["React", "Tailwind", "DaisyUI", "Express", "NodeJS", "Firebase", "MongoDB", "React Query", "React Hook Form", "React Toastify", "Stripe"]
        },
        {
            "title": "Bike Hub",
            "images": [
                "/P3-1.png",
                "/P3-2.png",
                "/P3-3.png",
                "/P3-4.png",
                "/P3-5.png",
                "/P3-6.png"],
            "description": "Fullstack website for managing warehouse",
            "features": [
                "1. Stocks and keeping track of sales",
                "2. Authentication for user integrated using firebase",
                "3. Restocking items and also reduce the quantity of stock after delivery",
                "4. Inventory and management of products is in private route",
                "5. Items can be removed by manager",
                "6. Reviews by the users can be added",
            ],
            "livesite": "https://bike-hub-b9899.web.app/",
            "clientside": "https://github.com/Yeasir-Hossain/bike-warehouse-client",
            "serverside": "https://github.com/Yeasir-Hossain/bike-warehouse-server",
            "tools": ["React", "Bootstrap", "Express", "NodeJS", "Firebase", "MongoDB", "React Query", "React Hook Form", "React Toastify"]
        },
        {
            "title": "Collab Act",
            "images": [
                "/P4-1.png",
                "/P4-2.png",
                "/P4-3.png",
                "/P4-4.png",
                "/P4-5.png",
                "/P4-6.png"],
            "description": "Front end website for a business consultancy service",
            "features": [
                "1. Internship work",
                "2. Use of small animations",
                "3. Used swipperjs for sliders",
                "4. Users can contact to the owners thorugh mail system",
            ],
            "livesite": "https://repsoft-collab-act.vercel.app/",
            "clientside": "https://github.com/Yeasir-Hossain/Repsoft-CollabAct",
            "tools": ["NextJS", "Tailwind", "DaisyUI", "Firebase", "React Star Ratings", "SwipperJS"]
        },
    ]
    return (
        <div id='projects' className='py-20'>
            <SectionHeading heading={"Projects"} />
            <HorizontalGallery projects={projects}></HorizontalGallery>
        </div>
    );
};

export default Projects;