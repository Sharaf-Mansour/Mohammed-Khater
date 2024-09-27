import React from 'react'
import ContactLink from './ContactLink'
import gmailIcon from '/public/images/contacts/gmail.svg'

const contactInfo = [
  {
    id: 1,
    title: "whatsapp",
    icon: "images/contacts/whatsapp.svg",
    link: "https://api.whatsapp.com/send/?phone=201011163787&type=phone_number&app_absent=0",
  },
  {
    id: 2,
    title: "gmail",
    icon: "images/contacts/gmail.svg",
    link: "mailto:mohammed78tarek@gmail.com",
  },
 
  {
    id: 3,
    title: "linkedin",
    icon: "images/contacts/linkedin.svg",
    link: "https://www.linkedin.com/in/mohammed-tarek-b1168b246/",
  },
  {
    id: 4,
    title: "github",
    icon: "images/contacts/github.svg",
    link: "https://github.com/Mohammed0tarek",
  }
]

const ContactMe = () => {
  return (

    <footer id="contact">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
        contact me
      </h2>
      <div className='flex flex-row gap-8 justify-center items-center px-4 py-1 mb-4'>
        {contactInfo.map((contact) =>(
          <ContactLink
            key={contact.id}
            title={contact.title}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
      </div>
    </footer>
  )
}

export default ContactMe