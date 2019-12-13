import {all, put, call, takeLatest, select} from 'redux-saga/effects'
import Action from './action';
import api from './api'
import {navigate} from "../helpers/HistoryHelper";


export default function* () {
    yield takeLatest(Action.Types.FETCH_PHOTOS, function* () {
        const result = yield call(api.fetchPhotos); //call : promise 까는 역할도 함
        console.log(`[saga] [fetchPhotos]`, result);
        //프론트 액션 > 디스페치 (원래 리듀서로갈거) > 사가 인터셉트함takeLage가 > 리듀서로 다시 보내줘야함 > 이후 다시 스토어로.
        //여기서 리듀서로 다시보내주는게 put임.

        yield put(Action.Creators.updateState({recentPhotos: result.data}));
    });

    yield takeLatest(Action.Types.FETCH_RANDOM_PHOTOS, function* (){
        const result = yield call(api.fetchRandomPhotos);
        console.log(`[saga] [fetchRandomPhotos]`, result);

        yield put(Action.Creators.updateState({randomPhotos: result}))
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_RESULT, function* (action) {
        const result = yield call(api.fetchSearchResult, action.payload);
        console.log(`[saga] [fetchSearchResult]`, result.data);
        navigate('/search');

        yield put(Action.Creators.updateState({searchResult: result.data.results, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.FETCH_COLLECTIONS, function* (){
        const result = yield call(api.fetchCollections);
        console.log(`[saga] [fetchCollections]`, result.data);

        yield put(Action.Creators.updateState({collections: result.data}));
    });

    // yield takeLatest(Action.Types.FETCH_COLLECTION, function* (action){
    //     const result = yield call(api.fetchCollection, action.payload);
    //     console.log(`[saga] [fetchCollection]`, result, action);
    //
    // });

    yield takeLatest(Action.Types.FETCH_COLLECTION_PHOTOS, function* (action){
        const result = yield call(api.fetchCollectionPhotos, action.payload);
        console.log(`[saga] [fetchCollectionPhotos]`, result);

        yield put(Action.Creators.updateState({collectionPhotos: result.data}))
    });

    yield takeLatest(Action.Types.FETCH_RELATED_PHOTOS, function* (action) {
        const result = yield call(api.fetchRelatedPhotos, action.payload);
        console.log(`[saga] [fetchRelatedPhotos]`, result.data.results);

        yield put(Action.Creators.updateState({relatedPhotos: result.data.results, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.FETCH_USER_PROFILE, function* () {
        const result = yield call(api.fetchUserProfile);
        console.log(`[saga] [fetchUserProfile]`, result);
        // yield navigate('/user');
        yield put(Action.Creators.updateState({userProfile: result.data}));
    });

    // yield takeLatest(Action.Types.POST_LIKE_PHOTO, function*(action){
    //    const result = yield call(api.postLikePhoto, action.payload);
    //     console.log(`[saga] [postLikePhoto]`, result.data);
    //
    //     yield put(Action.Creators.updateState({likedByUser: true}))
    // });
    //
    // yield takeLatest(Action.Types.POST_UN_LIKE_PHOTO, function*(action){
    //     const result = yield call(api.postUnLikePhoto, action.payload);
    //     console.log(`[saga] [postUNLikePhoto]`, result.data);
    //
    //     yield put(Action.Creators.updateState({likedByUser: false}))
    //
    // });
}
