import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import "./styles.scss";

export const ForgotPassword = () => {
  return (
    <div className="container-fgtp">
      <div className="content">
        <h1>Forgot my password</h1>
        <p>
          To reset your password, enter your email registered in your account
          and we will send you the recovery code
        </p>

        <form action="">
          <Input placeholder="Enter your email to reset password" type="email" />
          <button>Send</button>
        </form>
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};
