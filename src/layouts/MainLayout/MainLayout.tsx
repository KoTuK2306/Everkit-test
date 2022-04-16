import { FC } from 'react'
import classes from './MainLayout.module.css'

interface MainLayoutProps {
  className?: string
}

export const MainLayout: FC<MainLayoutProps> = ({ children, className }) => {
  return <section className={`${classes.mainLayout} ${className}`}>{children}</section>
}
