import React from 'react'
import location from "../styles/location.module.css"

const Location = () => {
  return (
    <div className={location.location}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5870513.66931928!2d59.32290020873309!3d41.26009622087198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2z0KPQt9Cx0LXQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1709608969158!5m2!1sru!2s" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Location