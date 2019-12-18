import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'
import _ from 'lodash';

function PopupMenu(props) {

    const {
        children,
        items = [
            {
                link: '',
                txt: '',
            },
        ],
        isOpen = false,
        isRightSide = false,
    } = props;

    // const [scrollY, setScrollY] = useState(0);
    // function logit() {
    //     setScrollY(window.pageYOffset);
    // }
    // useEffect(() => {
    //     function watchScroll() {
    //         window.addEventListener("scroll", logit);
    //     }
    //     watchScroll();
    //     // Remove listener (like componentWillUnmount)
    //     return () => {
    //         window.removeEventListener("scroll", logit);
    //     };
    // });

    function checkArea(e){
        if(e.target === 'PopupMenu'){
            console.log("@@ e.target", e.target);
            setIsOpen(false)
        };
    }
    useEffect(() => {
        function watchClick(){
            window.addEventListener('click', checkArea);
        }
        watchClick();
        //component will unmount 시에 걸리는 return 인가?
        return () => {
            window.removeEventListener('click', checkArea)
        }
    });

    
    console.log("@@ document", document);
    return (
        <div className={cn("PopupMenu", {'open-active': isOpen, 'right-side': isRightSide})}>

            {_.map(items, (item, i) =>
                <Link to={item.link} className='item' key={i}>{item.txt}</Link>
            )}

            {children}

        </div>
    )
}

export default PopupMenu;