import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeThumbnail } from "store/actions/writeAction";
import { uploadThumbnailRequest } from "store/actions/writeAction";
import * as S from "./style";
import SquareButton from "../../Common/SquareButton";
import UnderlineButton from "../../Common/UnderlineButton";
import useUpload from "../../../hooks/useUpload";
import {
  loadUserSettingRequest,
  submitMainSettingRequest,
} from "../../../store/actions/settingAction";

const MainSetting = () => {
  const dispatch = useDispatch();

  const [profileSaved, setProfileSaved] = useState(true);
  const thumbnail = useSelector((store) => store.write.thumbnail);
  const [image, setImage] = useUpload();
  const onModButtonClick = useCallback(() => {
    setProfileSaved(false);
  }, []);
  const name = useSelector((state) => state.settingReducer.username);
  const shortBio = useSelector((state) => state.settingReducer.shortBio);
  const clickRemoveThumbnail = useCallback(() => {
    dispatch(removeThumbnail());
  }, [dispatch]);
  const onProfileSubmit = useCallback((e) => {
    dispatch(
      submitMainSettingRequest({
        username: e.target.children[0].value,
        shortBio: e.target.children[1].value,
      })
    );
    setProfileSaved(true);
  }, []);
  useEffect(() => {
    if (!image) return;
    dispatch(uploadThumbnailRequest(image));
  }, [dispatch, image]);
  useEffect(() => {
    dispatch(loadUserSettingRequest("exampleUser"));
  }, [dispatch]);
  return (
    <S.MainSettingSection>
      <div className="thumbnail-area">
        <img src={thumbnail} alt="프로필 사진" />
        <SquareButton color="teal" onClick={setImage}>
          이미지 업로드
        </SquareButton>
        <SquareButton color="transparent" onClick={clickRemoveThumbnail}>
          이미지 제거
        </SquareButton>
      </div>
      {profileSaved ? (
        <div className="info-area">
          <h2>{name}</h2>
          <p>{shortBio}</p>
          <UnderlineButton onClick={onModButtonClick}>수정</UnderlineButton>
        </div>
      ) : (
        <div className="info-area">
          <S.ProfileForm onSubmit={onProfileSubmit}>
            <input
              type="text"
              className="display-name"
              name="displayName"
              placeholder="이름"
              defaultValue={name}
            />
            <input
              type="text"
              className="shortBio"
              name="shortBio"
              placeholder="한 줄 소개"
              defaultValue={shortBio}
            />
            <div className="button-wrapper">
              <SquareButton type="submit">저장</SquareButton>
            </div>
          </S.ProfileForm>
        </div>
      )}
    </S.MainSettingSection>
  );
};

export default MainSetting;
