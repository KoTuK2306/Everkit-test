import { FC, useState } from 'react'
import { tokens, categories } from '../../tokens'
import { Token } from './Token'
import { Filtration } from './Filtration'
import classes from './Tokens.module.css'
import { MainLayout } from '../../layouts/MainLayout'

export const Tokens: FC = () => {
  const [category, setCategory] = useState(categories[0].id)
  const filteredTokens = tokens.filter((item) =>
    category === categories[0].id ? item : item.categories.includes(category),
  )

  return (
    <MainLayout className={classes.tokens}>
      <section className={classes.titleSection}>
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>Токены Everscale</h1>
          <Filtration category={category} setCategory={setCategory} />
        </div>
      </section>
      {filteredTokens.map(
        ({
          name,
          id,
          logoURI,
          symbol,
          description,
          price,
          priceChange,
          volume,
          volumeChangePercentage,
          tvl,
          tvlChangePercentage,
          users,
        }) => (
          <Token
            key={id}
            name={name}
            id={id}
            logoURI={logoURI}
            symbol={symbol}
            description={description}
            price={price}
            priceChange={priceChange}
            volume={volume}
            volumeChangePercentage={volumeChangePercentage}
            tvl={tvl}
            tvlChangePercentage={tvlChangePercentage}
            users={users}
          />
        ),
      )}
    </MainLayout>
  )
}
