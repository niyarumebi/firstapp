//action 유저가 원하는 행동을 정해주는 곳
const Action = {

    //굳이 types 키 써주는 이유
    //키워드찾기 쉽다
    //변수로 하면 틀렷을떄 스트링으로만햇을 에러못잡는거 잡기 용이
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',

        FETCH_PHOTOS: 'FETCH_PHOTOS',

        //user 관련  cmd shift u 로 하면 전부 대/소문자로 한번에 바꿔줌
        FETCH_USER_PROFILE: 'FETCH_USER_PROFILE',
        FETCH_USER_PORTFOLIOLINK:'FETCH_USER_PORTFOLIOLINK',
        FETCH_USER_PHOTOS:'FETCH_USER_PHOTOS',
        FETCH_USER_STASTICS:'FETCH_USER_STASTICS',

        FETCH_SEARCH_RESULT: 'FETCH_SEARCH_RESULT',
        FETCH_RELATED_COLLECTION: 'FETCH_RELATED_COLLECTION',

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

        //saga에서 할거니까 payload 비어있음..
        fetchPhotos: () => ({
            type: Action.Types.FETCH_PHOTOS
        }),

        //근데 아래의 fetch들은 데이터 들어와야하니 payload 받아야하지않나..
        fetchSearchResult: payload => ({
            type:Action.Types.FETCH_SEARCH_RESULT,
            payload
        }),
        fetchRelatedCollections:() => ({
            type:Action.Types.FETCH_RELATED_COLLECTION
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