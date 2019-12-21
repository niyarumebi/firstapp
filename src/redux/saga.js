import {all, put, call, takeLatest, select, delay, spawn} from 'redux-saga/effects'
import Action from './action';
import api from './api'
import {navigate} from "../helpers/HistoryHelper";

export default function* () {

    /**
     * ======= Common usage =======
     */
    const isLoading = function*(load, duration){//변수이름이랑 동일하게??
        yield put(Action.Creators.updateState({
            isLoading: load
        }));
        yield spawn(function* () {
            yield delay(2000);//toastMessage도 리듀서에써주는게..명시적으로 낫지?
            yield put(Action.Creators.updateState({isLoading: false}))
        })
    };
    const toastMessage = function* (message, duration) {
        yield put(Action.Creators.updateState({
            toastMessage: message
        }));
        yield spawn(function* () {
            yield delay(duration); //동기를 비동기로 만들어주는 것 맞지? delay앞에 yield 안써줘서 안됐었다..
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

        yield toastMessage('로드가 완료되었습니다.', 2000);
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
    yield takeLatest(Action.Types.FETCH_SEARCH, function* (action) {
        const result = yield call(api.fetchSearch, action.payload);
        console.log(`[saga] [fetchSearch]`, result.data);

        yield put(Action.Creators.updateState({searchResult: result.data, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_PHOTOS, function* (action) {
        const result = yield call(api.fetchSearchPhotos, action.payload);
        console.log(`[saga] [fetchSearchPhotos]`, result.data);

        yield put(Action.Creators.updateState({searchPhotos: result.data, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_COLLECTIONS, function* (action) {
        const result = yield call(api.fetchSearchCollections, action.payload);
        console.log(`[saga] [fetchSearchCollections]`, result.data);

        yield put(Action.Creators.updateState({searchCollections: result.data, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_USERS, function* (action) {
        const result = yield call(api.fetchSearchUsers, action.payload);
        console.log(`[saga] [fetchSearchUsers]`, result.data);

        yield put(Action.Creators.updateState({searchUsers: result.data, keyword: action.payload}));
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
        yield put(Action.Creators.updateState({userProfile: result.data}));
    });
}
