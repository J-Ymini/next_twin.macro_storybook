import styled from "styled-components";
import tw from "twin.macro";

import TweetBox from "../TweetBox";

import { RefreshIcon } from "@heroicons/react/outline";

const Feed = () => {
  return (
    <StyledWrapper>
      <StyledRefreshWrapper>
        <StyledHomeText>Home</StyledHomeText>
        <StyledRefreshIcon />
      </StyledRefreshWrapper>
      <TweetBox />
    </StyledWrapper>
  );
};

export default Feed;

const StyledWrapper = styled.div`
  ${tw`col-span-7 border-r-[1px] border-l-[1px] lg:col-span-5 `}
`;

const StyledRefreshWrapper = styled.div`
  ${tw`flex items-center justify-between`}
`;

const StyledHomeText = styled.h1`
  ${tw`p-5 pb-0 text-xl font-bold`}
`;

const StyledRefreshIcon = styled(RefreshIcon)`
  ${tw`text-twitter mr-5 mt-5 h-8 w-8 cursor-pointer 
    hover:rotate-180 
    active:scale-125 transition-all duration-500`}
`;
