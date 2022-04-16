import { FC } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Tokens } from './components/Tokens'
import { RouterPaths } from './enums/RouterPaths'
import { SearchPlug } from './components/SearchPlug'
import { TokenPlug } from './components/TokenPlug'
import classes from './App.module.css'

export const App: FC = () => {
  return (
    <section className={classes.app}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path={RouterPaths.TOKENS} element={<Tokens />} />
          <Route path={RouterPaths.SEARCH} element={<SearchPlug />} />
          <Route path="/token/:tokenId" element={<TokenPlug />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}
