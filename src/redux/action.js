const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',

        FETCH_PHOTOS: 'FETCH_PHOTOS',
        FETCH_SEARCH_RESULT: 'FETCH_SEARCH_RESULT',
        FETCH_RANDOM_PHOTOS: 'FETCH_RANDOM_PHOTOS',
        FETCH_RELATED_PHOTOS: 'FETCH_RELATED_PHOTOS',

        FETCH_API: 'FETCH_API',
        FETCH_COLLECTIONS: 'FETCH_COLLECTIONS',
        // FETCH_COLLECTION: 'FETCH_COLLECTION',
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
        fetchSearchResult: payload => ({
            type:Action.Types.FETCH_SEARCH_RESULT,
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
        // fetchCollection: payload => ({
        //     type: Action.Types.FETCH_COLLECTION,
        //     payload
        // }),
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