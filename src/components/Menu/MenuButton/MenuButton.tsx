import { FC, ReactNode } from 'react'
import classes from './MenuButton.module.css'

interface MenuButtonProps {
  text: string
  icon: ReactNode
  className?: string
}

export const MenuButton: FC<MenuButtonProps> = ({ text, icon, className }) => {
  return (
    <button
      className={`${classes.tokenButton} ${className === 'active' ? classes.active : ''}`}
    >
      <div className={classes.icon}>{icon}</div>
      <span className={classes.text}>{text}</span>
    </button>
  )
}
