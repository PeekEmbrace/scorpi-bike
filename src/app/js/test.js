class Test {
  constructor() {
    this.name = 'Testie'
  }

  sayHello = () => {
    console.log(this.name)
  }
}

const test2 = new Test();

test2.sayHello();