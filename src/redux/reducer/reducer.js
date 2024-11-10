let initialState={
    // count:0,
}



function reducer(state=initialState,action){
    // console.log("action",action)
    // if(action.type === "INCREMENT") {
    //     return {...state,count:state.count+1}
    // }

    return{...state};
}

export default reducer;

//how to use useDispatch/useSelector
// let count = useSelector((state)=>state.count);
  // const dispatch = useDispatch();

  // const increase= ()=>{
  //   dispatch({type:"INCREMENT"})
  // }