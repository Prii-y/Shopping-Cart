

const reducer = (state,action) => {
 
    if(action.type=='CLEAR'){
            return {...state,cart:[]}
    }
    else if(action.type=='REMOVE'){ 
        return {...state,cart:state.cart.filter((elem)=>{return elem.id!==action.payload})}
    }

    else if(action.type=='INCRZ'){
        const arr= state.cart.map((elem)=>{
            if (elem.id==action.args){
                   return {...elem,amount:elem.amount+1}
            }
        return elem;
        });
        return {...state,cart:arr}
    }

    else if(action.type=='DECRZ'){
        const arr=state.cart.map(
            (elem)=>{
            if(elem.id==action.args )
            {
            return {...elem,amount:elem.amount-1} 
            }
            return elem
            
        }).filter((elem)=> elem.amount!==0);

        return {...state,cart:arr}
    }
    else if(action.type=='TOTAL'){
        const {total,amount}=state.cart.reduce((t,elem)=>{
            t.total+=elem.amount*elem.price;
            t.amount+=elem.amount;
            
            return t
        },{total:0,amount:0})
        const newtotal=total.toFixed(2);
        return {...state,total:newtotal,amount}
    }

    return state
}

export default reducer