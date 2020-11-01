// ---------------------- Import syle sheets
import './styles/resets.scss';
import './styles/main.scss';
import './styles/form.scss';

// ---------------------- Import modules
import { handleSubmit } from './js/formHandler';
import {
    validateInput,
    moveTextToResults,
    postTextToServer,
    updateUI
} from './js/helper';


// ---------------------- Export modules
export {
    handleSubmit,
    validateInput,
    moveTextToResults,
    postTextToServer,
    updateUI
};