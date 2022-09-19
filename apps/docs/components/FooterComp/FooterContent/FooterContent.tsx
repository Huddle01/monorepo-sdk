import React from "react";

// Assets
import FooterIcons from "../../assets/FooterIcons";

// Components
import Description from "../Description";
import FooterGrid from "../FooterGrid/FooterGrid";
import Social from "../Social/Social";

const FooterContent: React.FC = () => (
  <div className="flex-col-reverse flex justify-center  md:flex-row  md:w-full md:px-[6rem]">
    <div className="w-full  md:mt-0 ">
      <div>{FooterIcons.huddle}</div>
      <Description />
      <Social />
    </div>
    <FooterGrid />
  </div>
);

export default FooterContent;
