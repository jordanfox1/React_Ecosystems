import { expect } from "chai";
import {todos} from '../reducers.js' //test runner failes if you don't add .js

describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is recieved', () => {
        //TEST HERE
        const fakeTodo = {text: 'hello', isCompleted: false};
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo,
            },
        };
        const originalState = {isLoading: false, data: []}
        
        const expected = {
            isLoading: false,
            data: [fakeTodo]
        }
        const actual = todos(originalState, fakeAction)

        expect(actual).to.deep.equal(expected)
    })
})
