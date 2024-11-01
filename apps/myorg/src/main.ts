import { mylib, MyLibConfig } from '@my-workspace/mylib';

console.log('Hello World');

console.log(mylib());

const some: MyLibConfig = {
  foo: 'bar',
};

console.log(some.foo);
