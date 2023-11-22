class GenericsValue<T>{
    value:T;
    constructor(arg:T){
        this.value=arg
    }
    getVAlue():T{
        return this.value;
    }
}
let genericsValue=new GenericsValue<number>(123);
console.log(genericsValue.getVAlue());