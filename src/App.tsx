import { useAppSelector } from "./app/hooks";
import BoxHeader from "./components/BoxHeader";
import MemberForm from "./components/MemberForm";
import MembersList from "./components/MembersList";
import Wrapper from "./components/Wrapper";
import { useTitleAndSubtitle } from "./helpers";

function App() {
  const { currentScreen, members } = useAppSelector((state) => state.member);

  const { title, subtitle } = useTitleAndSubtitle();

  let screenComponent: JSX.Element;

  if (currentScreen === "list") {
    screenComponent = <MembersList />;
  } else {
    screenComponent = <MemberForm />;
  }

  console.log(members);

  return (
    <Wrapper>
      <BoxHeader title={title} subtitle={subtitle} />
      {screenComponent}
    </Wrapper>
  );
}
export default App;
