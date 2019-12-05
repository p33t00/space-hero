const compose = (...funcs) => comp => {
    return funcs.reduce((acc, foo) => {return foo(acc)}, comp);
}

export default compose;