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
        // OPEN_SIDEBAR : 'OPEN_SIDEBAR',
        // SET_PHOTOS: 'SET_PHOTOS',
        // SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
        // SET_SELECTED_USER : 'SET_SELECTED_USER',
    },

    Creators: {
        updateState: payload => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),

        fetchPhotos: () => ({
            type: Action.Types.FETCH_PHOTOS
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

        })
        // openSidebar : payload => {
        //     //한줄로 바까보기 : ( ) 안에 바로 리턴 값 (우리 지금 action에서는 오브젝트))
        //     return{
        //         type: Action.Types.OPEN_SIDEBAR,
        //         payload
        //     }
        // },
        // setPhotos: payload => ({
        //    type: Action.Types.SET_PHOTOS,
        //    payload
        // }),
        // setSelectedPhoto: payload => ({
        //     type: Action.Types.SET_SELECTED_PHOTO,
        //     payload
        // }),
        // setSelectedUser: payload => ({
        //     type: Action.Types.SET_SELECTED_USER,
        //     payload
        // })
    }
};

export default Action;