//action을 받아서 type을 보고 그에 맞는 작업을 해서 / store에 있는 state에 action을 적용한 / 새로운 state를 업데이트한다.
//리듀서는 순수함수이다.
// 순수 함수? 100번실행하면 100번 같은 리절트나오는것( 비동기는 안그럴때있잖아)

//리듀서는 기존의 state와 action을 인자로 받는다.
import Action from "./action";


const initialState = {
    isLoggedIn: false,
    selectedPhoto: {},
    selectedUser: {},
    userProfile: {},
    //그냥 초기값 다 주루룩 써주기
};

//변수에 있는 action이랑 임포트한 Action의 차이..?
//리듀서가 업데이트해주는거 > 스토어
//스토어에 연결하고싶을떄 connect사용   action
const reducer = (state = initialState, action) => {
    console.log("@@ action", action);
    switch (action.type) {
        default:
            return state; // return은 뭐 안써주면 undefiend > 그러면 스테이트가 다 날라감

        case Action.Types.UPDATE_STATE:{
            return{
                ...state,
                ...action.payload //오브젝트로 만들엇기땜에 home에서 키를 같이 포함해서 써줛기땜에 전개연산자로 풀어서 써주는것.
            }
        }

        // case Action.Types.OPEN_SIDEBAR: {
        //     return {
        //         ...state, // 기존의스테이트도 넣어줘야한다 (아니면지워져서)
        //         openSidebar: action.payload, //앞의 키값은 아무거나 새로 지어주면됨
        //     }
        }
        // case Action.Types.SET_PHOTOS: {
        //     console.log("@@ action.payload", action.payload);
        //     return {
        //         ...state,
        //         photos: action.payload
        //     }
        // }
        // case Action.Types.SET_SELECTED_PHOTO: {
        //     return {
        //         ...state,
        //         selectedPhoto: action.payload
        //     }
        // }
        // case Action.Types.SET_SELECTED_USER: {
        //     return {
        //         ...state,
        //         selectedUser: action.payload
        //     }
        // }
    };

export default reducer;