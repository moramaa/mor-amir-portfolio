import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {url:string}

const Icon = (props: Props ) => {
    return (
        <SocialIcon
         url={props.url}
         bgColor="gray"
         fgColor='transparent'
        />
  )
}

export default Icon