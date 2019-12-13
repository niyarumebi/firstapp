import FetchHelper from "../helpers/FetchHelper";

const api = {
  //fetch photo array
  fetchPhotos: () => FetchHelper.fetchJsonGet('/photos'),
  fetchRandomPhotos: () => FetchHelper.fetchJsonGet('/photos/random/?featured'),
  fetchSearchResult: keyword => FetchHelper.fetchJsonGet(`/search/photos?=page=1&query=${keyword}`),
  fetchRelatedPhotos: keyword => FetchHelper.fetchJsonGet(`/search/photos?=page=1&query=${keyword}`),

  //fetch etc
  fetchCollections: () => FetchHelper.fetchJsonGet('/collections'),
  // fetchCollection: id => FetchHelper.fetchJsonGet(`/collections/${id}`),
  fetchCollectionPhotos: id => FetchHelper.fetchJsonGet(`/collections/${id}/photos`),

  //fetch user
  //이름은 최대한 서버단에서 설명해주는거 그대로 써주는게좋음
  fetchUserProfile: username => FetchHelper.fetchJsonGet(`/users/${username}`),
  fetchUserPortfolioLink: username => FetchHelper.fetchJsonGet(`/users/${username}/portfolio`),
  fetchUserPhotos : username => FetchHelper.fetchJsonGet(`/users/${username}/photos`),
  fetchUserStatistics : id => FetchHelper.fetchJsonGet(`/photos/${id}/statistics`),

};

export default api;