function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return (x) => x*x;
}