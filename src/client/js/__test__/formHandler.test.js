import "babel-polyfill";
import { handleSubmit } from './../formHandler';
import {
    validateInput,
    moveTextToResults,
    postTextToServer,
    updateUI
} from "./../helper.js";

describe("The function 'handleSubmit()' should be defined" , () => {
    test("Testing if the function 'handleSubmit() is defined", () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe("The function 'handleSubmit(evt)' should be of type function" , () => {
    test("'handleSubmit' should be of type 'function'", () => {
        expect(typeof handleSubmit).toBe("function");
    });
});

describe("The function 'validateInput()' should be defined" , () => {
    test("Testing if the function 'validateInput() is defined", () => {
        expect(validateInput).toBeDefined();
    });
});

describe("The function 'moveTextToResults()' should be defined" , () => {
    test("Testing if the function 'moveTextToResults() is defined", () => {
        expect(moveTextToResults).toBeDefined();
    });
});

describe("The function 'postTextToServer()' should be defined" , () => {
    test("Testing if the function 'postTextToServer() is defined", () => {
        expect(postTextToServer).toBeDefined();
    });
});

describe("The function 'updateUI()' should be defined" , () => {
    test("Testing if the function 'updateUI() is defined", () => {
        expect(updateUI).toBeDefined();
    });
});



