import { useState, FC } from 'react'
import { tokenIcons } from '../../../tokenIcons'
import { Token as TokenInterface } from '../../../interfaces/Token'
import classes from './Token.module.css'

const userIcon = tokenIcons[0].icon
const chevron = tokenIcons[1].icon

type TokenProps = Omit<TokenInterface, 'address' | 'categories'>

const getClassOfColor = (number: number) => {
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

export const Token: FC<TokenProps> = ({
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
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDescription = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <section onClick={toggleDescription} className={classes.tokenBlock}>
      <div className={classes.token}>
        <p className={classes.id}>{`#${id}`}</p>
        <img className={classes.logo} src={logoURI} alt="bitLogo" />
        <div className={classes.nameBlock}>
          <p className={classes.name}>{name}</p>
          <p className={classes.symbol}>{symbol}</p>
        </div>
        <div className={classes.priceBlock}>
          <p className={classes.price}>{`${price} $`}</p>
          <div className={classes.priceChanges}>
            {Object.values(priceChange).map((priceChange) => (
              <p className={`${classes.priceChange} ${getClassOfColor(priceChange)}`}>
                {makeNumber(priceChange)}
              </p>
            ))}
          </div>
        </div>
        <div className={classes.volumeBlock}>
          <p className={classes.volume}>{`${volume.toLocaleString('ru')}$`}</p>
          <p className={classes.percent}>{`${volumeChangePercentage}%`}</p>
        </div>
        <div className={classes.volumeBlock}>
          <p className={classes.volume}>{`${tvl.toLocaleString('ru')}$`}</p>
          <p className={classes.percent}>{`${tvlChangePercentage}%`}</p>
        </div>
        <div className={classes.accountsBlock}>
          <div className={classes.usersIco}>{userIcon}</div>
          <p className={classes.usersNum}>{users.toLocaleString('ru')}</p>
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
        {description}
      </div>
    </section>
  )
}
