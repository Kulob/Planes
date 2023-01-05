import React from 'react'
import styles from './styles.module.css'

export const ButtonSort = ({
  containerClassName = '',
  className = '',
  onClick = () => null,
  children = '',
  isBackButton = false
}) => {
  return (
    <div>
      <span className={`${isBackButton ? styles.backButton : styles.button} ${className}`}
      onClick={onClick}>{children}</span>
    </div>
  )
}
