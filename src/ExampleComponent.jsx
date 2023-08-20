import styles from './styles.module.css'
import React from 'react'

export const ExampleComponent = ({ text }) => {
    return <div className={styles.test}>Example Component: {text}</div>
  }