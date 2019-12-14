const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',

        FETCH_PHOTOS: 'FETCH_PHOTOS',
        FETCH_RANDOM_PHOTOS: 'FETCH_RANDOM_PHOTOS',
        FETCH_RELATED_PHOTOS: 'FETCH_RELATED_PHOTOS',

        FETCH_SEARCH_PHOTOS: 'FETCH_SEARCH_PHOTOS',
        FETCH_SEARCH_COLLECTIONS: 'FETCH_SEARCH_COLLECTIONS',
        FETCH_SEARCH_USERS: 'FETCH_SEARCH_USERS',

        FETCH_COLLECTIONS: 'FETCH_COLLECTIONS',
        FETCH_COLLECTIONS_BY_ID: 'FETCH_COLLECTIONS_BY_ID',
        FETCH_COLLECTION_PHOTOS: 'FETCH_COLLECTION_PHOTOS',

        FETCH_USER_PROFILE: 'FETCH_USER_PROFILE',
        FETCH_USER_PORTFOLIOLINK:'FETCH_USER_PORTFOLIOLINK',
        FETCH_USER_PHOTOS:'FETCH_USER_PHOTOS',
        FETCH_USER_STASTICS:'FETCH_USER_STASTICS',

        // POST_LIKE_PHOTO: 'POST_LIKE_PHOTO',
        // POST_UN_LIKE_PHOTO: 'POST_UN_LIKE_PHOTO',
        // ADD_PHOTO_TO_COLLECTIONS: 'ADD_PHOTO_TO_COLLECTIONS',
        // CREATE_NEW_COLLECTIONS: 'CREATE_NEW_COLLECTIONS',
    },

    Creators: {
        updateState: payload => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),

        //fetch photo array
        fetchPhotos: () => ({
            type: Action.Types.FETCH_PHOTOS
        }),
        fetchRandomPhotos: () => ({
            type: Action.Types.FETCH_RANDOM_PHOTOS
        }),
        fetchSearchPhotos: payload => ({
            type:Action.Types.FETCH_SEARCH_PHOTOS,
            payload
        }),
        fetchRelatedPhotos:payload => ({
            type:Action.Types.FETCH_RELATED_PHOTOS,
            payload
        }),


        //fetch etc
        fetchCollections: () => ({
            type: Action.Types.FETCH_COLLECTIONS,
        }),
        fetchCollectionsById: (id) => ({
            type: Action.Types.FETCH_COLLECTIONS_BY_ID,
            id
        }),
        fetchCollectionPhotos: payload => ({
            type: Action.Types.FETCH_COLLECTION_PHOTOS,
            payload
        }),


        //fetch user
        fetchUserProfile: () => ({
            type: Action.Types.FETCH_USER_PROFILE
        }),
        fetchUserPortfolioLink: () => ({
            type: Action.Types.FETCH_USER_PORTFOLIOLINK
        }),
        fetchUserPhotos: () => ({
            type: Action.Types.FETCH_USER_PHOTOS
        }),
        fetchUserStatistics: () => ({
            type: Action.Types.FETCH_USER_STASTICS
        }),

    }
};

export default Action;
