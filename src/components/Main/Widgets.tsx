import styled from "styled-components";
import tw from "twin.macro";

import { SearchCircleIcon } from "@heroicons/react/outline";

import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <StyledWrapper>
      <StyledSearchBarWrapper>
        <StyledSearchCircleIcon />
        <StyledSearchInput type="text" placeholder="Search Twitter" />
      </StyledSearchBarWrapper>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="dev_test_id"
        options={{ height: 1000 }}
      />
    </StyledWrapper>
  );
};

export default Widgets;

const StyledWrapper = styled.div`
  ${tw`mt-2 px-2 col-span-2 hidden lg:block`}
`;

const StyledSearchBarWrapper = styled.div`
  ${tw`mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3`}
`;

const StyledSearchCircleIcon = styled(SearchCircleIcon)`
  ${tw`h-5 w-5 text-gray-400`}
`;

const StyledSearchInput = styled.input`
  ${tw`flex-1 bg-transparent outline-none`}
`;
