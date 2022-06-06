import React from "react";
import { MainContainer, PageHeading, PageWrapper, ReadMore } from "../Components/Styles/Global.style";
import missionImg from "../img/mission.jpg";
import { useState } from "react";

const Mission = () => {

    const [readMore,setReadMore] = useState(false);
    const extraContent=
        <ReadMore>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
          porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
          commodi officia aliquam! Maxime.
        </ReadMore>
   
    const linkName = readMore ? 'Read Less <' : 'Read More >'

  return (
    <>
      <PageHeading>Our Mission</PageHeading>
      <MainContainer>
          <PageWrapper>
                <div className="item">
                     <img src={missionImg} alt="Our Mission" className="imgRes" />
                </div>
                    <p className="item">
                        <h2>Our Mission</h2>
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

export default Mission;