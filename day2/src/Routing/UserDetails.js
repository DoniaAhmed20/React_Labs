import { useParams } from "react-router-dom";

const UserDetails = (props) => {
  let { id } = useParams();
  //console.log(id);
  return (
    <aside class="profile-card">
      <header>
        <img
          src="https://github.com/DoniaAhmed20/React_Labs/assets/112786733/ee8486f9-1430-448e-9d47-deebf5e8bf7c"
          alt="..."
        />
      </header>

      <div class="profile-bio">
        <p className="mb-1">ID: {id}</p>
        <p className="mb-1">Name: Donia Ahmed</p>
        <p className="mb-0">Age: 23</p>
      </div>
    </aside>
  );
};

export default UserDetails;