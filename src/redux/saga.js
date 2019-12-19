import {all, put, call, takeLatest, select, delay, spawn} from 'redux-saga/effects'
import Action from './action';
import api from './api'
import {navigate} from "../helpers/HistoryHelper";

export default function* () {

    /**
     * ======= Public used =======
     */
    const toastMessage = function*(message, duration){
      yield put(Action.Creators.updateState({
          toastMessage: message
      }));
        yield spawn(function*() {
            delay(duration); //동기를 비동기로 만들어주는 것 맞지?
            yield put(Action.Creators.updateState({
                toastMessage: ''
            }));
        })
    };



    /**
     * ======= Photos =======
     */
    yield takeLatest(Action.Types.FETCH_PHOTOS, function* () {
        const result = yield call(api.fetchPhotos);
        console.log(`[saga] [fetchPhotos]`, result);
        yield put(Action.Creators.updateState({recentPhotos: result.data}));

        yield toastMessage('로드가 완료되었습니다.',2000);
    });

    yield takeLatest(Action.Types.FETCH_RANDOM_PHOTOS, function* () {
        const result = yield call(api.fetchRandomPhotos);
        console.log(`[saga] [fetchRandomPhotos]`, result.data);

        yield put(Action.Creators.updateState({randomPhotos: result.data}))
    });

    yield takeLatest(Action.Types.FETCH_RELATED_PHOTOS, function* (action) {
        const result = yield call(api.fetchRelatedPhotos, action.payload);
        console.log(`[saga] [fetchRelatedPhotos]`, result.data.results);

        yield put(Action.Creators.updateState({relatedPhotos: result.data.results, keyword: action.payload}));
    });



    /**
     * ======= Search =======
     */
    yield takeLatest(Action.Types.FETCH_SEARCH_PHOTOS, function* (action) {
        const result = yield call(api.fetchSearchPhotos, action.payload);
        console.log(`[saga] [fetchSearchPhotos]`, result.data);
        navigate('/search');

        yield put(Action.Creators.updateState({searchPhotos: result.data.results, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_COLLECTIONS, function* (action) {
        const result = yield call(api.fetchSearchCollections, action.payload);
        console.log(`[saga] [fetchSearchCollections]`, result.data);
        navigate('/search');

        yield put(Action.Creators.updateState({searchCollections: result.data.results, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_USERS, function* (action) {
        const result = yield call(api.fetchSearchUsers, action.payload);
        console.log(`[saga] [fetchSearchUsers]`, result.data);
        navigate('/search');

        yield put(Action.Creators.updateState({searchUsers: result.data.results, keyword: action.payload}));
    });


    /**
     * ======= Collections =======
     */
    yield takeLatest(Action.Types.FETCH_COLLECTIONS, function* () {
        const result = yield call(api.fetchCollections);
        console.log(`[saga] [fetchCollections]`, result.data);

        yield put(Action.Creators.updateState({collections: result.data}));
    });

    yield takeLatest(Action.Types.FETCH_COLLECTION_BY_ID, function* (action) {
        const result = yield call(api.fetchCollectionById, action.payload);
        console.log(`[saga] [fetchCollectionById]`, result.data);

        yield put(Action.Creators.updateState({collectionById: result.data}))
    });

    yield takeLatest(Action.Types.FETCH_COLLECTION_PHOTOS, function* (action) {
        const result = yield call(api.fetchCollectionPhotos, action.payload);
        console.log(`[saga] [fetchCollectionPhotos]`, result.data);

        yield put(Action.Creators.updateState({collectionPhotos: result.data}))
    });


    /**
     * ======= User =======
     */
    yield takeLatest(Action.Types.FETCH_USER_PROFILE, function* () {
        const result = yield call(api.fetchUserProfile);
        console.log(`[saga] [fetchUserProfile]`, result.data);
        // yield navigate('/user');
        yield put(Action.Creators.updateState({userProfile: result.data}));
    });
}
