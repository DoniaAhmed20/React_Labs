import { NavLink } from "react-router-dom";
let Error = () => {
  return (
    <div class="d-flex align-items-center justify-content-center">
      <div class="text-center">
         <img class="error"
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/112786733/238977051-c1af3740-90ac-45be-b7bd-512fd6a2bc69.jpg"
            alt="error"
          />
          <br></br>
        <button type="button" class="btn btn-primary" id="error">
          <NavLink style={{ color: "white" }} to="/" exact>
            Go Home
          </NavLink>
        </button>
      </div>
    </div>
  );
};
export default Error;