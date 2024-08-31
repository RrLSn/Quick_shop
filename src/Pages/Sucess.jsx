import { useNavigate } from "react-router-dom";

const Sucess = () => {
  const navigate = useNavigate();

  return (
    <div>
      Registration sucessfull
      <button onClick={() => navigate("/auth/login")}>Lohin</button>
    </div>
  );
};

export default Sucess;
