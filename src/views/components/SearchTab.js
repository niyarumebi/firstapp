import React, {useState, useEffect, useRef} from 'react';
import _ from 'lodash'
import cn from 'classnames'
import {kComma} from "../../helpers/CommonHelper";
import Action from "../../redux/action";

function SearchTab(props) {
    const {
        keyword
    } = props;

    const heads = [
        {
            icon: 'insert_photo',
            txt: 'Photos',
            // val: '45643', //10만 100k
            func: () => {
                dispatch(Action.Creators.fetchSearchPhotos(keyword))
            }
        },
        {
            icon: 'layers',
            txt: 'Collections',
            func: () => {
                dispatch(Action.Creators.fetchSearchCollections(keyword))
            }
        },
        {
            icon: 'group',
            txt: 'Users',
            func: () => {
                dispatch(Action.Creators.fetchSearchUsers(keyword))
            }
        },
    ];

    const [currentHead, setCurrentHead] = useState(0);
    const headsRef = useRef();//함수형 컴포넌트 초기값 설정 어떻게해줘야하지
    const toggleClass = (idx) => {
        for (let i = 0; i < headsRef.current.children.length; i++) {
            headsRef.current.children[i].classList.remove('is-active');
            headsRef.current.children[idx].classList.add('is-active');
        }
    };

    // const myRef = React.createRef(); // 함수 컴포넌트 안되고 클래스컴포에서만 사용된다던

    return (
        <div className="Tab">
            <div className="head-wrap" ref={headsRef}>
                {
                    _.map(heads, (head, i) =>
                        <div className={cn("head", (i === 0 && 'is-active'))}
                             key={i}
                             onClick={() => {
                                 toggleClass(i, head.id); //초기값을 i로 주는 게 맞나,,, children[0] 이런거 없나..
                                 //map으로 출력된 애는 조작하기에는 반은 static한 데이터 인거 맞지?
                                 setCurrentHead(i);
                             }}
                        >
                            <div className="txt">
                                <i className="material-icons">{head.icon}</i>
                                {head.txt} {kComma(parseInt(head.val))}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SearchTab;