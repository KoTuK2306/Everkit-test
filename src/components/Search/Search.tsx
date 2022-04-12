import { FC } from 'react'
import { MainLayout } from '../../layouts/MainLayout'

import classes from './Search.module.css'

export const Search: FC = () => {
  return (
    <MainLayout className={classes.searchBlock}>
      <h1 className={classes.title}>Поиск</h1>
      <p className={classes.text}>
        Тестовое задание не предусматривает реализацию контента здесь.
      </p>
    </MainLayout>
  )
}
