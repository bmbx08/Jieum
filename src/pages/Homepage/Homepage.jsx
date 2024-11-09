import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dropDownArrayObject } from './arrayObject';
import { majorSubjectArrayObject } from './arrayObject';
import "./Homepage.style.css"
import CategoryRadioGroup from './components/CategoryRadioGroup';
import DropdownOne from './components/DropdownOne';
import DropdownTwo from './components/DropdownTwo';
import BadgeGroup from './components/BadgeGroup';

const Homepage = () => {
  // let count = useSelector((state)=>state.count);
  // const dispatch = useDispatch();

  // const increase= ()=>{
  //   dispatch({type:"INCREMENT"})
  // }

  const [selectedCategory,setSelectedCategory]= useState("");
  const [selectedDropdownOne,setSelectedDropdownOne] = useState("");
  const [showDropdownTwo,setShowDropdownTwo] = useState(false);
  const [selectedDropdownTwo, setSelectedDropdownTwo]=useState("");
  const [showSelfImproveInput, setShowSelfImproveInput] = useState(false);
  const [selfImproveSubject, setSelfImproveSubject] = useState("");
  const [interestBadgeArray, setInterestBadgeArray] = useState([]);

  const handleCategoryRadio =(event)=>{
    setSelectedCategory(event.target.value);
    setShowDropdownTwo(false);
    setShowSelfImproveInput(false);
    setSelfImproveSubject("");
    setSelectedDropdownOne("");
    setSelectedDropdownTwo("");
  }

  const handleDropdownOne=(event)=>{
    setSelectedDropdownOne(event.target.value);
    if(selectedCategory!=="자기개발"){
      setShowDropdownTwo(true);
    }
    if(selectedCategory==="자기개발"){
      setShowSelfImproveInput(true);
    }
    
  }

  const handleDropdownTwo = (event)=>{
    setSelectedDropdownTwo(event.target.value);
  }

  useEffect(()=>{
    if(selectedCategory){
      setInterestBadgeArray([...interestBadgeArray,selectedCategory])
    }
    if(selectedDropdownOne){
      setInterestBadgeArray([...interestBadgeArray,selectedDropdownOne])
    }
    if(selectedDropdownTwo){
      setInterestBadgeArray([...interestBadgeArray,selectedDropdownTwo])
    }
  },[selectedCategory,selectedDropdownOne, selectedDropdownTwo])

  return (
    <div className='study-create-page'>
      <div className='form-container'>
        <div className='title-segment'>
          <div className='form-title'>
            스터디 생성하기
          </div>
          
        </div>
        <div className='top-box'>
          <div>
            <div>카테고리를 선택해주세요.</div>
              <CategoryRadioGroup selectedCategory={selectedCategory} handleCategoryRadio={handleCategoryRadio}/>
              <div className='dropdown-section'>
                <DropdownOne selectedDropdownOne={selectedDropdownOne} handleDropdownOne={handleDropdownOne} selectedCategory={selectedCategory}/>
                {showDropdownTwo?<DropdownTwo selectedDropdownTwo={selectedDropdownTwo} handleDropdownTwo={handleDropdownTwo} selectedDropdownOne={selectedDropdownOne} />:""}
                {showSelfImproveInput?(
                  <input onChange={(event)=>setSelfImproveSubject(event.target.value)} placeholder={`${selectedDropdownOne}관련 과목을 적어주세요..`}/>
                ):""}
              </div>
              
            </div>
            <div>
              <div>스터디 tag</div>
              <BadgeGroup selectedCategory={selectedCategory} selectedDropdownOne={selectedDropdownOne} selectedDropdownTwo={selectedDropdownTwo} selfImproveSubject={selfImproveSubject}/>
            </div>
          <div>

          </div>
          
        </div>
        <div className='bottom-box'>

        </div>
        <div className='button-section'>
          <button className='submit-button'>등록</button>
        </div>
      </div>
    </div>
  )
}



export default Homepage;
