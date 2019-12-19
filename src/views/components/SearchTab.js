import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Action from "../../redux/action";
import cn from 'classnames'
import NoData from "./NoData";
import Collections from "../pages/collections/Collections";
import Photos from "./Photos";
import _ from "lodash";
import CollectionItem from "./CollectionItem";
import {kComma} from "../../helpers/CommonHelper";
import {navigate} from "../../helpers/HistoryHelper";

function SearchTab(props) {

    const {
        dispatch,
        searchResult,
    } = props;

    //data는 .results붙이기
    //나중에 UseSTate로 바꾸던가. type은 바껴야하니까 keyword는 바꾸지말고

    const T1 = 'photos';
    const T2 = 'collections';
    const T3 = 'users';


    const [type, setType] = useState(props.match.params.type);
    // const type = props.match.params.type;
    const keyword = props.match.params.keyword;

    // const heads = [
    //     {
    //         icon: 'insert_photo',
    //         txt: 'Photos',
    //         // val: '45643', //10만 100k
    //         func: dispatch(Action.Creators.fetchSearchPhotos(keyword))
    //     },
    //     {
    //         icon: 'layers',
    //         txt: 'Collections',
    //         func: dispatch(Action.Creators.fetchSearchCollections(keyword))
    //     },
    //     {
    //         icon: 'group',
    //         txt: 'Users',
    //         func: dispatch(Action.Creators.fetchSearchUsers(keyword))
    //     },
    // ];


    useEffect(() => {
        dispatch(Action.Creators.fetchSearch(keyword));
        // dispatch(Action.Creators.fetchSearchCollections(keyword));
        // dispatch(Action.Creators.fetchSearchUsers(keyword));
    }, [keyword]);

    if (!searchResult) {
        return false;
    }

    return (
        <div className="Tab SearchTab">


            <div className="head-wrap">
                <div className={cn("head", {'is-active': type === 'photos'})} onClick={() => {
                    setType(T1);
                    // dispatch(Action.Creators.fetchSearchPhotos(keyword))
                }}>
                    <div className="txt">
                        <i className="material-icons">insert_photo</i>
                        Photos {kComma(searchResult.photos.total)}
                    </div>
                </div>
                <div className={cn("head", {'is-active': type === 'collections'})} onClick={() => {
                    // dispatch(Action.Creators.fetchSearchCollections(keyword))
                    setType(T2);
                }}>
                    <div className="txt">
                        <i className="material-icons">layers</i>
                        Collections {kComma(searchResult.collections.total)}
                    </div>
                </div>
                <div className={cn("head", {'is-active': type === 'Users'})} onClick={() => {
                    setType(T3);
                }}>
                    <div className="txt">
                        <i className="material-icons">group</i>
                        Users {kComma(searchResult.users.total)}
                    </div>
                </div>
            </div>

            <div className="cont-wrap">
                <div className="container">

                    <div className="title">{keyword}</div>
                  <div className="related-keywords-wrap">
                      <div className="related-keywords">
                          {
                              _.map((searchResult.related_searches), (keyword, i) =>
                                  <div className='item'
                                       key={i}
                                       onClick={() => dispatch(Action.Creators.fetchSearch({keyword}))}
                                  >
                                      <div className="txt">{keyword.title}</div>
                                  </div>
                              )
                          }
                      </div>
                  </div>

                    {
                        type === T1 && <Photos photos={searchResult.photos.results}></Photos>
                        // searchPhotos.results.length > 0) ?  : <NoData/>
                    }
                    {
                        type === T2 &&
                        <div className='collection-wrap'>
                            {
                                _.map(searchResult.collections.results, (collection, i) =>
                                    <CollectionItem
                                        key={i}
                                        collection={collection}
                                    />
                                )
                            }
                        </div>
                    }
                    {
                        type === T3 &&
                        <div className='collection-wrap'>
                           Users
                        </div>
                    }
                    {/*{*/}
                    {/*    type === 'collections' ?*/}
                    {/*        searchPhotos.length > 0 ? <Collections photos={searchCollections.results}></Collections> : <NoData/> : false*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    type === 'users' ?*/}
                    {/*        searchPhotos.length > 0 ? <Photos photos={searchUsers.results}></Photos> : <NoData/>*/}
                    {/*}*/}
                </div>
            </div>

        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(withRouter(SearchTab));