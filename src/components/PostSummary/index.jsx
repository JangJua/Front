import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHeartFill } from "react-icons/all";
import * as S from './style';

const PostSummary = ({ post, username }) => {
  const { title, content, thumbnail, updated_at, heart, tags } = post;
  const link = `/@${username}/${title}`;

  return (
    <S.UserPostCard>
      {thumbnail && (
      <S.PostImageWrapper>
        <Link to={link}>
          <img src={thumbnail} alt={`${title}_thumbnail`} />
        </Link>
      </S.PostImageWrapper>
      )}
      <h2>
        <Link to={link}>
          {' '}
          {title}
          {' '}
        </Link>
      </h2>
      <S.PostContent>
        {' '}
        {content}
        {' '}
      </S.PostContent>
      <S.TagsWrapper>
        {tags && tags.map((tag) => (
          <S.Tag to={`/tags/${tag}`} key={tag.toString()}>
            {tag}
          </S.Tag>
        ))}
      </S.TagsWrapper>
      <S.PostSubInfo>
        <span> 2020년 8월 2일 </span>
        <span>
          <BsFillHeartFill />
          {heart}
        </span>
      </S.PostSubInfo>
    </S.UserPostCard>
  );
};

export default PostSummary;
