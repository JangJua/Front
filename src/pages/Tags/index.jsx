import React from "react";
import qs from "qs";
import Trending from "components/Tags/TagsLayout/Trending";
import Alphabetical from "components/Tags/TagsLayout/Alphabetical";
import PropTypes from 'prop-types';
import * as S from "./style";

const Tags = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const sorting = query.sort;
  const trendingSelected = sorting === "trending" || !sorting;

  return (
    <main style={{ marginTop: "3rem" }}>
      <S.StyledTagPageDiv>
        <div className="tag_wrapper">
          <S.StyledLinkForTab
            to="/tags?sort=trending"
            selected={trendingSelected}
          >
            인기순
          </S.StyledLinkForTab>
          <S.StyledLinkForTab
            to="tags?sort=alphabetical"
            selected={!trendingSelected}
          >
            이름순
          </S.StyledLinkForTab>
          <S.SelectionTrans selected={trendingSelected} />
        </div>
      </S.StyledTagPageDiv>
      {trendingSelected ? <Trending /> : <Alphabetical />}
    </main>
  );
};
Tags.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired
};

export default Tags;
