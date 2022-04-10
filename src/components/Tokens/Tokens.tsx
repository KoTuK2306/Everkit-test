import { FC, useState } from 'react'
import { tokens, categories } from '../../tokens'
import { Token } from './Token'
import { Filtration } from './Filtration'
import classes from './Tokens.module.css'

export const Tokens: FC = () => {
  const [category, setCategory] = useState(categories[0].title)
  const filteredTokens = tokens.filter((item) =>
    category === categories[0].title
      ? item
      : item.categories.includes(category.toLowerCase()),
  )

  return (
    <div className={classes.tokens}>
      <section className={classes.titleSection}>
        <h1 className={classes.title}>Токены Everscale</h1>
        <Filtration category={category} setCategory={setCategory} />
      </section>
      {filteredTokens.map((item) => (
        <Token key={item.id} item={item} />
      ))}
    </div>
  )
}
