import Action from "./action";

const initialState = {
    //photos
    recentPhotos: [],
    selectedPhoto: null,
    randomPhotos: [],
    relatedPhotos: [],

    //search
    keyword: null,
    searchPhotos: [],
    searchCollections: [],
    searchUsers: [],

    //collection
    collections: null,
    selectedCollection: null,
    collectionPhotos: [],

    //user
    userProfile: null,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
            case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
};

export default reducer;