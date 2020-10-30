import './styles/resets.scss';
import './styles/main.scss';
import './styles/form.scss';

// Import own modules
import { handleSubmit } from './js/formHandler';
import { testAPI } from './js/testAPI.js';
import {
    validateInput,
    moveTextToResults,
    postTextToServer
} from './js/helper';

console.log("Project NLP on News is in progress");

export {
    handleSubmit,
    validateInput,
    moveTextToResults,
    postTextToServer,
    testAPI
};