import React from 'react'
import { Header, Title, Description } from './styles'
import { ImagesGrid } from '../../components/ImagesGrid'

export const Home = () => {
  return (
    <>
      <Header>
        <Title>Mind in images</Title>
        <Description>I try to show how this divided my "head" in image format thanks to <a href='https://unsplash.com/'>unsplash</a></Description>
      </Header>
      <ImagesGrid />
    </>
  )
}
