class Test {
  constructor() {
    this.name = 'Te sti gulpe';
  }


  sayHello = () => {
    console.log(this.name);
    console.log('hello');
  };
}

const test2 = new Test();

test2.sayHello();
