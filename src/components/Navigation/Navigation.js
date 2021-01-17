import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      className={s.navlink}
      activeClassName={s.activeNavlink}
      exact
      to="/goit-react-hw-04-movies"
    >
      Home
    </NavLink>
    <NavLink
      className={s.navlink}
      activeClassName={s.activeNavlink}
      to="/goit-react-hw-04-movies/movies"
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
