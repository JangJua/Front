import React, { useState, useCallback } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";
import PropTypes from 'prop-types';
import * as S from "./style";

import SquareButton from "../../Common/SquareButton";

const SocialInfo = ({ onSubmit, socialInfo }) => {
  const [email, setEmail] = useState(socialInfo.email);
  const [github, setGithub] = useState(socialInfo.github);
  const [twitter, setTwitter] = useState(socialInfo.twitter);
  const [facebook, setFacebook] = useState(socialInfo.facebook);
  const [homePage, setHomePage] = useState(socialInfo.homePage);
  const onChange = useCallback((e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "github":
        setGithub(e.target.value);
        break;
      case "twitter":
        setTwitter(e.target.value);
        break;
      case "facebook":
        setFacebook(e.target.value);
        break;
      case "homePage":
        setHomePage(e.target.value);
        break;
      default:
    }
  }, []);

  return (
    <S.SocialInfoForm onSubmit={onSubmit}>
      <S.InfoList>
        <li>
          <GrMail />
          <S.InfoInput
            type="text"
            name="email"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={onChange}
          />
        </li>
        <li>
          <AiFillGithub />
          <S.InfoInput
            type="text"
            name="github"
            placeholder="Github 계정을 입력하세요."
            value={github}
            onChange={onChange}
          />
        </li>
        <li>
          <AiOutlineTwitter />
          <S.InfoInput
            type="text"
            name="twitter"
            placeholder="Twitter 계정을 입력하세요."
            value={twitter}
            onChange={onChange}
          />
        </li>
        <li>
          <FaFacebookSquare />
          <S.FacebookInputDiv>
            <span>https://www.facebook.com/</span>
            <input
              type="text"
              name="facebook"
              value={facebook}
              onChange={onChange}
            />
          </S.FacebookInputDiv>
        </li>
        <li>
          <IoMdHome />
          <S.InfoInput
            type="text"
            name="homePage"
            placeholder="홈페이지 주소를 입력하세요."
            value={homePage}
            onChange={onChange}
          />
        </li>
      </S.InfoList>
      <div className="button-wrapper">
        <SquareButton type="submit">저장</SquareButton>
      </div>
    </S.SocialInfoForm>
  );
};
SocialInfo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  socialInfo: PropTypes.shape({
    email: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    homePage: PropTypes.string,
  }).isRequired
};
export default SocialInfo;
