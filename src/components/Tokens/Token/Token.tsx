import { useState, FC } from 'react'
import { tokenIcons } from '../../../tokenIcons'
import classes from './Token.module.css'

const userIco = tokenIcons[0].icon
const chevron = tokenIcons[1].icon

interface TokenProps {
  item: {
    name: string
    id: number
    logoURI: string
    symbol: string
    description: string
    price: number
    priceChange: {
      hours24: number
      days7: number
      days365: number
    }
    volume: number
    volumeChangePercentage: number
    tvl: number
    tvlChangePercentage: number
    users: number
  }
}

const makeColor = (number: number) => {
  if (number < 0) {
    return `${classes.red}`
  }
  if (number > 0) {
    return `${classes.green}`
  }
}

const makeNumber = (number: number) => {
  if (number > 0) {
    return `+${number}%`
  }
  return `${number}%`
}

export const Token: FC<TokenProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDescription = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <section onClick={toggleDescription} className={classes.tokenBlock}>
      <div className={classes.token}>
        <p className={classes.id}>{`#${item.id}`}</p>
        <img className={classes.logo} src={item.logoURI} alt="bitLogo" />
        <div className={classes.nameBlock}>
          <p className={classes.name}>{item.name}</p>
          <p className={classes.symbol}>{item.symbol}</p>
        </div>
        <div className={classes.priceBlock}>
          <p className={classes.price}>{`${item.price} $`}</p>
          <div className={classes.priceChanges}>
            <p className={makeColor(item.priceChange.hours24)}>
              {makeNumber(item.priceChange.hours24)}
            </p>
            •
            <p className={makeColor(item.priceChange.days7)}>
              {makeNumber(item.priceChange.days7)}
            </p>
            •
            <p className={makeColor(item.priceChange.days365)}>
              {makeNumber(item.priceChange.days365)}
            </p>
          </div>
        </div>
        <div className={classes.volumeBlock}>
          <p className={classes.volume}>{`${item.volume.toLocaleString('ru')}$`}</p>
          <p className={classes.percent}>{`${item.volumeChangePercentage}%`}</p>
        </div>
        <div className={classes.volumeBlock}>
          <p className={classes.volume}>{`${item.tvl.toLocaleString('ru')}$`}</p>
          <p className={classes.percent}>{`${item.tvlChangePercentage}%`}</p>
        </div>
        <div className={classes.accountsBlock}>
          <div className={classes.usersIco}>{userIco}</div>
          <p className={classes.usersNum}>{item.users.toLocaleString('ru')}</p>
        </div>
        <div
          className={
            isOpen
              ? `${classes.descriptionButton} ${classes.openedDescriptionButton}`
              : classes.descriptionButton
          }
        >
          {chevron}
        </div>
      </div>
      <div
        className={
          isOpen ? `${classes.description} ${classes.open}` : classes.description
        }
      >
        {item.description}
      </div>
    </section>
  )
}
