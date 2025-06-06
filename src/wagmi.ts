import { createConfig, http } from 'wagmi'
import { optimism } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [optimism],
  connectors: [injected()],
  transports: { [optimism.id]: http() },
})
