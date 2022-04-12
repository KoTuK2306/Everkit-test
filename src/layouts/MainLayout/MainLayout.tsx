import { FC } from 'react'
import classes from './MainLayout.module.css'

interface MainLayoutProps {
  className?: string
}

export const MainLayout: FC<MainLayoutProps> = ({ children, className }) => {
  return <div className={`${classes.mainLayout} ${className}`}>{children}</div>
}
