import { useAppSelector } from "./app/hooks";
import BoxHeader from "./components/BoxHeader";
import Wrapper from "./components/Wrapper";

function App() {
  const { currentScreen } = useAppSelector((state) => state.member);

  return (
    <Wrapper wrapperAction="add" wrapperActionHandler={() => {}}>
      <BoxHeader title="Team Members" subtitle="subtitle" />
    </Wrapper>
  );
}

export default App;
