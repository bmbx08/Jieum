import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dropDownArrayObject } from './arrayObject';
import { majorSubjectArrayObject } from './arrayObject';
import "./Homepage.style.css"
import CategoryRadioGroup from './components/CategoryRadioGroup';
import DropdownOne from './components/DropdownOne';
import DropdownTwo from './components/DropdownTwo';
import BadgeGroup from './components/BadgeGroup';
import StudyTable from './components/StudyTable';

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
  const [studyPeriod, setStudyPeriod] = useState(null);
  const [recruitNumber, setRecruitNumber] = useState(null);
  const [page,setPage] = useState(1);

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

  const handleStudyPeriod =(event)=>{
    if(event.target.innerText==="4주"){
      setStudyPeriod(4);
    }
    else if(event.target.innerText==="8주"){
      setStudyPeriod(8);
    }
    else if(event.target.innerText==="16주"){
      setStudyPeriod(16);
    }
  }

  const handleRecruitNumber = (event) => {
    if(event.target.innerText==="2명"){
      setRecruitNumber(2);
    }
    else if(event.target.innerText==="4명"){
      setRecruitNumber(4);
    }
    else if(event.target.innerText==="8명"){
      setRecruitNumber(8);
    }
  }

  const navigatePage=(event)=>{
    if(event.target.innerText==="다음"){
      setPage(2);
    }
    else if(event.target.innerText==="이전"){
      setPage(1);
    }
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
  
  if(page===1){
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
              <h4>카테고리를 선택해주세요.</h4>
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
                <h4>스터디 기간: {studyPeriod}</h4>
                <div>
                  <button onClick={handleStudyPeriod}>4주</button>
                  <button onClick={handleStudyPeriod}>8주</button>
                  <button onClick={handleStudyPeriod}>16주</button>
                  <input placeholder='직접 입력..'/>
                </div>
              </div>
  
              <div>
                <h4>모집인원: {recruitNumber}</h4>
                <div>
                  <button onClick={handleRecruitNumber}>2명</button>
                  <button onClick={handleRecruitNumber}>4명</button>
                  <button onClick={handleRecruitNumber}>8명</button>
                </div>
              </div>
  
              <div>
                
              </div>
  
              {/* <div>
                <div>스터디 tag</div>
                <BadgeGroup selectedCategory={selectedCategory} selectedDropdownOne={selectedDropdownOne} selectedDropdownTwo={selectedDropdownTwo} selfImproveSubject={selfImproveSubject}/>
              </div> */}
            <div>
  
            </div>
            
          </div>
          <div className='bottom-box'>
  
          </div>
          
          <div className='navigate-section'>
            <div>Page {page} of 2</div>
            <button onClick={navigatePage}>다음</button>
          </div>
        </div>
      </div>
    )
  }

  if(page===2){
    return(
      <div className='study-create-page'>
        <div className='form-container'>
          <div className='title-segment'>
            <div className='form-title'>
              스터디 생성하기
            </div>
            
          </div>
          <div className='top-box'>
              <div>
                <div>스터디 tag</div>
                <BadgeGroup selectedCategory={selectedCategory} selectedDropdownOne={selectedDropdownOne} selectedDropdownTwo={selectedDropdownTwo} selfImproveSubject={selfImproveSubject}/>
              </div>
              <div>
                <StudyTable studyPeriod={studyPeriod}/>
              </div>
            <div>

            </div>
            
          </div>
          <div className='bottom-box'>
            
          </div>
          
          <div className='navigate-section'>
            <button onClick={navigatePage}>이전</button>
            <div>Page {page} of 2</div> 
          </div>
          
  
          <div className='button-section'>
            <button className='submit-button'>등록</button>
          </div>
        </div>
      </div>
    )
  }
  
}



export default Homepage;
