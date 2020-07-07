import React from "react"
import NeumorphicIcon from "../NeumorphicIcon/NeumorphicIcon"

import emailIcon from "../../assets/icons/social/icons8-email-sign-100.png"
import githubIcon from "../../assets/icons/social/icons8-github.svg"
import linkedinIcon from "../../assets/icons/social/icons8-linkedin.svg"
import mediumIcon from "../../assets/icons/social/icons8-medium.svg"
import twitterIcon from "../../assets/icons/social/icons8-twitter.svg"

const SocialIcons = () => {
  return (
    <div>
      <NeumorphicIcon
        tooltip
        tooltipText="GitHub"
        imgSrc={githubIcon}
        altText="GitHub Logo"
        linkUrl="https://github.com/r0ss26"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="Twitter"
        imgSrc={twitterIcon}
        altText="Twitter Logo"
        linkUrl="https://twitter.com/rossandrewbaker"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="Medium"
        imgSrc={mediumIcon}
        altText="Medium Logo"
        linkUrl="https://medium.com/@rossabaker"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="LinkedIn"
        imgSrc={linkedinIcon}
        altText="LinkedIn Logo"
        linkUrl="https://www.linkedin.com/in/rossandrewbaker/"
      />
      <NeumorphicIcon
        tooltip
        tooltipText="Email Me"
        imgSrc={emailIcon}
        altText="Gmail Logo"
        linkUrl="mailto:rossbaker32@gmail.com"
      />
    </div>
  )
}

export default SocialIcons
