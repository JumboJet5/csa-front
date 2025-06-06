import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer, Zoom } from 'react-toastify'
import { WagmiProvider } from 'wagmi'
import { Layout } from './layout'
import { Main } from './pages/main'
import { ProfilePage } from './pages/profile'
import 'react-toastify/dist/ReactToastify.css'
import { PurchaseNft } from './pages/purchase-nft'
import { config } from './wagmi'

const queryClient = new QueryClient()

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Pages />
          </Layout>
          <ToastContainer transition={Zoom} closeButton={false} icon={false} />
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  )
}

const Pages: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/nft" element={<PurchaseNft />}></Route>
      <Route path="*" element={<Main />}></Route>
    </Routes>
  )
}
