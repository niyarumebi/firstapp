import {createBrowserHistory} from 'history';

export const HISTORY = createBrowserHistory();

export const navigate = url => {
    HISTORY.push(url);
};
export const navigateReplace = url => {
    window.location.replace(`#${url}`);
};
