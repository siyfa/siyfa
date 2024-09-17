import { Wrapper } from "./style";
import "animate.css";
//
import Logo from "../../assets/images/sf.png";

export const Splash = () => {

  return (
    <Wrapper>
      <div className="animate__animated animate__zoomInDown">
        <div className="container">
          <img src={Logo} />
        </div>
      </div>
    </Wrapper>
  );
};
