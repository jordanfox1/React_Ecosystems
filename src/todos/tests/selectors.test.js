import { expect } from "chai";
import { getCompletedTodos } from "../selectors.js";

describe('the get completed todos selector', () => {
    it('returns only copleted todos', () => {
        const fakeTodos = [
            {
                text: 'Say hello',
                isCompleted: true,
            },
            {
                text: 'Climb mountain',
                isCompleted: false,
            },
            {
                text: 'Complete all todos',
                isCompleted: false,
            },
        ]
        const expected = [
            {
                text: 'Say hello',
                isCompleted: true,
            }
        ]
        const actual = getCompletedTodos.resultFunc(fakeTodos)

        expect(actual).to.deep.equal(expected)
    })
})