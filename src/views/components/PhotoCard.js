import React, {useState, useEffect} from 'react';
import UserIcon from "./UserIcon";
import PhotoDetail from "./PhotoDetail";

function PhotoCard(props) {

    const {
        photo = {}, // '기본값' 기냥 여기다 이렇게 쓰면 디폴트값 설정되는것임.
        showDetail = () => {},
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    // console.log("@@ photo", photo);

    return (
        <div className="PhotoCard" onClick={() => {
            showDetail()
            // setIsOpen(true);
            // console.log("@@ isOpen", isOpen);

        }}>
            <img src={photo.urls.regular} alt="" className="img"/>
            <div className="desc">

                <div className="upper">
                    <div className="left-area">
                        <div className="info-txt"><i className="material-icons">info</i> sponsored</div>
                    </div>
                    <div className="right-area">
                        <div className="btn"><i className="material-icons">favorite</i></div>
                        <div className="btn"><i className="material-icons">add</i>Collect</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left-area">
                        <div className="user-wrap">
                            <UserIcon src={photo.user.icon}/>
                            <div className="name">{photo.user.name}</div>
                        </div>
                    </div>
                    <div className="right-area">
                        <div className="btn"><i className="material-icons">arrow_downward</i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard;