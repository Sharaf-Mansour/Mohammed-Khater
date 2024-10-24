import React from 'react'
import Image from "next/image";

const ContactLink = ({icon, link, title}) => {
  return (
    <>
        <a href={link} target="_blank">
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
          />
        </a>
    </>
  )
}

export default ContactLink