import { useNavigate } from "react-router-dom";

const Sucess = () => {
  const navigate = useNavigate();

  return (
    <div>
      Registration sucessful
      <button onClick={() => navigate("/auth/login")}>Login</button>
    </div>
  );
};

export default Sucess;
