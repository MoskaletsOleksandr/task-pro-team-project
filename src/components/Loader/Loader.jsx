import { RotatingLines } from 'react-loader-spinner'
import {Container} from "./Loader.styled"

const Loader = () => {
  return (
    <Container>
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Container>
  );
};

export default Loader;
