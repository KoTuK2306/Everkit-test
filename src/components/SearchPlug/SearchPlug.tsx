import { FC } from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import classes from './SearchPlug.module.css'

export const SearchPlug: FC = () => {
  return (
    <MainLayout className={classes.plugWrapper}>
      <h1 className={classes.title}>Поиск</h1>
      <p className={classes.text}>Реализация контента здесь не предусматривается.</p>
    </MainLayout>
  )
}
