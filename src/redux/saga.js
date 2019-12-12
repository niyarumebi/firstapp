// saga는 무조건 제너레이터 파일로 만들어짐 - 얘네는 store에서 불러와지고 아래 작성한것들 실행되겟지
//세팅은 그냥 복붙만 하면 되니까 중요하지않고 내용을 봐봅시다~
// 제너레이터 펑셔은 fujction 옆에 * 붙이는것
//yield 를 안에 쓸수있다  -  참고 async 펑션 안에 await 처럼
// import {put, call, all, takeLaast} .. 등 공홈가서 봐보기
import {all, put, call, takeLatest} from 'redux-saga/effects'
import Action from './action';
import api from './api'
import {navigate} from "../helpers/HistoryHelper";
//
// 위에 함수 임포트해서 기능만 쓸거니까 이름 따로 필요없으니 아래처럼 바로 그냥 리턴하자
export default function* () {
    //all은 차례대로 모두 실행하라는 뜻
    // yield all()

    yield takeLatest(Action.Types.FETCH_PHOTOS, function* () {
        // alert('take1!')
        //call은 첫번째 인자 실행 (==첫번째인자는 함수여야겟지?)ㅇㅇ
        const result = yield call(api.fetchPhotos);// 두번째 인자가있다면 그거 넣고 첫째함수 실행함
        //위의 result값은 프로미스로 넘어올텐데 call은 또 프로미스 값을 까주는 기능도해준다.
        console.log(`[saga] [fetchPhotos]`, result);

        //프론트 액션 > 디스페츼 (원래 리듀서로갈거) > 사가가 인터셉트함takeLage가 > 리듀서로 다시 보내줘야함 > 이후 다시 스토어로.
        //여기서 리듀서로 다시보내주는게 put임.
        yield put(Action.Creators.updateState({recentPhotos: result.data}));
    });

    yield takeLatest(Action.Types.FETCH_COLLECTION, function* (action){
        const result = yield call(api.fetchCollection, action.payload);
        console.log(`[saga] [fetchCollection]`, result);
        navigate('/category');
        yield put(Action.Creators.updateState({categoryContent: result.data}))
    });

    yield takeLatest(Action.Types.FETCH_RANDOM_PHOTOS, function* (){
        const result = yield call(api.fetchRandomPhotos);
        console.log(`[saga] [fetchRandomPhotos]`, result);

        yield put(Action.Creators.updateState({randomPhotos: result}))
    });

    yield takeLatest(Action.Types.FETCH_API, function* (action){
        const result = yield call(api.fetchApi, action.payload);
        console.log(`[saga] [fetchApi]`, result);

        yield put(Action.Creators.updateState({tabContent: result.data}))
    });

    yield takeLatest(Action.Types.FETCH_SEARCH_RESULT, function* (action) {
        const result = yield call(api.fetchSearchResult, action.payload);
        console.log(`[saga] [fetchSearchResult]`, result.data);
        yield put(Action.Creators.updateState({searchResult: result.data.results, keyword: action.payload}));
        navigate('/search');
    });

    yield takeLatest(Action.Types.FETCH_RELATED_PHOTOS, function* (action) {
        const result = yield call(api.fetchRelatedPhotos, action.payload);
        console.log(`[saga] [fetchRelatedPhotos]`, result.data.results);
        yield put(Action.Creators.updateState({relatedPhotos: result.data.results, keyword: action.payload}));
    });

    yield takeLatest(Action.Types.POST_LIKE_PHOTO, function*(action){
       const result = yield call(api.postLikePhoto, action.payload);
        console.log(`[saga] [postLikePhoto]`, result.data);

        yield put(Action.Creators.updateState({likedByUser: true}))

    });

    yield takeLatest(Action.Types.POST_UN_LIKE_PHOTO, function*(action){
        const result = yield call(api.postUnLikePhoto, action.payload);
        console.log(`[saga] [postUNLikePhoto]`, result.data);

        yield put(Action.Creators.updateState({likedByUser: false}))

    });
    //
    // yield takeLatest(Action.Types.FETCH_RELATED_COLLECTION, function* () {
    //    const result = yield call(api.fetchRelatedCollections);
    //     console.log(`[saga] [fetchRelatedCollections]`, result);
    //     yield put(Action.Creators.updateState({relatedCollections:result.data}));
    //     navigate('/collections')
    //
    // });

    yield takeLatest(Action.Types.FETCH_USER_PROFILE, function* () {
        const result = yield call(api.fetchUserProfile);
        console.log(`[saga] [fetchUserProfile]`, result);
        // yield navigate('/user');
        yield put(Action.Creators.updateState({userProfile: result.data}));
    });

}
