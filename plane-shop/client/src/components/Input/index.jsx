import React from 'react'
import styles from './styles.module.css'

export const Input = ({
  type = "text",
  name = "",
  containerClassName = "",
  onChange = () => null,
  error = "",
  placeholder = ""

}) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <input 
      type={type}
      name={name}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}/>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
