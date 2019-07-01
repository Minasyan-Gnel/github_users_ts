interface FooParams {
    data: Array<object>,
    [propName: string]: any
};

const foo = (props: FooParams): Object => {
    return props;
};

const arr: Array<object> = [{a: 1}, {b: 2}];

console.log(foo({data: arr, age: 20}));