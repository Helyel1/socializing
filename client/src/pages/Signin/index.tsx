import { EnvelopeSimple, LockSimple } from "phosphor-react";
import { Input } from "../../components/Input";
import "./styles.scss";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div className="container-signin">
      <div className="content">
        <div className="first-column">
          <h1>welcome back!</h1>
          <p>
            Use your information that you had logged in before, and enjoy our
            website.
          </p>
          <p>Check out what's new and give us your feedback.</p>
        </div>

        <div className="second-column">
          <h1>login</h1>
          <form action="">
            <div className="inputs">
              <section className="email-input">
                <EnvelopeSimple size={70} weight="bold" color="rgb(13, 59, 97)" />
                <Input type="email" placeholder="Type your e-mail" />
              </section>
              <section className="pass-input">
                <LockSimple size={70} weight="bold" color="rgb(13, 59, 97)" />
                <Input type="password" placeholder="Type your password" />
              </section>
            </div>
            <button>Sigin</button>
          </form>
          <div className="link">
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            <Link to="" className="forgot">Forgot my password</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
