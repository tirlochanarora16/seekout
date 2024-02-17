import { useAppSelector } from "./app/hooks";

// setting title and subtitle based on the current screen
export const useTitleAndSubtitle = () => {
  const { currentScreen, members } = useAppSelector((state) => state.member);

  let title: string = "";
  let subtitle: string = "";

  if (currentScreen === "list") {
    title = "Team Members";
    subtitle = `You have ${members.length} team members.`;
  } else if (currentScreen === "add") {
    title = "Add a team member";
    subtitle = "Set email, location and role.";
  } else {
    title = "Edit team member";
    subtitle = "Edit contact info, location and role";
  }

  return {
    title,
    subtitle,
  };
};
