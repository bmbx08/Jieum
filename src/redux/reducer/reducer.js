let initialState={
    // count:0,
    // study: {},
}

// dispatch({type:"CREATE_STUDYGROUP",payload: createdStudyData});

function reducer(state=initialState,action){
    // console.log("action",action)
    // if(action.type === "INCREMENT") {
    //     return {...state,count:state.count+1}
    // }
    
    // if(action.type ==="CREATE_STUDYGROUP"){
    //     console.log(action.payload);
    //     return{...state,study:action.payload}
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