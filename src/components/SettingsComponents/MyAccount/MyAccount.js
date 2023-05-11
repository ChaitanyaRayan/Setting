import React, { useState } from 'react'
import SubscriptionDetails from './SubscriptionDetails/SubscriptionDetails'
import myAccountCss from './MyAccount.module.css'
import ProfileSecurity from './ProfileSecurity/ProfileSecurity'
import ManageUsers from './ManageUsers/ManageUsers'
const MyAccount = () => {
     
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            label: 'Subscription Details',
            content: <SubscriptionDetails/>
        },
        {
            label: 'Manage Users',
            content: <ManageUsers/>
        },
        {
            label: 'Usage & History',
            content: <SubscriptionDetails/>
        },
        {
            label: 'Billing',
            content: <SubscriptionDetails/>
        },
        {
            label: 'Profile & Security',
            content: <ProfileSecurity/>
        },
    ]

  return (
    <>
    <div className={myAccountCss.body}>
    <div className={`${myAccountCss.settingTabs} col-8 `}>
            {tabs.map((tab, index) =>(
                <label key={index} onClick={() => setActiveTab(index)} className={activeTab === index ? `${myAccountCss.active}` : ''}>
                    {tab.label}
                    <div className={activeTab === index ? `${myAccountCss.activeBar}` : ''}></div>
                </label>
            ))}
        </div>
            <hr className={myAccountCss.hr}/>
        <div>
            {tabs[activeTab].content}
        </div>
    </div>
    </>
  )
}

export default MyAccount