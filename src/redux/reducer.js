import Action from "./action";

const initialState = {
    recentPhotos: [],
    selectedPhoto: null,
    randomPhotos: [],
    relatedPhotos: [],

    keyword: null,
    searchResult: [],

    collections: null,
    collectionItem: null,
    selectedCollection: null,
    collectionPhotos: [],

    userProfile: null,
    // likedByUser: false,
    // relatedCollections: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state; // return은 뭐 안써주면 undefiend > 그러면 스테이트가 다 날라감
            case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload //오브젝트로 만들엇기땜에 home에서 키를 같이 포함해서 써줛기땜에 전개연산자로 풀어서 써주는것.
            }
        }
    }
};

export default reducer;