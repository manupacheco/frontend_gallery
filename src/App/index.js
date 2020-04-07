import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from '../styles/GlobalStyles'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Container } from './styles'

export const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Router>
        <NotFound default />
        <Home path='/' />
      </Router>
    </Container>
  </>
)
