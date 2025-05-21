import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './layout'
import { Main } from './pages/main'
import { ProfilePage } from './pages/profile'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Pages />
      </Layout>
    </BrowserRouter>
  )
}

const Pages: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  )
}
