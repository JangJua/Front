/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALPHABET_TAGS_LOAD_REQUEST } from "store/actions/postAction";
import { useInfiniteScroll } from "hooks";
import * as S from "./style";
import TagItem from "./TagItem";
import TagsFallBackLayout from "../TagsFallBackLayout";

const Alphabetical = () => {
  const dispatch = useDispatch();
  const alphabetTags = useSelector((state) => state.postReducer.alphabetTags);
  useEffect(() => {
    dispatch({
      type: ALPHABET_TAGS_LOAD_REQUEST,
    });
  }, []);

  // fall back 출력 여부
  const showTagsFallback = useSelector(
    (state) => state.postReducer.showTagsFallback
  );
  // 인피니트 스크롤링 계속 해도 되는지 판단
  const hasMoreTags = useSelector(
    (state) => state.postReducer.hasMoreAlphabetTags
  );
  useInfiniteScroll(
    alphabetTags,
    hasMoreTags,
    0.75,
    ALPHABET_TAGS_LOAD_REQUEST
  );

  return (
    <>
      <S.StyledTagSection>
        {alphabetTags.map((Tag, id) => (
          <TagItem Tag={Tag} key={id} />
        ))}
      </S.StyledTagSection>
      {showTagsFallback || <TagsFallBackLayout />}
    </>
  );
};

export default Alphabetical;
