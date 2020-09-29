import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import qs from 'qs';
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/Search/SearchBar";
import SearchResult from "../../components/Search/SearchResult";
import * as S from './style';
import { LOAD_SEARCH_RESULT_REQUEST } from '../../store/actions/searchAction';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const Search = ({ location, history }) => {
  const dispatch = useDispatch();
  let posts = useSelector((state) => state.searchReducer.posts);
  const hasMorePosts = useSelector((state) => state.searchReducer.hasMorePosts);
  const totalCount = useSelector((state) => state.searchReducer.totalCount);
  const searchInputRef = useRef(null);
  let query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  let { username, q } = query;

  let debounceTimer;
  const onInputChange = useCallback((e) => {
    e.persist();
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      let searchQuery = `/search?q=${e.target.value}`;
      if (username) {
        searchQuery += `&username=${username}`;
      }
      history.push(searchQuery);
      dispatch({ type: LOAD_SEARCH_RESULT_REQUEST, username, searchInput: e.target.value });
    }, 500);
  }, []);

  useEffect(() => {
    query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    username = query.username;
    q = query.q;
    posts = [];
    if (q) {
      searchInputRef.current.value = q;
      dispatch({ type: LOAD_SEARCH_RESULT_REQUEST, username, searchInput: q });
    }
  }, []);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_SEARCH_RESULT_REQUEST);

  return (
    <S.Wrapper>
      <SearchBar username={username} onChange={onInputChange} searchInputRef={searchInputRef} />
      <SearchResult posts={posts} totalCount={totalCount} />
    </S.Wrapper>
  );
};

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Search;
