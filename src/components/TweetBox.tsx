import { useState } from "react";

import styled from "styled-components";
import tw from "twin.macro";

import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import React from "react";

const TweetBox = () => {
  const [value, setValue] = useState<string>("");

  const handleInputEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <StyledWrapper>
      <StyledProfileImage src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
      <StyledTweetBoxWrapper>
        <StyledTweetBoxForm>
          <StyledTweetInput
            type="text"
            placeholder="What's Happening?"
            onChange={handleInputEnter}
          />
          <StyledTweetBoxContentsWrapper>
            <StyledTweetBoxIconsList>
              {tweetBoxIconsList.map((Icon, index) => (
                <StyledTweetBoxIconsListItem key={index}>
                  <Icon />
                </StyledTweetBoxIconsListItem>
              ))}
            </StyledTweetBoxIconsList>
            <StyledTweetButton disabled={!value}>Tweet</StyledTweetButton>
          </StyledTweetBoxContentsWrapper>
        </StyledTweetBoxForm>
      </StyledTweetBoxWrapper>
    </StyledWrapper>
  );
};

export default TweetBox;

const StyledWrapper = styled.div`
  ${tw`flex space-x-2 p-5 `}
`;

const StyledProfileImage = styled.img`
  ${tw`mt-6 h-14 w-14 rounded-full object-cover`}
`;

const StyledTweetBoxWrapper = styled.div`
  ${tw`flex flex-1 items-center pl-2`}
`;

const StyledTweetBoxForm = styled.form`
  ${tw`flex flex-1 flex-col`}
`;

const StyledTweetInput = styled.input`
  ${tw`h-24 w-full text-xl outline-none`}
`;

const StyledTweetBoxContentsWrapper = styled.div`
  ${tw`flex items-center`}
`;

const StyledTweetBoxIconsList = styled.ul`
  ${tw`flex space-x-2 text-twitter flex-1`}
`;

const StyledTweetBoxIconsListItem = styled.li`
  ${tw`cursor-pointer transition-transform duration-150 ease-out hover:scale-150 
  active:scale-125`}

  & > svg {
    ${tw`h-5 w-5`}
  }
`;

const StyledTweetButton = styled.button`
  ${tw`bg-twitter text-white font-bold px-5 py-2 rounded-full transition-all duration-300
    disabled:(cursor-not-allowed bg-gray-200)
  `}
`;

const tweetBoxIconsList = [
  PhotographIcon,
  SearchCircleIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
];
