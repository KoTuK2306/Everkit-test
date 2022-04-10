import { FC } from 'react'
import { categories } from '../../../tokens'
import classes from './Filtration.module.css'

interface FiltrationProps {
  category: string
  setCategory: (value: string) => void
}

export const Filtration: FC<FiltrationProps> = ({ category, setCategory }) => {
  const makeClass = (currentFilt: string) => {
    return category === currentFilt
      ? `${classes.filtButton} ${classes.active}`
      : classes.filtButton
  }

  return (
    <div className={classes.filtrationBlock}>
      <button
        onClick={() => setCategory(categories[0].title)}
        className={makeClass(categories[0].title)}
      >
        {categories[0].title}
      </button>
      <button
        onClick={() => setCategory(categories[1].title)}
        className={makeClass(categories[1].title)}
      >
        {categories[1].title}
      </button>
      <button
        onClick={() => setCategory(categories[2].title)}
        className={makeClass(categories[2].title)}
      >
        {categories[2].title}
      </button>
      <button
        onClick={() => setCategory(categories[3].title)}
        className={makeClass(categories[3].title)}
      >
        {categories[3].title}
      </button>
      <button
        onClick={() => setCategory(categories[4].title)}
        className={makeClass(categories[4].title)}
      >
        {categories[4].title}
      </button>
    </div>
  )
}
