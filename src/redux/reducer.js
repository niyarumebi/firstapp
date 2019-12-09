//action을 받아서 type을 보고 그에 맞는 작업을 해서 / store에 있는 state에 action을 적용한 / 새로운 state를 업데이트한다.
//리듀서는 순수함수이다.
// 순수 함수? 100번실행하면 100번 같은 리절트나오는것( 비동기는 안그럴때있잖아)
//리듀서는 기존의 state와 action을 인자로 받는다.
import Action from "./action";

const initialState = {
    isLoggedIn: false,

    //test용으로 {}대신 null 넣었음..
    selectedPhoto: null,
    selectedUser: null,
    userProfile: null,
    keyword: '',
    searchResult: null,
    likedByUser: false,
    relatedCollections: null,
};

//변수에 있는 action이랑 임포트한 Action의 차이..? action은 현재 유동적으로 유저의 이벤트 발현에 의해 담겨지는 액션이고, Action은 선언해놓은거 가져온거잖아,,
//리듀서가 업데이트해주는거 > 스토어
//스토어에 연결하고싶을떄 connect사용
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
        // case Action.Types.FETCH_SEARCH_RESULT:{
        //     return{
        //         ...state,
        //         keyword:
        //     }
        // }
        // case Action.Types.SET_PHOTOS: {
        //     console.log("@@ action.payload", action.payload);
        //     return {
        //         ...state,
        //         photos: action.payload
        //     }
        // }
    }
};

export default reducer;