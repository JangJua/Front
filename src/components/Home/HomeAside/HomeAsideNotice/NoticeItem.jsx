/* eslint-disable camelcase */
import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as S from "./style";

const NoticeItem = ({ notice, className }) => {
  const { title, updated_at, author } = notice;
  const date = updated_at.substring(0, 10).split("-");
  return (
    <li className={className}>
      <S.StyledListh5>
        <Link to={`/@${author}/${title}`}>{title}</Link>
      </S.StyledListh5>
      <S.StyledDate className="date">{`${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.StyledDate>
    </li>
  );
};

NoticeItem.propTypes = {
  notice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
NoticeItem.defaultProps = {
  className: null,
};

export default memo(NoticeItem);
