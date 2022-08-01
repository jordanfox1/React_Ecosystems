// in redux a thunk is a function that returns another function which contains the logic to perform when its triggered
export const displayAlert = () => () => {
    alert('Hello!')
}