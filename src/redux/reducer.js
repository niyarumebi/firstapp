import Action from "./action";

const initialState = {
    recentPhotos: [],
    selectedPhoto: null,
    randomPhotos: [],
    relatedPhotos: [],

    keyword: null,
    searchPhotos: [],
    searchCollections: [],
    searchUsers: [],

    collections: null,
    collectionById: null,
    collectionPhotos: [],

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