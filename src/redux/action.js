//action 유저가 원하는 행동을 정해주는 곳
const Action = {

    //굳이 types 키 써주는 이유
    //키워드찾기 쉽다
    //변수로 하면 틀렷을떄 스트링으로만햇을 에러못잡는거 잡기 용이
    Types: {
        OPEN_SIDEBAR : 'OPEN_SIDEBAR',
        SET_PHOTOS: 'SET_PHOTOS',
        SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
        SET_SELECTED_USER : 'SET_SELECTED_USER',
    },

    Creators: {
        openSidebar : payload => {
            //한줄로 바까보기 : ( ) 안에 바로 리턴 값 (우리 지금 action에서는 오브젝트))
            return{
                type: Action.Types.OPEN_SIDEBAR,
                payload
            }
        },
        setPhotos: payload => ({
           type: Action.Types.SET_PHOTOS,
           payload
        }),
        setSelectedPhoto: payload => ({
            type: Action.Types.SET_SELECTED_PHOTO,
            payload
        }),
        setSelectedUser: payload => ({
            type: Action.Types.SET_SELECTED_USER,
            payload
        })
    }


};

export default Action;