import React from 'react'
import ExternalLink from './../externalLink/externalLink'
import contactListStyles from './contactList.module.scss'

export default () => (
  <ul className={contactListStyles.list}>
    <li className={contactListStyles.item}>
      <ExternalLink link={'https://twitter.com/thomasrutzer'}>
        find me on twitter
      </ExternalLink>
    </li>
    <li className={contactListStyles.item}>
      <ExternalLink link={'https://github.com/thomasrutzer'}>
        find me on github
      </ExternalLink>
    </li>
    <li className={contactListStyles.item}>
      <ExternalLink link={'mailto:thomas@rutzer.de'}>mail me</ExternalLink>
    </li>
  </ul>
)
