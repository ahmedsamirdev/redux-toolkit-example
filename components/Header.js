import classes from './Header.module.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { authActions } from '../store/auth';
import Link from "next/link"
const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const logoutHandler = (event) => {
    event.preventDefault()
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&
        <nav>
          <ul>
            <li>
              <Link href='/'>My Products</Link>
            </li>
            <li>
              <Link href='/'>My Sales</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>}
    </header>
  );
};

export default Header;
