import { FC, useState, createContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Tokens } from './components/Tokens'
import { Plug } from './components/Plug'
import { RouterPaths } from './enums/RouterPaths'
import classes from './App.module.css'

interface TokenContextValues {
  token: string
  setToken: (value: string) => void
  tokenTitle: string
  setTokenTitle: (value: string) => void
}

export const TokenContext = createContext<TokenContextValues>({} as TokenContextValues)

export const App: FC = () => {
  const [token, setToken] = useState('')
  const [tokenTitle, setTokenTitle] = useState('')

  return (
    <TokenContext.Provider value={{ token, setToken, tokenTitle, setTokenTitle }}>
      <section className={classes.app}>
        <BrowserRouter basename="/Tokens/">
          <Menu />
          <Routes>
            <Route index element={<Tokens />} />
            <Route path={RouterPaths.SEARCH} element={<Plug title="Поиск"></Plug>} />
            <Route path={token} element={<Plug title={tokenTitle}></Plug>} />
          </Routes>
        </BrowserRouter>
      </section>
    </TokenContext.Provider>
  )
}
