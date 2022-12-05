const Header = () => {
  return (
    <>
      <nav
        className="navbar has-background-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            <h1>Inventory</h1>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="#" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href="#" className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
