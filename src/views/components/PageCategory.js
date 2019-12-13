import React, {useState, useEffect, useRef} from 'react';
import _ from 'lodash'
import cn from 'classnames'

function PageCategory(props) {

    const {
        items = [
            {
                icon: 'insert_photo',
                txt: 'Photos',
                val: '0',
                id: '', // api or id
            },
            {
                icon: 'layers',
                txt: 'CollectionList',
                val: '32',
                id: '',
            },
            {
                icon: 'group',
                txt: 'Users',
                val: '100',
                id: '',
            },
        ],
    } = props;

    const heads = useRef();//초기값 설정시발이네
    const toggleClass = (idx) => {
        //이걸 초기값으로 넣어줘야해,,
        // heads.current.children[0].classList.add('test')
        for(let i = 0; i < heads.current.children.length; i++){
            heads.current.children[i].classList.remove('is-active');
                heads.current.children[idx].classList.add('is-active');
        }
        // dispatch(Action.Creators.fetchApi)
    };

    // const myRef = React.createRef(); // 함수 컴포넌트 안되고 클래스컴포에서만 사용된다던

    return (
        <div className="PageCategory" ref={heads}>
            {
                _.map(items, (item, i) =>
                    <div className={cn("head", (i === 0 && 'is-active'))} key={i}
                         onClick={() => {
                             toggleClass(i, item.id);
                             //형제요소들의 is-active 다 떼주고
                             //클릭된 애만 e.target.[]? 만 cn으로 클래스 달아주기
                             //is-active 달린애 fetchData등 해주기
                             //초기값을 i로 주는 게 맞나,,, children[0] 이런거 없나..
                             //map으로 출력된 애는 조작하기에는 반은 static한 데이터 인거 맞지?
                         }}
                    >
                        <div className="txt">
                            <i className="material-icons">{item.icon}</i>
                            {item.txt} {item.val}</div>
                    </div>
                )
            }
        </div>
    )
}

export default PageCategory;