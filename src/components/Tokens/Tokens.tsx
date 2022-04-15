import { FC, useState } from 'react'
import { tokens, categories } from '../../tokens'
import { Token } from './Token'
import { Filtration } from './Filtration'
import { MainLayout } from '../../layouts/MainLayout'
import classes from './Tokens.module.css'

export const Tokens: FC = () => {
  const [category, setCategory] = useState(categories[0].id)
  const filteredTokens = tokens.filter((token) =>
    category === categories[0].id ? token : token.categories.includes(category),
  )

  return (
    <MainLayout className={classes.tokens}>
      <section className={classes.titleSection}>
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>Токены Everscale</h1>
          <Filtration category={category} setCategory={setCategory} />
        </div>
      </section>
      {filteredTokens.map((token) => (
        <Token key={token.id} token={token} />
      ))}
    </MainLayout>
  )
}
