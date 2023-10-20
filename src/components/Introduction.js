import React from 'react'
import classes from './Introduction.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

function Introduction() {
  return (
    <div className={classes.page}>
      <div className={classes.intro}>
        <h2 className={classes.hello}>Hello, I'm</h2>
        <h1 className={classes.name}>Mariam Khatoon</h1>
        <h3 className={classes.short}>
          A Computer Science Graduate with expertise in Web Development.
        </h3>
        <div className={classes.icons}>
          <div className={classes.icon}>
            <LinkedInIcon fontSize="large" />
          </div>
          <div className={classes.icon}>
            <GitHubIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className={classes.techstack}>
        <div>HTML</div>
        <div>CSS</div>
        <div>React</div>
        <div></div>
      </div>
    </div>
  )
}

export default Introduction
