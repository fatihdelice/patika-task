import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.`${text}`}>Example Component: {text}</div>
}


export const Button = ({ type, value }) => {
  return <button className={styles.`${type}`}> Button value: {value} </button>
}