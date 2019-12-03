import React, {useState, useEffect} from 'react';
import FetchHelper from "../../helpers/FetchHelper";

function SearchBar(props) {

    const {
        placeholder = 'Search free high-resolution photos'
    } = props;

    const [value, setValue] = useState('');
    console.log("@@ value", value);
    return (
        <div className="SearchBar">
            <i className="material-icons">search</i>
            <input
                type="text"
                placeholder={placeholder}
                value={value} //나중에 엔터쳣을때 지워주려고도필요하고, 여기에 value연결안하고 ''만 넣언호으면 인풋입력값안됨
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        // const result = FetchHelper.fetchJsonPost('/search', {keyword: value}); //비동기는 안기다리고 밑에꺼 바로 실행될테니 . 비동기 다녀오는거 ㄴ0.2초
                        // dispatch(Action.Creators.updateState({searchResult : undefined}))// 여기는 언디파인 낫엇겟지
                        const result = FetchHelper.fetchJsonPost('/search', {keyword: value})
                            .then((res) => {//.then은 앞에 애가 끝난다음에 실행되는 콜백.
                                //무조건 통신 끝난다음에 불러옴. 그래서 콜백
                                //우리가 이제 배울건 프라미스 - 일반 객체가 프라미스형태로 감싸져잇는거 > 그걸 까는게 then (덴이 까서 받아오는게  인자인 res)
                                console.log("@@ res", res);

                                //프로미스를 return 하면 다시 프로미스를 씌워서 리턴한다. 왜냐? 그래야 받는 곳에서 다시 then으로 까서 하려는 작업들 쓸수잇기때문이다.
                                //그래서 밑에 서술한 then들도 쓸수있는거당 :: 고로 공통에서 프라미스 까는 걸로 공용 만들어놔도, 사용처에선 다시까야하므로 할 필요가 없는 짓.
                            }).then(() => {
                                //앞에 코드 작업 후 뭘또 해야한다면
                            }).then(() => {
                                //앞에 코드 작업 후 뭘또 해야한다면
                            }).then(() => {
                                //앞에 코드 작업 후 뭘또 해야한다면
                            }).then(() => {
                                //앞에 코드 작업 후 뭘또 해야한다면
                                //이런식으로 한줄로 쭈루룩 정리되는게 > $.ajax 제이쿼리 의 무한콜백 지옥을 탈출하는 거다.
                            })
                            // .catch(e => throw e);
                    }
                }}
            />
        </div>
    )
}

export default SearchBar;