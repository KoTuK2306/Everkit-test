import { FC } from 'react'
import { Menu } from './components/Menu'
import { Tokens } from './components/Tokens'
import { Search } from './components/Search'
import { HashRouter, Routes, Route } from 'react-router-dom'
import classes from './App.module.css'

export const App: FC = () => {
  return (
    <section className={classes.app}>
      <HashRouter>
        <Menu />
        <Routes>
          <Route index element={<Tokens />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </HashRouter>
    </section>
  )
}
