import { EnvelopeSimple, LockSimple } from "phosphor-react";
import "./styles.scss";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="container-signup">
      <div className="content">
        <div className="first-column">
          <h1>Create an account</h1>
          <form action="">
            <div className="inputs">
              <section className="email-input">
                <EnvelopeSimple
                  size={70}
                  weight="bold"
                  color="rgb(13, 59, 97)"
                />
                <Input type="email" placeholder="Type your e-mail" />
              </section>
              <section className="email-input">
                <EnvelopeSimple
                  size={70}
                  weight="bold"
                  color="rgb(13, 59, 97)"
                />
                <Input type="email" placeholder="confirm your e-mail" />
              </section>
              <section className="pass-input">
                <LockSimple size={70} weight="bold" color="rgb(13, 59, 97)" />
                <Input type="password" placeholder="Type your password" />
              </section>
            </div>
            <button>Sigin</button>
          </form>
          <p className="have-acc">Already have an account? <Link to="/">Signin</Link></p>
        </div>
        <div className="second-column">
          <h1>welcome</h1>
          <p>
            Enter your personal information to take advantage of everything our
            site has to offer.
          </p>
        </div>
      </div>
    </div>
  );
};
