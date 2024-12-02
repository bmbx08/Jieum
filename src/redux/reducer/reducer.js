import { adminLoginInfo } from "../../common/adminLoginInfo";

let initialState={
    currentUserData:{},
    userDataArray:[adminLoginInfo],
    createdStudyList: [],
}

function reducer(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case "CREATE_USERDATA":
            console.log("store is accessed!!")
            return{...state,userDataArray:[...state.userDataArray,payload.userData]}

        case "LOGIN_USER":
            return{...state,currentUserData:payload.matchedData}

        case "CREATE_STUDYGROUP":
            return {...state,createdStudyList:[...state.createdStudyList,payload.createdStudyData]}

        case "INCREASE_CHAR_BAR_BY_PAYLOAD":
            let newPercent = state.currentUserData.characterInfo.barPercent+ payload.amount;
            let newLevel;
            if(newPercent>=100){
                newPercent -= 100;
                newLevel = state.currentUserData.characterInfo.level + 1
            }
            return {...state,currentUserData:{...state.currentUserData, characterInfo:{level:newLevel,barPercent:newPercent}}};

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