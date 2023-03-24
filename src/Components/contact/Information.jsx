import React from 'react'
// import { Icon } from '@iconify/react'

// import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
// import phoneIcon from '@iconify/icons-mdi/phone-outline'
// import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

// import facebookIcon from '@iconify/icons-mdi/facebook'
// import linkedinIcon from '@iconify/icons-mdi/linkedin'
// import twitterIcon from '@iconify/icons-mdi/twitter'
import './information.css'

const contactDetails = [
  {
    value: '1600 St-louis, Point-E, Dakar.',
    // icon: locationIcon,
  },
  { value: '+221 77 000 00 00',
  //  icon: phoneIcon 
  },
  { value: 'support@example.com', 
  // icon: emailIcon 
},
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
    </p>
  ))

// const renderIcons = () =>
//   [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
//     <Icon icon={icon} key={key} className="info-icon" />
//   ))

const Info = () => (
  <section className="info">
    <h2 className="info-h2">Lavish Pure Beauty</h2>

    <div className="info-details-container">{renderContactDetails()}</div>

    {/* <div className="info-icons-container">{renderIcons()}</div> */}
  </section>
)

export default Info
