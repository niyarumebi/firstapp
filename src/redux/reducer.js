//action을 받아서 type을 보고 그에 맞는 작업을 해서 / store에 있는 state에 action을 적용한 / 새로운 state를 업데이트한다.
//리듀서는 순수함수이다.
// 순수 함수? 100번실행하면 100번 같은 리절트나오는것( 비동기는 안그럴때있잖아)

//리듀서는 기존의 state와 action을 인자로 받는다.

//수업때 react-redux redux설치한거 에서 react-redux의 역할을 하는게 어떤 파일이라고 해썼지 내가?
//그건 Photos.js에 있는 connect인가봄   노노 index.js에 있는 Provider였다.!

import Action from "./action";


const initialState = {
    isLoggedIn : false,
    openSidebar: false,
    selectedPhoto: {}
};

//뱐수에 있는 action이랑 임포트한 Action의 차이..?
//리듀서가 돌아가면서 프레임워크에 따라 작동해지는 action오브젝트  , action 리절트 내기 전의 state인가봄
//해서 action.type으로 스위치 문을 걸고, 내가 선언한 Action의 내용과 대조해서
//리듀서 파일로 들어오는 건 그러니까 프레임워크적인 오브젝트 객체인가봄 . 그 안의 내용은 아니고 :: 라고해봤자 선언한 내용이 돌고도니까 그 내용이지만
//스토어.js 가보면 createStore(reducer)로 하니까.응
const reducer = (state = initialState, action) => {
    switch(action.type){
        //'action_open_sidebar'하면 오류나기 쉬우니까 여기서도 장점
        default: return state; // return은 뭐 안써주면 undefiend > 그러면 스테이트가 다 날라감
        case Action.Types.OPEN_SIDEBAR: {
            return {
                ...state, // 기존의스테이트도 넣어줘야한다 (아니면지워져서_
                openSidebar : action.payload, //앞의 키값은 아무거나 새로 지어주면됨
            }
        }
        case Action.Types.SET_SELECTED_PHOTO:{
            return{
                ...state,
                selectedPhoto: action.payload
            }
        }
    }
};

export default reducer;