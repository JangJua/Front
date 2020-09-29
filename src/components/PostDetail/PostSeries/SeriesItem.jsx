import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";

const SeriesItem = ({ url, title, active }) => (
  <S.SeriesItemli>
    <S.SeriesItemLink to={url} active={active}>
      {title}
    </S.SeriesItemLink>
  </S.SeriesItemli>
);

SeriesItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
SeriesItem.defaultProps = {
  active: false,
};
export default SeriesItem;
