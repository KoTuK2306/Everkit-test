import { FC } from 'react'
import { categories } from '../../../tokens'
import classes from './Filtration.module.css'

interface FiltrationProps {
  category: string
  setCategory: (value: string) => void
}

export const Filtration: FC<FiltrationProps> = ({ category, setCategory }) => {
  const makeClass = (currentFiltering: string) => {
    return `${classes.filteringButton} ${
      category === currentFiltering ? classes.active : ''
    }`
  }

  return (
    <div className={classes.filtration}>
      {categories.map(({ id, title }) => (
        <button key={id} onClick={() => setCategory(id)} className={makeClass(id)}>
          {title}
        </button>
      ))}
    </div>
  )
}
