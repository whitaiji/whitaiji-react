import styles from './styles.module.css'
import React from 'react'

 const ExampleComponent = ({ text }) => {
    return <div className={styles.test}>Example Component: {text}</div>
  }

  export default ExampleComponent