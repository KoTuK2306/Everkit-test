import { FC } from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import classes from './Plug.module.css'

interface PlugProps {
  title: string
}

export const Plug: FC<PlugProps> = ({ title }) => {
  return (
    <MainLayout className={classes.plugWrapper}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.text}>Реализация контента здесь не предусматривается.</p>
    </MainLayout>
  )
}
