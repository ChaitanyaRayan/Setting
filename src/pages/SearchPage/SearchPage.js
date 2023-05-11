import React, { useState } from 'react'
import TopSearchSection from '../../components/SearchComponents/SimpleSearch/TopSearchSection'
import ResultsInFigure from '../../components/SearchComponents/ResultsInFigure/ResultsInFigure'
import ResultsOverTime from '../../components/SearchComponents/ResultsOverTime/ResultsOverTime'
import searchPageCss from './SearchPage.module.css'
import SearchTabs from '../../components/SearchComponents/SearchTabs/SearchTabs'
import Footer from '../../components/common/Footer/Footer'
import SavedSearch from '../../components/SearchComponents/InitialSearchScreen/SavedSearch/SavedSearch'
import RecentSearch from '../../components/SearchComponents/InitialSearchScreen/RecentSearch/RecentSearch'
import TrendingTopics from '../../components/SearchComponents/InitialSearchScreen/TrendingTopics/TrendingTopics'


function SearchPage() {
    const [initialState, setInitialState]= useState(false)

   const onSearch = ()=>{
        setInitialState(true)
    }

  return (
    <>
    <div className={searchPageCss.body}>
        {initialState ? (
            <>
        <TopSearchSection search={onSearch}/>
            <ResultsInFigure/>
        <ResultsOverTime/>
        <SearchTabs/>
            </>
        ):(
            <>
                <TopSearchSection search={onSearch}/>
        <div className={searchPageCss.initialSearch}>
        <SavedSearch/>
        <RecentSearch/>
        <TrendingTopics/>
        </div>
            </>
        )}
        
              
    </div>
        {/* <Footer/> */}
    </>
  )
}

export default SearchPage