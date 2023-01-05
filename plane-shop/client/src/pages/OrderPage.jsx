import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonSort } from '../components/ButtonSort'
import { ContentWrapper } from '../components/contentWrapper'
import styles from './styles.module.css'

export const OrderPage = () => {
  const navigate = useNavigate()
  return (
    <ContentWrapper className={styles.order}>
      <h1 className={styles.ordertitle}>Ваш заказ будет доставлен в ближайшее время</h1>
      <ButtonSort onClick={() => navigate('/')}>На Главную</ButtonSort>
    </ContentWrapper>
  )
}
