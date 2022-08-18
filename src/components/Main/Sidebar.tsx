import styled from "styled-components";
import tw from "twin.macro";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";

const Sidebar = (): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledMainIconImage src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg" />
      <ul>
        {iconsList?.map(({ id, text, Icon }) => (
          <StyledIconsItem key={id}>
            <Icon />
            <StyledIconsItemDescription>{text}</StyledIconsItemDescription>
          </StyledIconsItem>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default Sidebar;

const StyledWrapper = styled.div`
  ${tw`flex flex-col col-span-2 items-center px-4 md:items-start`}
`;

const StyledMainIconImage = styled.img`
  ${tw`w-10 h-10 m-3`}
`;

const StyledIconsItem = styled.li`
  ${tw`flex cursor-pointer items-center max-w-min space-x-2 px-4 py-3 rounded-full transition-all duration-200 text-base font-light lg:text-xl 
  hover:(bg-gray-100)`}

  svg {
    ${tw`h-6 w-6`}
  }
`;

const StyledIconsItemDescription = styled.p`
  ${tw`hidden md:inline-flex`}

  ${StyledIconsItem}:hover & {
    ${tw`text-twitter`}
  }
`;

const iconsList = [
  {
    id: 1,
    text: "home",
    Icon: HomeIcon,
  },
  {
    id: 2,
    text: "Explore",
    Icon: HashtagIcon,
  },
  {
    id: 3,
    text: "Notifications",
    Icon: BellIcon,
  },
  {
    id: 4,
    text: "Messages",
    Icon: MailIcon,
  },
  {
    id: 5,
    text: "Bookmarks",
    Icon: BookmarkIcon,
  },
  {
    id: 6,
    text: "Lists",
    Icon: CollectionIcon,
  },
  {
    id: 7,
    text: "More",
    Icon: DotsCircleHorizontalIcon,
  },
  {
    id: 8,
    text: "SignIn",
    Icon: UserIcon,
  },
];
