let initialState={
    // count:0,
    createdStudyList: [],
}

// dispatch({type:"CREATE_STUDYGROUP",payload: createdStudyData});

function reducer(state=initialState,action){
    const {type,payload}= action;
    switch(type){
        case "CREATE_STUDYGROUP":
            return {...state,createdStudyList:[...state.createdStudyList,payload.createdStudyData]}
        
        default:
            return {...state}
    }

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