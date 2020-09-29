import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as S from "./style";

const TagItem = ({ Tag }) => {
  const { name } = Tag;
  return (
    <S.StyledTagItem>
      <Link to={`/tags/${name}`}>
        #
        {name}
      </Link>
    </S.StyledTagItem>
  );
};

TagItem.propTypes = {
  Tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default memo(TagItem);
