import BoxHeader from "./components/BoxHeader";
import Wrapper from "./components/Wrapper";
import { useTitleAndSubtitle } from "./helpers";

function App() {
  const { title, subtitle } = useTitleAndSubtitle();

  return (
    <Wrapper>
      <BoxHeader title={title} subtitle={subtitle} />
    </Wrapper>
  );
}

export default App;
