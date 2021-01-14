import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      className={s.navlink}
      activeClassName={s.activeNavlink}
      exact
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={s.navlink}
      activeClassName={s.activeNavlink}
      to="/movies"
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
