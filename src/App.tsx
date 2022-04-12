import { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Tokens } from './components/Tokens'
import { Search } from './components/Search'
import { RouterPaths } from './enums/RouterPaths'
import classes from './App.module.css'

export const App: FC = () => {
  return (
    <section className={classes.app}>
      <HashRouter>
        <Menu />
        <Routes>
          <Route index element={<Tokens />} />
          <Route path={RouterPaths.SEARCH} element={<Search />} />
        </Routes>
      </HashRouter>
    </section>
  )
}
