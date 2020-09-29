import React from "react";
import { Link } from "react-router-dom";
import HomeAsideNotice from "./HomeAsideNotice";
import HomeAsideTags from "./HomeAsideTags";
import * as S from "./style";

const HomeAside = () => (
  <>
    <S.StyledAside>
      <div>
        <HomeAsideNotice />
        <HomeAsideTags />
      </div>
      <S.StyledAsideBottom>
        <S.StyledAsideLinks className="links">
          <a href="mailto:example@example.com">문의</a>
          <a href="/"> · Slack 채널</a>
          <Link to="/"> · 서비스 정책</Link>
        </S.StyledAsideLinks>
        <S.StyledCopyright className="copyright">
          © 2020 · clonelog
        </S.StyledCopyright>
      </S.StyledAsideBottom>
    </S.StyledAside>
  </>
);

export default HomeAside;
