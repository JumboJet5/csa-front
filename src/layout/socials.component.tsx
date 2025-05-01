import { FC } from 'react'
import Discord from '../assets/socials/discord.svg?react'
import Facebook from '../assets/socials/facebook.svg?react'
import Github from '../assets/socials/github.svg?react'
import Medium from '../assets/socials/medium.svg?react'
import Telegram from '../assets/socials/telegram.svg?react'
import Twitter from '../assets/socials/twitter.svg?react'
import styled from 'styled-components'
import { WithClassName } from '../core'

const socials = [
  { icon: Facebook, link: '#facebook' },
  { icon: Twitter, link: '#x' },
  { icon: Github, link: '#github' },
  { icon: Medium, link: '#medium' },
  { icon: Telegram, link: '#tg' },
  { icon: Discord, link: '#discord' },
]

export const Socials: FC<WithClassName> = ({ className }) => {
  return (
    <SocialsWrapper className={className}>
      {socials.map(({ icon: Icon, link }) => (
        <SocialIconLink href={link} key={link}>
          <Icon />
        </SocialIconLink>
      ))}
    </SocialsWrapper>
  )
}

const SocialIconLink = styled.a`
  min-width: 24px;
  display: flex;
  justify-content: center;
`

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
