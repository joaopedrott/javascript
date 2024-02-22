import { Link } from 'react-router-dom';

const Menu = ()=> {
    return (<>
        
            <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>
                    <span className='ml-1 text-light'>DIO Study</span>
                </Link>
                
            </div>
            </nav></>
    )
}

export default Menu;