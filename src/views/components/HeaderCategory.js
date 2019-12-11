import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import {Link} from "react-router-dom";

function HeaderCategory(props) {

    const {} = props;

    const bigCategory = [
        {
            name: 'random',
            url: '/random'
        },
        {
            name: 'wallpapers',
            url: '/wallpapers'
        },
        {
            name: 'textues & patterns',
            url: '/textues_patterns'
        },
        {
            name: 'nature',
            url: '/nature'
        },
        {
            name: 'current events',
            url: '/current_events'
        },
        {
            name: 'architecture',
            url: '/architecture'
        },
        {
            name: 'business & work',
            url: '/business_work'
        },
        {
            name: 'film',
            url: '/film'
        },

        {
            name: 'textues & patterns',
            url: '/textues_patterns'
        },
        {
            name: 'nature',
            url: '/nature'
        },
        {
            name: 'current events',
            url: '/current_events'
        },
        {
            name: 'architecture',
            url: '/architecture'
        },
        {
            name: 'business & work',
            url: '/business_work'
        },
        {
            name: 'film',
            url: '/film'
        },
    ];

    return (
        <div className="HeaderCategory">
            <div className="links">
                {
                    _.map(bigCategory, (bCate, i) =>
                        <Link to={bCate.url} className="link" key={i}>
                            <div className="txt">{bCate.name}</div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default HeaderCategory;