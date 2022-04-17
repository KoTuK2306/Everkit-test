import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../../layouts/MainLayout'
import { tokens } from '../../tokens'
import classes from './TokenPlug.module.css'

export const TokenPlug: FC = () => {
  const [tokenName, setTokenName] = useState('')
  const { tokenId } = useParams()

  useEffect(() => {
    tokens.forEach(({ id, name }) => {
      if (tokenId === String(id)) {
        setTokenName(name)
      }
    })
  }, [tokenId])

  return (
    <MainLayout className={classes.plugWrapper}>
      <h1 className={classes.title}>{tokenName}</h1>
      <p className={classes.text}>Реализация контента здесь не предусматривается.</p>
    </MainLayout>
  )
}
