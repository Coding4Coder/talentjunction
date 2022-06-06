import React from "react";
import { MainContainer, PageHeading, PageWrapper, ReadMore, Center } from "../Components/Styles/Global.style";
import aboutImg from "../img/about.png";
import { useState } from "react";
import BestPrice from "../Components/BestPrice";

const About = () => {
    const[isOpen, setIsOpen] = useState(false);
    const [readMore,setReadMore] = useState(false);
    const extraContent=
        <ReadMore>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
          porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
          commodi officia aliquam! Maxime.
        </ReadMore>
   
    const linkName = readMore ? 'Read Less <' : 'Read More >'


    const openModal = () => {
        setIsOpen(true);
      }
      const closeModel = () => {
        setIsOpen(false);
      }

  return (
    <>
      <PageHeading>About Us</PageHeading>
      <Center> <button className="btn btn-primary" onClick={ openModal }>Best Price Guarantee</button>  </Center>
      <BestPrice open={isOpen} close={closeModel}>
           <h3 className="display-6 text-center" > Best Price Guarantee !</h3>
            <ul>
            <li>If the other offer is on a website that doest reveal the property or accommodation type youll be staying in until after booking. 
            </li>
            <li>If the other offer is part of a loyalty or rewards program. We define this type of other offer as any situation where a customer gets a reduced price from a property or other website as a reward for repeat business, logging in, entering a coupon code, referring other customers, or performing any other action that then changes the initially shown price. 
            </li>
            <li>If your booking or the offer you're comparing is labeled as a "Partner offer" (i.e. is facilitated by a Booking.com partner company).
            </li>
            <li>You can claim a refund for the difference if you find your reservation cheaper on another website.

            </li>
        </ul>
         </BestPrice>
   
      <MainContainer bg>
          <PageWrapper>
                <div className="item">
                     <img src={aboutImg} alt="About Us" className="imgRes" />
                </div>
                    <p className="item">
                        <h2>A beautiful mind</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br />
                    {readMore && extraContent}
                    <a className="read-more" onClick={()=>{setReadMore(!readMore)}}>
                       {linkName}
                    </a>
                   
                    </p>

        </PageWrapper>
      </MainContainer>
    </>
  );
};

export default About;