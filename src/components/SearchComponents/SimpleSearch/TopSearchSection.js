import React from 'react';
import topSearchCss from './TopSearchSection.module.css'
import { FaArrowDown, FaArrowLeft, FaDotCircle, FaSave } from 'react-icons/fa';

function TopSearchSection({search}) {

    const onSearch =()=>{
        search()
    }

  return (
    <div className={topSearchCss.topSection}>
        <div className={topSearchCss.titleSavebutton}>
            <div className={topSearchCss.title}>
                <FaArrowLeft/> &nbsp;
                <span >Search<span className={topSearchCss.newSearch}>/New Search</span></span>
            </div>
            <div className={topSearchCss.saveMoreIcons}>
                <FaSave/> <FaDotCircle/>
            </div>
        </div>

        <div className={topSearchCss.searchForm}>
            <select>
                <option value="Simple Search">Simple Search</option>
                <option value="Advance Search">Advance Search</option>
                <option value="Sample Search">Sample Search</option>
            </select>

            <input type='text' placeholder='Enter Query'/>
            <button type='submit' onClick={onSearch} className={topSearchCss.searchButton}>Search</button>

        </div>

        <div className={topSearchCss.selectTypes}>
            <div className={topSearchCss.typeSelected}>
                <div className={topSearchCss.typeSection}>
                 <div className={topSearchCss.typeName}> Media Type</div>
                    <div><FaArrowDown/></div>
                </div>
                <div className={topSearchCss.selectItem}>
                    <label className={topSearchCss.selectedChip}>All Media Types</label>
                    <label className ={topSearchCss.dots}>...</label>
                </div>
            </div>
            <div className={topSearchCss.typeSelected}>
                <div className={topSearchCss.typeSection}>
                <label className={topSearchCss.typeName}> Location </label>
                <FaArrowDown/>
                </div>
                <div className={topSearchCss.selectItem}>
                    <label className={topSearchCss.selectedChip}>All Location & Regions</label>
                    <label className ={topSearchCss.dots}>...</label>
                </div>
            </div>
            <div className={topSearchCss.typeSelected}>
                <div className={topSearchCss.typeSection}>
                <label className={topSearchCss.typeName}> Language</label>
                <FaArrowDown/>
                </div>
                <div className={topSearchCss.selectItem}>
                    <label className={topSearchCss.selectedChip}>All Languages </label>
                    <label className ={topSearchCss.dots}>...</label>
                </div>
            </div>
            <div className={topSearchCss.typeSelected}>
                <div className={topSearchCss.typeSection}>
                <label className={topSearchCss.typeName}> Timeline</label>
                <FaArrowDown/>
                </div>
                <div className={topSearchCss.selectItem}>
                    <label className={topSearchCss.selectedChip}>1D</label>
                    <label className ={topSearchCss.dots}>...</label>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default TopSearchSection