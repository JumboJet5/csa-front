import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './layout'
import { Main } from './pages/main'

export function App() {
  return (
    <BrowserRouter>
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
    </Routes>
  )
}
