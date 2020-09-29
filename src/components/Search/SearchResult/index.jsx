/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import PostSummary from '../../PostSummary';

// style
import * as S from './style';

const SearchResult = ({ posts, totalCount }) => (
  <>
    <S.Layout>
      {(totalCount > 0) && (
        <S.CountWrapper>
          총
          {` `}
          <b>
            {totalCount}
            개
          </b>
          의 포스트를 찾았습니다.
        </S.CountWrapper>
      )}
      {totalCount === 0 && (
        <S.CountWrapper>검색결과가 없습니다.</S.CountWrapper>
      )}
      {posts && (
        posts.map((post, id) => (
          <PostSummary post={post} username={post.author} key={id} />
        ))
      )}
    </S.Layout>
  </>
);

SearchResult.propTypes = {
  posts: PropTypes.array,
  totalCount: PropTypes.number,
};

export default SearchResult;
