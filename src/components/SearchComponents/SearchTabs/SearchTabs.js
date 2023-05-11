import React, { useState } from 'react'
import SimpleSearchArticles from './SearchArticles.js/SimpleSearchArticles';
import DashBoardView from './DashboardView/DashBoardView';
import searchTabCss from './SeachTabs.module.css'

function SearchTabs() {

    const [activateTab, setActivateTab]= useState(0);

    const tabs = [
        {
            label: 'All Results',
            content: <SimpleSearchArticles/>
        },
        {
            label: 'Dashboard View',
            content: <DashBoardView/>
        },
        {
            label: 'Create New Dashboard',
            content: 'New DashBoard'
        }
        ,
        {
            label: 'Create Newsletter',
            content: 'News Letter'
        }
    ]

  return (
    <>
    <div className={searchTabCss.body}>
        <div className={`${searchTabCss.tabs} col-4`}>
            {tabs.map((tab, index) =>(
                <label key={index} onClick={() => setActivateTab(index)} className={activateTab === index ? `${searchTabCss.active}` : ''}>
                    {tab.label}
                    <div className={activateTab === index ? `${searchTabCss.activeBar}` : ''}></div>
                </label>
            ))}
        </div>
    </div>
        <div>
            {tabs[activateTab].content}
        </div>
        </>
  )
}

export default SearchTabs