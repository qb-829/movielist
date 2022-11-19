
import { Link } from 'react-router-dom';

export default function Nav() {

  return <>
     <div>
        <nav>
          <Link to='/' > Home </Link> &nbsp;
          <Link to='/about' > About </Link> &nbsp;
          <Link to='/favorite' > Favorite </Link>
        </nav>
      </div>
  </>
  
}
