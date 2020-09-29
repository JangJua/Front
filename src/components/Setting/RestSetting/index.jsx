/* eslint-disable no-nested-ternary */
import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import SocialInfo from "./SocialInfoInput";
import SocialInfoList from "./SocialInfoList";
import SquareButton from "../../Common/SquareButton";
import UnderlineButton from "../../Common/UnderlineButton";
import {
  loadUserSettingRequest,
  submitNotifySettingRequest,
  submitSocialSettingRequest,
  submitTitleSettingRequest,
} from "../../../store/actions/settingAction";

const RestSetting = () => {
  const dispatch = useDispatch();
  const [titleSaved, setTitleSaved] = useState(true);
  const [socialInfoSaved, setSocialInfoSaved] = useState(true);
  const fakeState = useRef(true);
  const fakeState2 = useRef(false);
  const velogTitle = useSelector((state) => state.settingReducer.velogTitle);
  const { email, github, twitter, facebook, homePage } = useSelector(
    (state) => state.settingReducer.socialInfo
  );
  const userEmail = useSelector((state) => state.settingReducer.userEmail);
  const commentNotification = useSelector(
    (state) => state.settingReducer.commentNotification
  );
  const updateNotification = useSelector(
    (state) => state.settingReducer.updateNotification
  );

  const onTitleModClick = useCallback(() => {
    setTitleSaved(false);
  });
  const onTitleSumbit = useCallback((e) => {
    e.preventDefault();
    dispatch(
      submitTitleSettingRequest({
        velogTitle: e.target.children[0].value,
      })
    );
    setTitleSaved(true);
  });
  const onAddClick = useCallback(() => {
    setSocialInfoSaved(false);
  }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(
      submitSocialSettingRequest({
        socialInfo: {
          email: e.target.children[0].children[0].children[1].value,
          github: e.target.children[0].children[1].children[1].value,
          twitter: e.target.children[0].children[2].children[1].value,
          facebook:
            e.target.children[0].children[3].children[1].children[1].value,
          homePage: e.target.children[0].children[4].children[1].value,
        },
      })
    );
    setSocialInfoSaved(true);
    // 서버에 데이터 갱신하는 것 추가 필요.
  }, []);
  const onCommentToggleClick = useCallback(() => {
    // dispatch(
    //   submitNotifySettingRequest({
    //     commentNotification: !commentNotification,
    //     updateNotification,
    //   })
    // );
    console.log(fakeState);
    fakeState.current = !fakeState.current;
  }, []);
  const onUpdateToggleClick = useCallback(() => {
    // dispatch(
    //   submitNotifySettingRequest({
    //     commentNotification,
    //     updateNotification: !updateNotification,
    //   })
    // );
    console.log(fakeState2);
    fakeState2.current = !fakeState2.current;
  }, []);

  useEffect(() => {
    dispatch(loadUserSettingRequest("exampleUser"));
  }, [dispatch]);

  return (
    <S.RestSettingSection>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>벨로그 제목</h3>
          </div>
          <div className="block-for-mobile">
            {titleSaved ? (
              <>
                <div className="contents">{velogTitle}</div>
                <div className="edit-wrapper">
                  <UnderlineButton onClick={onTitleModClick}>
                    수정
                  </UnderlineButton>
                </div>
              </>
            ) : (
              <div className="contents">
                <S.TitleForm onSubmit={onTitleSumbit}>
                  <S.TitleInput
                    placeholder="벨로그 제목"
                    defaultValue={velogTitle}
                    // onChange={onVelogTitleChange}
                  />
                  <SquareButton type="submit">저장</SquareButton>
                </S.TitleForm>
              </div>
            )}
          </div>
        </div>
        <div className="description">
          개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>소셜 정보</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">
              {socialInfoSaved ? (
                !email && !github && !twitter && !facebook && !homePage ? (
                  <UnderlineButton onClick={onAddClick}>
                    정보 추가
                  </UnderlineButton>
                ) : (
                  <>
                    <SocialInfoList
                      socialInfo={{
                        email,
                        github,
                        twitter,
                        facebook,
                        homePage,
                      }}
                    />
                  </>
                )
              ) : (
                <SocialInfo
                  onSubmit={onSubmit}
                  socialInfo={{ email, github, twitter, facebook, homePage }}
                />
              )}
            </div>
            {socialInfoSaved &&
              (email || github || twitter || facebook || homePage) && (
                <div className="edit-wrapper">
                  <UnderlineButton onClick={onAddClick}>수정</UnderlineButton>
                </div>
              )}
          </div>
        </div>
        <div className="description">
          포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>이메일 주소</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">{userEmail}</div>
          </div>
        </div>
        <div className="description">
          회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>이메일 수신 설정</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">
              <S.SocialInfoUl>
                <li>
                  <span style={{ width: "14rem" }}>댓글 알림</span>
                  {fakeState.current ? (
                    <S.ToggleDiv color="teal" onClick={onCommentToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(1.375rem)",
                          boxShadow: "rgba(0, 0, 0, 0.1) -2px 0px 4px",
                        }}
                      />
                    </S.ToggleDiv>
                  ) : (
                    <S.ToggleDiv color="gray" onClick={onCommentToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(0rem)",
                          boxShadow: "rgba(0, 0, 0, 0.05) 2px 0px 4px",
                        }}
                      />
                    </S.ToggleDiv>
                  )}
                </li>
                <li style={{ marginTop: "0.5rem" }}>
                  <span style={{ width: "14rem" }}>벨로그 업데이트 소식</span>
                  {fakeState2.current ? (
                    <S.ToggleDiv color="teal" onClick={onUpdateToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(1.375rem)",
                          boxShadow: "rgba(0, 0, 0, 0.1) -2px 0px 4px",
                        }}
                      />
                    </S.ToggleDiv>
                  ) : (
                    <S.ToggleDiv color="gray" onClick={onUpdateToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(0rem)",
                          boxShadow: "rgba(0, 0, 0, 0.05) 2px 0px 4px",
                        }}
                      />
                    </S.ToggleDiv>
                  )}
                </li>
              </S.SocialInfoUl>
            </div>
          </div>
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>회원 탈퇴</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">
              <SquareButton color="red">회원 탈퇴</SquareButton>
            </div>
          </div>
        </div>
        <div className="description">
          탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
        </div>
      </S.SettingItem>
    </S.RestSettingSection>
  );
};

export default RestSetting;
