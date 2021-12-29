import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section className="main-content columns is-fullheight">
          <Sidebar />
          <div className="container column is-10">
            <div className="section">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {routes.map((route, idx) => {
                    return (
                      route.component && (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          element={<route.component />}
                        />
                      )
                    );
                  })}
                </Routes>
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}
export default App;
