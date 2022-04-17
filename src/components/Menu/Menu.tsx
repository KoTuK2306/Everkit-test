import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuButton } from './MenuButton'
import { menu } from '../../menu'
import { logo } from '../../logo'
import { RouterPaths } from '../../enums/RouterPaths'
import classes from './Menu.module.css'

export const Menu: FC = () => {
  return (
    <div className={classes.menu}>
      <div className={classes.menuContent}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>{logo.Icon}</div>
          {menu.map(({ id, title, icon }) => (
            <NavLink
              key={id}
              to={id === RouterPaths.TOKENS ? RouterPaths.TOKENS : RouterPaths.SEARCH}
            >
              {({ isActive }) => (
                <MenuButton
                  className={isActive ? 'active' : ''}
                  text={title}
                  icon={icon}
                />
              )}
            </NavLink>
          ))}
        </div>
        <p className={classes.language}>Русский</p>
      </div>
    </div>
  )
}
