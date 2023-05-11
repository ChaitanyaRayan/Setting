import React, { useState } from 'react'
import notificationsCss from './SettingsNotification.module.css'
import Notifications from './Notifications/Notifications'
import Alerts from './Alerts/Alerts'
function SettingsNotifications() {

    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            label: 'Notifications',
            content: <Notifications/>
        },
        {
            label: 'Alerts',
            content: <Alerts/>
        },
        
    ]

  return (
    <>
    <div className={notificationsCss.body}>
    <div className={`${notificationsCss.settingTabs} col-2 `}>
            {tabs.map((tab, index) =>(
                <label key={index} onClick={() => setActiveTab(index)} className={activeTab === index ? `${notificationsCss.active}` : ''}>
                    {tab.label}
                    <div className={activeTab === index ? `${notificationsCss.activeBar}` : ''}></div>
                </label>
            ))}
        </div>
            <hr className={notificationsCss.hr}/>
        <div>
            {tabs[activeTab].content}
        </div>
    </div>
    </>
  )
}

export default SettingsNotifications