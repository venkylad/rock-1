const ListCard = ({ user }) => {
  return (
    <div class="card col-12 mb-3" style={{ width: "100%" }}>
      <div class="card-body">
        <h4 class="card-title">
          <strong>
            {user?.firstName} {user?.lastName}
          </strong>
        </h4>
        <p class="card-text">
          <strong>Email</strong> : {user?.email}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Gender</strong> : {user?.gender}
        </li>
        <li class="list-group-item">
          <strong>Age</strong> : {user?.age}
        </li>
        <li class="list-group-item">
          <strong>Martial Status</strong> : {user?.married}
        </li>
        <li class="list-group-item">
          <strong>Highest Education</strong> :{" "}
          {user?.bTech || user?.inter || user?.school}
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
