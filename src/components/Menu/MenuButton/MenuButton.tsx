import { FC } from 'react'
import classes from './MenuButton.module.css'

interface MenuButtonProps {
  text?: string
  icon: React.ReactNode
  className?: string
}

export const MenuButton: FC<MenuButtonProps> = ({ text, icon, className }) => {
  return (
    <button className={`${classes.tokenButton} ${className}`}>
      <div className={classes.icon}>{icon}</div>
      <span className={classes.text}>{text}</span>
    </button>
  )
}
