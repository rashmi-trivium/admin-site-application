import React from "react";

const Layout = () => {
  return (
    <div>
      <form>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            UserName
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Layout;
