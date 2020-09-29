/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOAD_POST_DETAIL_REQUEST } from "store/actions/postDetailAction";
import * as S from "./style";
import SeriesItem from "./SeriesItem";

const PostSeries = () => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const seriesList = useSelector(
    (state) => state.postDetailReducer.postInfo.series
  );
  const postTitle = useSelector(
    (state) => state.postDetailReducer.postInfo.title
  );
  useEffect(() => {
    dispatch({
      type: LOAD_POST_DETAIL_REQUEST,
    });
  }, []);
  const onChangeHidden = () => {
    setHidden(!hidden);
  };
  const id = useRef(0);
  const setId = (n) => {
    id.current = n;
  };

  useEffect(() => {
    if (seriesList) {
      setId(seriesList.posts.findIndex((post) => post.title === postTitle));
    }
  }, [seriesList]);
  // 시리즈에서 현재 포스트를 볼드체와 초록색으로 표시해주는 역할을 하는 active
  // 지금은 일단 임시로 포스트 타이틀이랑 시리즈 타이틀이랑 같은 조건으로 해놓음

  return (
    <>
      {seriesList && (
        <S.PostSeriesContainer>
          <S.PostSeriesh2>
            <Link to="/@exampleuser/series/exampleSeries">
              {seriesList.title}
            </Link>
          </S.PostSeriesh2>
          <S.StyledIoIosBookmark />
          {!hidden && (
            <S.SeriesList>
              {seriesList.posts.map((series, index) => (
                <SeriesItem
                  url={series.url.substring(21)}
                  title={series.title}
                  key={index}
                  active={series.title === postTitle}
                />
              ))}
            </S.SeriesList>
          )}
          <S.StyledPostSeriesBottom>
            <div onClick={onChangeHidden} className="hideButton">
              {!hidden ? (
                <S.StyledDropUp size="25" />
              ) : (
                <S.StyledDropDown size="25" />
              )}
              {!hidden ? "숨기기" : "목록 보기"}
            </div>
            <S.StyledIndexWrapper>
              <div className="series-number">
                {seriesList.posts.findIndex(
                  (post) => post.title === postTitle
                ) + 1}
                /
                {seriesList.posts.length}
              </div>
              <S.StyledButtonWrapper>
                <S.StyledButton
                  disabled={
                    seriesList.posts.findIndex(
                      (post) => post.title === postTitle
                    ) === 0
                  }
                >
                  {seriesList.posts.findIndex(
                    (post) => post.title === postTitle
                  ) === 0 ? (
                    <S.StyledLeftArrow />
                    ) : (
                      <S.ArrowButtonLink
                        to={
                        seriesList.posts[
                          seriesList.posts.findIndex(
                            (post) => post.title === postTitle
                          ) - 1
                        ].url
                      }
                      >
                        <S.StyledLeftArrow />
                      </S.ArrowButtonLink>
                    )}
                </S.StyledButton>
                <S.StyledButton
                  disabled={
                    seriesList.posts.findIndex(
                      (post) => post.title === postTitle
                    ) ===
                    seriesList.posts.length - 1
                  }
                >
                  {seriesList.posts.findIndex(
                    (post) => post.title === postTitle
                  ) ===
                  seriesList.posts.length - 1 ? (
                    <S.StyledRightArrow />
                    ) : (
                      <S.ArrowButtonLink
                        to={
                        seriesList.posts[
                          seriesList.posts.findIndex(
                            (post) => post.title === postTitle
                          ) + 1
                        ].url
                      }
                      >
                        <S.StyledRightArrow />
                      </S.ArrowButtonLink>
                    )}
                </S.StyledButton>
              </S.StyledButtonWrapper>
            </S.StyledIndexWrapper>
          </S.StyledPostSeriesBottom>
        </S.PostSeriesContainer>
      )}
    </>
  );
};

export default PostSeries;
