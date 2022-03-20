// Scripts
import {createPanel} from './scripts/creatorPanel.js';
import {themeColor} from './scripts/themeManager.js';
import {createCard} from './scripts/createCard.js';

const run = function(){
    createPanel();
    themeColor();
    createCard();
}

run();