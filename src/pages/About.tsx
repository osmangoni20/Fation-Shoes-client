import React from "react";
import logo from '../assets/logo-2.png'
import Contact from "../component/contact/Contact";
export const teamData = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO & Founder",
    bio: "John has over 15 years of experience in the footwear industry and is passionate about creating innovative and comfortable shoes.",
    email: "john.doe@fationshoe.com",
    phone: "+1 234 567 890",
    photoUrl: "https://i.ibb.co.com/s172VSK/man2.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Officer",
    bio: "Jane specializes in digital marketing and has been leading successful marketing campaigns for over a decade.",
    email: "jane.smith@fationshoe.com",
    phone: "+1 234 567 891",
    photoUrl: "https://i.ibb.co.com/j4HtnBr/rayhan.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith"
    }
  },
  {
    id: 3,
    name: "Michael Lee",
    position: "Lead Designer",
    bio: "Michael is the creative force behind Fation Shoe's innovative designs, with a background in both fashion and industrial design.",
    email: "michael.lee@fationshoe.com",
    phone: "+1 234 567 892",
    photoUrl: "https://i.ibb.co.com/s172VSK/man2.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/michaellee",
      instagram: "https://instagram.com/michaelleedesigns"
    }
  },
  {
    id: 4,
    name: "Emilya Johns",
    position: "Product Manager",
    bio: "Emily ensures every product meets the highest quality standards and leads the development of new shoe lines.",
    email: "emily.johnson@fationshoe.com",
    phone: "+1 234 567 893",
    photoUrl: "https://i.ibb.co.com/sRPm3DT/Kylla-Guru-Co-Founder-Girl-Con-removebg-preview.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/emilyjohnson"
    }
  },
  {
    id: 5,
    name: "Tanisha Khan",
    position: "Head of Sales",
    bio: "David has a strong background in sales and business development, leading the team to expand into new markets.",
    email: "david.kim@fationshoe.com",
    phone: "+1 234 567 894",
    photoUrl: "https://i.ibb.co.com/KGZ5TjB/business-woman-portrait-ipad-company-founder-removebg-preview.png",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim"
    }
  }
];

const About = () => {
    return (
      <div className="lg:hero   pb-10">
        <div>
       
          <div className="grid grid-cols-1 justify-between lg:items-center px-10  lg:grid-cols-2
            text-black">
            <figure className="md:mx-auto">
              <img className="h-[200px]" src={logo} alt="" loading="lazy"/>
            </figure>
            <div>
            <p className=" py-6 font-lato text-justify">Fation Shoes  is one of the nation’s largest family footwear retailers with its own brand of style. Headquartered in Evansville, Indiana, Shoe Carnival stores are located in 35 states and Puerto Rico, as well as online at shoecarnival.com. We are continuing to grow!

With our unique and distinctive concept and promotional marketing, Shoe Carnival steps ahead of our competitors by bringing the best deals on the hottest brands for the whole family! We have an incredibly talented, highly motivated, and diverse team in our Retail Stores, Corporate Office, and Distribution Center. We are looking for team members who understand the importance of customer service, have an excellent work ethic, and a passion for career growth opportunities. Put your best foot forward – join our Talent Network and apply today! Learn more about our careers and current opportunities on our Careers page.

We trade on the NASDAQ Stock Market under the symbol SCVL. 
            </p>
          </div>
          </div>
            {/* Team Mate */}
          <div className="max-w-full text-center lg:p-10 p-2">
            <h3 className="text-sm text-center font-medium font-sans">Our Teams</h3>
            <h4 className="lg:text-5xl text-xl py-2 font-bold text-center font-montserrat">Leadership team</h4>
            <p>We are building the fashionable shoe</p>
           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center">
            {
              teamData.map(teamMate=>{
                return(
<div key={teamMate.id} className="card product_cart  lg:w-[84] w-full  text-black
      p-0 
    bg-base-100 z-5">
        <figure><img className="w-full p-0 h-[250px]"  src={teamMate?.photoUrl} alt="Employee" /></figure>
        
        <div className="card-body px-4 space-y-2 rounded">
        <div className="card-title font-montserrat">
          <h6>{ teamMate?.name}</h6>
        <p className="badge bg-primary text-white py-5 text-center">{teamMate?.position.slice(0,20)}</p>
        </div>
        <p className='text-justify'>{teamMate?.bio.slice(0,50)}..</p>
        <div className=" space-y-2">
          
        <p className="font-semibold font-lato">{ teamMate?.email} </p> 
        <p className="font-semibold font-lato">{ teamMate?.phone} </p> 
       
        </div>
     

        </div>
        
        </div> 
                )
              })
            }
           
           </div>
          </div>
          {/* Contact */}
          <Contact/>
        </div>
      </div>
    );
  };
  
  export default About;
  