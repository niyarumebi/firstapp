//action 유저가 원하는 행동을 정해주는 곳
const Action = {

    //굳이 types 키 써주는 이유
    //키워드찾기 쉽다
    //변수로 하면 틀렷을떄 스트링으로만햇을 에러못잡는거 잡기 용이
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',

        FETCH_API: 'FETCH_API',
        FETCH_PHOTOS: 'FETCH_PHOTOS',
        FETCH_SEARCH_RESULT: 'FETCH_SEARCH_RESULT',
        FETCH_RELATED_PHOTOS: 'FETCH_RELATED_PHOTOS',
        FETCH_COLLECTION: 'FETCH_COLLECTION',
        FETCH_RANDOM_PHOTOS: 'FETCH_RANDOM_PHOTOS',

        //user 관련  cmd shift u 로 하면 전부 대/소문자로 한번에 바꿔줌
        FETCH_USER_PROFILE: 'FETCH_USER_PROFILE',
        FETCH_USER_PORTFOLIOLINK:'FETCH_USER_PORTFOLIOLINK',
        FETCH_USER_PHOTOS:'FETCH_USER_PHOTOS',
        FETCH_USER_STASTICS:'FETCH_USER_STASTICS',



        POST_LIKE_PHOTO: 'POST_LIKE_PHOTO',
        POST_UN_LIKE_PHOTO: 'POST_UN_LIKE_PHOTO',

        ADD_PHOTO_TO_COLLECTIONS: 'ADD_PHOTO_TO_COLLECTIONS',
        CREATE_NEW_COLLECTIONS: 'CREATE_NEW_COLLECTIONS',
    },

    Creators: {
        updateState: payload => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),

        fetchApi: payload => ({
            type: Action.Types.FETCH_API,
            payload
        }),
        fetchPhotos: () => ({
            type: Action.Types.FETCH_PHOTOS
        }),

        fetchCollection: payload => ({
            type: Action.Types.FETCH_COLLECTION,
            payload
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

        postLikePhoto: payload => ({
            type: Action.Types.POST_LIKE_PHOTO,
            payload
            //photo_id
        }),

        postUnLikePhoto: payload => ({
            type: Action.Types.POST_UN_LIKE_PHOTO,
            payload
            //photo_id
        }),
        addPhotoToCollections: () => ({
            type: Action.Types.ADD_PHOTO_TO_COLLECTIONS,
            //collection_id, photo_id
        }),

        createNewCollections: () => ({
            type:Action.Types.CREATE_NEW_COLLECTIONS
            //title, description, private
        })

    }
};

export default Action;