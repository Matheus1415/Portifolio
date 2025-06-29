import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
      <Footer/>
    </LayoutContainer>
  )
}
