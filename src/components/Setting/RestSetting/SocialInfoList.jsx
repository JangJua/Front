import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";
import PropTypes from 'prop-types';
import * as S from "./style";

const SocialInfoList = ({ socialInfo }) => (
  <S.SocialInfoUl>
    {socialInfo.email && (
    <li>
      <GrMail />
      <span>{socialInfo.email}</span>
    </li>
    )}
    {socialInfo.github && (
    <li>
      <AiFillGithub />
      <span>{socialInfo.github}</span>
    </li>
    )}
    {socialInfo.twitter && (
    <li>
      <AiOutlineTwitter />
      <span>{socialInfo.twitter}</span>
    </li>
    )}
    {socialInfo.facebook && (
    <li>
      <FaFacebookSquare />
      <span>{socialInfo.facebook}</span>
    </li>
    )}
    {socialInfo.homePage && (
    <li>
      <IoMdHome />
      <span>{socialInfo.homePage}</span>
    </li>
    )}
  </S.SocialInfoUl>
);
SocialInfoList.propTypes = {
  socialInfo: PropTypes.shape({
    email: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    homePage: PropTypes.string,
  }).isRequired
};

export default SocialInfoList;
