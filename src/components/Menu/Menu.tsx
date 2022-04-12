import { FC, useState } from 'react'
import { MenuButton } from './MenuButton'
import { menu } from '../../menu'
import { Link } from 'react-router-dom'
import classes from './Menu.module.css'

const tokensButton = menu[0]
const searchButton = menu[1]

export const Menu: FC = () => {
  const [currentPage, setCurrentPage] = useState('tokens')

  const setCurrPage = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <div className={classes.menu}>
      <div className={classes.menuContent}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
        <Link onClick={() => setCurrPage('tokens')} to="/">
          <MenuButton
            className={currentPage === 'tokens' ? classes.active : undefined}
            key={tokensButton.id}
            text={tokensButton.title}
            icon={tokensButton.icon}
          />
        </Link>
        <Link onClick={() => setCurrPage('search')} to="search">
          <MenuButton
            className={currentPage === 'search' ? classes.active : undefined}
            key={searchButton.id}
            text={searchButton.title}
            icon={searchButton.icon}
          />
        </Link>
      </div>
    </div>
  )
}
