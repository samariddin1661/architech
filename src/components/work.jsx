import React from 'react'
import styles from '../styles/about.module.css'
import workcss from '../styles/work.module.css'

const Work = () => {
  return (
    <div>
      <div className={workcss.Work}>
      <div className={styles.ourProject}>
          <h4>Our Project & Vision</h4>
      </div>
        <h1>ABOUT OUR STUDIO</h1>
        <p>It is some systematized exhibition of the whale in his broad genera, that I would now fain put before you. Yet is it no easy task. The classification of the constituents of a chaos, nothing less is here essayed.</p>
        <tabla className={workcss.table}>
          <ul>
            <li><img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/06/san-fran-640x640.jpg" alt="" /></li>
            <li><img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/05/awarded-1280x640.jpg" alt="" /></li>
            <li><img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/05/renaissance-640x640.jpg" alt="" /></li>
            <li><img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/06/panorama-1280x640.jpg" alt="" /></li>
            <li><img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/06/penthouse-640x640.jpg" alt="" /></li>
            <li><img src="https://www.pirenko-themes.com/hook/architecture/wp-content/uploads/sites/19/2016/05/tonal-640x640.jpg" alt="" /></li>
            <li><img src="" alt="" /></li>

          </ul>
        </tabla>
      </div>
    </div>
  )
}

export default Work
