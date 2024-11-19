import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./StudyCreatePage.style.css";
import CategoryRadioGroup from "./components/CategoryRadioGroup";
import DropdownOne from "./components/DropdownOne";
import DropdownTwo from "./components/DropdownTwo";
import BadgeGroup from "./components/BadgeGroup";
import StudyTable from "./components/StudyTable";
import SubjectSearchInput from "./components/SubjectSearchInput";
import RecruitSlider from "./components/RecruitSlider";
import SliderExample from "./components/SliderExample";
import StudyPeriodDropdown from "./components/StudyPeriodDropdown";
import RecruitRadioButton from "./components/RecruitRadioButton";

const StudyCreatePage = () => {
  // let count = useSelector((state)=>state.count);
  
  // const increase= ()=>{
  //   dispatch({type:"INCREMENT"})
  // }

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDropdownOne, setSelectedDropdownOne] = useState("");

  // const [showDropdownTwo,setShowDropdownTwo] = useState(false);
  // const [selectedDropdownTwo, setSelectedDropdownTwo]=useState("");

  const [showSubjectInput, setShowSubjectInput] = useState(false);
  const [subjectInputContent, setSubjectInputContent] = useState("");

  const [showSelfImproveInput, setShowSelfImproveInput] = useState(false);
  const [selfImproveSubject, setSelfImproveSubject] = useState("");
  const [interestBadgeArray, setInterestBadgeArray] = useState([]);

  const [studyPeriod, setStudyPeriod] = useState("");
  const [selectedPeriodDropdown, setSelectedPeriodDropdown] = useState("");
  const [showStudyPeriodInput, setShowStudyPeriodInput] = useState(false);
  const [recruitNumber, setRecruitNumber] = useState(null);
  const [limitlessRecruitBoolean, setLimitlessRecruitBoolean] = useState(false);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const handleCategoryRadio = (event) => {
    setSelectedCategory(event.target.value);
    // setShowDropdownTwo(false);
    setShowSubjectInput(false);
    setShowSelfImproveInput(false);
    setSelfImproveSubject("");
    setSelectedDropdownOne("");
    // setSelectedDropdownTwo("");
  };

  const handleDropdownOne = (event) => {
    setSelectedDropdownOne(event.target.value);
    setShowSubjectInput(true);
    // if(selectedCategory!=="자기개발"){
    //   setShowDropdownTwo(true);
    // }
    // if(selectedCategory==="자기개발"){
    //   setShowSelfImproveInput(true);
    // }
  };

  // const handleDropdownTwo = (event)=>{
  //   setSelectedDropdownTwo(event.target.value);
  // }

  const handleSubjectInput = (event) => {
    setSubjectInputContent(event.target.value);
  };

  const handleStudyPeriodDropdown = (event) => {
    setSelectedPeriodDropdown(event.target.value);

    if (event.target.value === "직접 입력") {
      setShowStudyPeriodInput(true);
    } else {
      setStudyPeriod(event.target.value);
      setShowStudyPeriodInput(false);
    }
  };

  const handleRecruitRadio = () => {
    setLimitlessRecruitBoolean((prevState) => !prevState);
    // if(limitlessRecruitBoolean===true){
    //   setLimitlessRecruitBoolean(false);
    // }
    // if(limitlessRecruitBoolean===false){
    //   setLimitlessRecruitBoolean(true);
    // }
  };

  const navigatePage = (event) => {
    if (event.target.innerText === "다음") {
      setPage(2);
    } else if (event.target.innerText === "이전") {
      setPage(1);
    }
  };

  const handleFormSubmit= async (e)=>{
    e.preventDefault();
    console.log("submit data!!");
    const createdStudyData={
      studyInfo:{
        subject: subjectInputContent,
        category: selectedCategory,
        subCategory: selectedDropdownOne,
        studyPeriod: studyPeriod,
        limitlessRecruit: limitlessRecruitBoolean,
        recruitSize: recruitNumber,
        interestBadgeArray: interestBadgeArray,
      },
      weeklySchedule:{
        week1:"aaaa1",
        week2:"aaaa2",
      },
      blogPostContent:{
        blogTitle: blogTitle,
        blogContent: blogContent,
      },
    }

    dispatch({type:"CREATE_STUDYGROUP",payload: createdStudyData});
  }

  useEffect(() => {
    if (selectedCategory) {
      setInterestBadgeArray([...interestBadgeArray, selectedCategory]);
    }
    if (selectedDropdownOne) {
      setInterestBadgeArray([...interestBadgeArray, selectedDropdownOne]);
    }
    // if(selectedDropdownTwo){
    //   setInterestBadgeArray([...interestBadgeArray,selectedDropdownTwo])
    // }
  }, [selectedCategory, selectedDropdownOne, subjectInputContent]);

  return (
    <div className="study-create-page">
      <form onSubmit={handleFormSubmit} className="form-container">
        {page === 1 ? (
          <>
            <div className="title-segment">
              <div className="form-title font-style">스터디 생성하기</div>
            </div>
            <div className="top-box">
              <div>
                <div className="section-title font-style">
                  카테고리를 선택해주세요.
                </div>
                <CategoryRadioGroup
                  selectedCategory={selectedCategory}
                  handleCategoryRadio={handleCategoryRadio}
                />
                <DropdownOne
                  selectedDropdownOne={selectedDropdownOne}
                  handleDropdownOne={handleDropdownOne}
                  selectedCategory={selectedCategory}
                />
                {/* {showDropdownTwo?<DropdownTwo selectedDropdownTwo={selectedDropdownTwo} handleDropdownTwo={handleDropdownTwo} selectedDropdownOne={selectedDropdownOne} />:""} */}
                {showSelfImproveInput ? (
                  <input
                    onChange={(event) =>
                      setSelfImproveSubject(event.target.value)
                    }
                    placeholder={`${selectedDropdownOne}관련 과목을 적어주세요..`}
                  />
                ) : (
                  ""
                )}
                {/* {showSubjectInput?():""}   */}
                <SubjectSearchInput handleSubjectInput={handleSubjectInput} />
              </div>
              <div className="mb-2">
                <div className="section-title font-style">스터디 기간</div>
                <div className="flex align-center">
                  <StudyPeriodDropdown
                    studyPeriod={studyPeriod}
                    handleStudyPeriodDropdown={handleStudyPeriodDropdown}
                    selectedPeriodDropdown={selectedPeriodDropdown}
                  />
                  {showStudyPeriodInput ? (
                    <>
                      <input
                        onChange={(event) => setStudyPeriod(event.target.value)}
                        className="subject-input period-input"
                      />
                      주
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mb-2">
                <div className="section-title font-style">
                  모집인원: {recruitNumber}명
                </div>
                <div>
                  <RecruitRadioButton
                    limitlessRecruitBoolean={limitlessRecruitBoolean}
                    handleRecruitRadio={handleRecruitRadio}
                  />
                  <RecruitSlider
                    setRecruitNumber={setRecruitNumber}
                    limitlessRecruitBoolean={limitlessRecruitBoolean}
                  />
                  {/* <SliderExample/> */}
                </div>
              </div>

              <div></div>

              {/* <div>
                  <div>스터디 tag</div>
                  <BadgeGroup selectedCategory={selectedCategory} selectedDropdownOne={selectedDropdownOne} selectedDropdownTwo={selectedDropdownTwo} selfImproveSubject={selfImproveSubject}/>
                </div> */}
              <div></div>
            </div>

            <div className="navigate-section">
              <div>Page {page} of 2</div>
              <button onClick={navigatePage} className="navigate-button">
                다음
              </button>
            </div>
          </>
        ) : (
          ""
        )}

        {page === 2 ? (
          <>
            <div className="title-segment">
              <div className="form-title font-style">스터디 생성하기</div>
            </div>
            <div className="top-box">
              <div>
                <div className="section-title font-style">스터디 tag</div>
                <BadgeGroup
                  selectedCategory={selectedCategory}
                  selectedDropdownOne={selectedDropdownOne}
                  selfImproveSubject={selfImproveSubject}
                  subjectInputContent={subjectInputContent}
                />
              </div>
              <div>
                <div className="section-title font-style">주차별 학습 일정</div>
                <StudyTable studyPeriod={studyPeriod} />
              </div>
              <div></div>
            </div>
            <div className="bottom-box">
              <div className="title-part">
                <input onChange={(event)=>setBlogTitle(event.target.value)} placeholder="제목" className="title-input" />
              </div>
              <div className="content-part">
                <textarea
                  onChange={(event)=>setBlogContent(event.target.value)} 
                  placeholder="내용을 입력하세요. (시간, 장소, 진행 방식등)"
                  className="content-textarea"
                />
              </div>
            </div>

            <div className="navigate-section">
              <div>Page {page} of 2</div>

              <div className="button-section">
                <button onClick={navigatePage} className="navigate-button">
                  이전
                </button>
                <button type="submit" className="submit-button">등록</button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default StudyCreatePage;
