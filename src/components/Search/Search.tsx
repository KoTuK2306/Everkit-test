import { FC } from 'react'
import classes from './Search.module.css'

export const Search: FC = () => {
  return (
    <section className={classes.searchBlock}>
      <h1 className={classes.title}>Поиск</h1>
      <p className={classes.text}>
        Тестовое задание не предусматривает реализацию контента здесь.
      </p>
    </section>
  )
}
