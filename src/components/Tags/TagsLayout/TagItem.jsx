import React from "react";
import PropTypes from 'prop-types';
import * as S from "./style";

const TagItem = ({ Tag }) => {
  const { name, description, count } = Tag;
  return (
    <S.TagItemWrapper description={description}>
      <div>
        <S.TagItemLink to={`/tags/${name}`}>{name}</S.TagItemLink>
        <p>{description}</p>
      </div>
      <div className="count">
        총
        {count}
        개의 포스트
      </div>
    </S.TagItemWrapper>
  );
};

TagItem.propTypes = {
  Tag: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    count: PropTypes.number,
  }).isRequired
};

export default TagItem;
