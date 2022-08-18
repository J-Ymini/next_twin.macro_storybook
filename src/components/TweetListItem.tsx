import React, { useState, useEffect } from "react";
import { Comment, Tweet } from "types/typings";
import TimeAgo from "react-timeago";
import tw from "twin.macro";
import styled from "styled-components";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import fetchComments from "utils/fetchComments";

interface TweetListItemProps {
  tweet: Tweet;
}

const TweetListItem = ({
  tweet: { text, username, profileImg, image, _createdAt, _id },
}: TweetListItemProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(_id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  console.log(comments);

  return (
    <StyledWrapper>
      <StyledProfile>
        <StyledProfileImage src={profileImg} alt="profile image" />
        <div>
          <StyledWriterInfo>
            <p>{username}</p>
            <p>@{username.replace(/\s+/g, "").toLowerCase()}</p>
            <StyledTimeAgo date={_createdAt} />
          </StyledWriterInfo>
          <p tw="pt-1">{text}</p>
          {image && <StyledTweetImag alt="tweet image" src={image} />}
        </div>
      </StyledProfile>
      <StyledIconListContainer>
        <StyledIcon>
          <ChatAlt2Icon />
          <p>{comments.length}</p>
        </StyledIcon>
        <StyledIcon>
          <SwitchHorizontalIcon />
        </StyledIcon>
        <StyledIcon>
          <HeartIcon />
        </StyledIcon>
        <StyledIcon>
          <UploadIcon />
        </StyledIcon>
      </StyledIconListContainer>
      {comments?.length > 0 && (
        <div tw="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t-[1px] border-gray-100 p-5">
          {comments.map(
            ({ _id, profileImg, username, _createdAt, comment }) => (
              <div key={_id} tw="relative flex space-x-2">
                <hr tw="absolute left-5 top-8 h-8 border-l-[1px] border-r-[1px] border-twitter/30"></hr>
                <img src={profileImg} tw="h-7 w-7 rounded-full object-cover" />
                <div>
                  <div tw="flex items-center space-x-1">
                    <p tw="mr-1 font-bold">{username}</p>
                    <p tw="hidden text-lg text-gray-500 lg:inline">
                      @{username.replace(/\s+/g, "").toLowerCase()}
                    </p>
                    <TimeAgo tw="text-sm text-gray-500" date={_createdAt} />
                  </div>
                  <p>{comment}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </StyledWrapper>
  );
};

export default TweetListItem;

const StyledWrapper = styled.li`
  ${tw`flex flex-col space-x-3 border-t-[1px] p-5 border-gray-100`}
`;

const StyledProfile = styled.div`
  ${tw`flex space-x-2`}
`;

const StyledProfileImage = styled.img`
  ${tw`h-10 w-10 rounded-full object-cover`}
`;

const StyledWriterInfo = styled.div`
  ${tw`flex items-center space-x-1`}

  & > p {
    &:first-child {
      ${tw`mr-1 font-bold`}
    }

    &:last-child {
      ${tw`hidden text-sm text-gray-500 sm:inline`}
    }
  }
`;

const StyledTimeAgo = styled(TimeAgo)`
  ${tw`text-sm text-gray-500`}
`;

const StyledTweetImag = styled.img`
  ${tw`m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-xl`}
`;

const StyledIconListContainer = styled.div`
  ${tw`mt-5 flex justify-between`}
`;

const StyledIcon = styled.div`
  ${tw`flex cursor-pointer items-center space-x-3 text-gray-400`}

  & > svg {
    ${tw`h-5 w-5`}
  }
`;
