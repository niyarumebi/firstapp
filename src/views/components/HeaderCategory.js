import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import store from "../../mock/store";

function HeaderCategory(props) {

    const {} = props;

    return (
        <div className="HeaderCategory">
            <div className="links">
                {
                    _.map(store.state.bigCategory, (bCate, i) =>
                        <div className="link" key={i}>
                            <div className="txt">{bCate.name}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HeaderCategory;