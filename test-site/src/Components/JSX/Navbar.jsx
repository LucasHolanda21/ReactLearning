import './../CSS/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Navbar</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: '#eee',
                    backgroundColor: '#009725',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;