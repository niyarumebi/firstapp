import FetchHelper from "../helpers/FetchHelper";

const api = {
  fetchApi: api => FetchHelper.fetchJsonGet(api),
  fetchPhotos: () => FetchHelper.fetchJsonGet('/photos'),
  fetchRandomPhotos: () => FetchHelper.fetchJsonGet('/photos/random/?featured&count=30'),

  fetchSearchResult: keyword => FetchHelper.fetchJsonGet(`/search/photos?=page=1&query=${keyword}`),
  // fetchRelatedCollections: id => FetchHelper.fetchJsonGet(`/collections/${id}/related`),
  fetchRelatedPhotos: keyword => FetchHelper.fetchJsonGet(`/search/photos?=page=1&query=${keyword}`),


  /**
   * user api
   */

  //이름은 최대한 서버단ㅇ서 설명해주는거 그대로 써주는게좋음
  fetchUserProfile: username => FetchHelper.fetchJsonGet(`/users/${username}`),
  fetchUserPortfolioLink: username => FetchHelper.fetchJsonGet(`/users/${username}/portfolio`),
  fetchUserPhotos : username => FetchHelper.fetchJsonGet(`/users/${username}/photos`),
  fetchUserStatistics : id => FetchHelper.fetchJsonGet(`/photos/${id}/statistics`),

  postLikePhoto:id => FetchHelper.fetchJsonPost(`/photos/${id}/like`),
  postUnLikePhoto:id => FetchHelper.fetchJsonDelete(`/photos/${id}/like`),

};

export default api;