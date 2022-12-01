import React from "react";

const Filterbar = () => {
  return (
    <>
      <div className="columns">
        <div className="column is-3">
          <input
            className="input is-small"
            type="text"
            placeholder="search..."
          />
        </div>
        <div className="column is-3">
          <div className="select is-small">
            <select>
              <option defaultValue>Categories</option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-globe"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filterbar;
