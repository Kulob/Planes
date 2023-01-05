import React from 'react'
import { Header } from '../components/header'
import { PlanesPage } from '../components/planes'

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header/>
      <PlanesPage/>
    </React.Fragment>
  )
}

