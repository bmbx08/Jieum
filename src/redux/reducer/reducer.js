let initialState={
    userData:{},
    createdStudyList: [],
}

function reducer(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case "CREATE_USERDATA":
            console.log("store is accessed!!")
            return{...state,userData:payload.userData}

        case "CREATE_STUDYGROUP":
            return {...state,createdStudyList:[...state.createdStudyList,payload.createdStudyData]}

        default:
            return{...state}
            
    }
}

export default reducer;

//how to use useDispatch/useSelector
// let count = useSelector((state)=>state.count);
  // const dispatch = useDispatch();

  // const increase= ()=>{
  //   dispatch({type:"INCREMENT"})
  // }