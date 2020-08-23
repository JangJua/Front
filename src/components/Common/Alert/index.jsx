import React, { memo, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

// action
import {
  LOCAL_REQUEST_CLEAR_ALERT,
  LOCAL_CLEAR_ALERT,
} from "store/actions/commonAction";

// style
import * as S from "./style";

const Alert = ({ description, id, backgroundColor }) => {
  const dispatch = useDispatch();

  // 닫기 버튼 클릭
  const clickCloseBtn = useCallback(() => {
    dispatch({
      type: LOCAL_CLEAR_ALERT,
      data: id,
    });
  }, [dispatch, id]);

  // 알림창 자동 삭제
  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch({
        type: LOCAL_REQUEST_CLEAR_ALERT,
      });
    }, 0);
    return () => {
      clearTimeout(interval);
    };
  }, [dispatch]);

  return (
    <>
      <S.Layout>
        <S.Conatainer backgroundColor={backgroundColor}>
          <S.AlertText>{description}</S.AlertText>
          <S.CloseBtn onClick={clickCloseBtn}>X</S.CloseBtn>
          <S.ProgressBar></S.ProgressBar>
        </S.Conatainer>
      </S.Layout>
    </>
  );
};

export default memo(Alert);
