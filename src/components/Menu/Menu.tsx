import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuButton } from './MenuButton'
import { menu } from '../../menu'
import { RouterPaths } from '../../enums/RouterPaths'
import classes from './Menu.module.css'

export const Menu: FC = () => {
  const [currentPage, setCurrentPage] = useState('tokens')

  return (
    <div className={classes.menu}>
      <div className={classes.menuContent}>
        <img
          className={classes.logo}
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
        />
        {menu.map(({ id, title, icon }) => (
          <Link
            onClick={() => setCurrentPage(id)}
            to={id === RouterPaths.TOKENS ? '' : RouterPaths.SEARCH}
          >
            <MenuButton
              className={currentPage === id ? classes.active : ''}
              key={id}
              text={title}
              icon={icon}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
