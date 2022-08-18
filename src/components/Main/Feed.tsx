import { useState } from "react";

import styled from "styled-components";
import tw from "twin.macro";

import TweetBox from "../TweetBox";
import TweetListItem from "../TweetListItem";

import { RefreshIcon } from "@heroicons/react/outline";
import { Tweet } from "types/typings";
import fetchTweets from "utils/fetchTweets";
import API_URLS from "src/api_config";
import toast, { Toaster } from "react-hot-toast";

interface FeedProps {
  tweets: Tweet[];
}

const Feed = ({ tweets: tweetsProp }: FeedProps) => {
  const [tweets, setTweets] = useState(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");

    const tweets = await fetchTweets(API_URLS.tweets);
    setTweets(tweets);

    toast.success("Feed Updated!", {
      id: refreshToast,
    });
  };

  return (
    <StyledWrapper>
      <Toaster />
      <StyledRefreshWrapper>
        <StyledHomeText>Home</StyledHomeText>
        <StyledRefreshIcon onClick={handleRefresh} />
      </StyledRefreshWrapper>
      <TweetBox />
      <ul>
        {tweets?.map((tweet) => {
          return <TweetListItem key={tweet._id} tweet={tweet} />;
        })}
      </ul>
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
