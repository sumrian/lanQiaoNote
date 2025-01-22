class MyDemo {
    constructor() {
        console.log(123)
    }
}

const singleton = className => {
    let instance = null;
    const proxy =  new Proxy(className, {
        construct: function (target, prop) {
            if (instance === null) {
                instance = Reflect.construct(target, prop);
            }
            return instance;
        }
    })
    proxy.prototype.constructor = proxy
    return proxy
}
const myDemo = singleton(MyDemo)
const d1 = new myDemo();
const d2 = new myDemo();
const d3 = new d2.constructor()
console.log(d1 === d2 && d2 === d3)
export default myDemo