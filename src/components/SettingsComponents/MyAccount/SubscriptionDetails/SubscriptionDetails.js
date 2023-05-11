import React from "react";
import subscriptionCss from "./SubscriptionDetails.module.css";

const SubscriptionDetails = () => {
  return (
    <div className={subscriptionCss.body}>
      <div className={subscriptionCss.topSection}>
        <div className={subscriptionCss.titleSection}>
          <span className={subscriptionCss.title}>
            AlphametricX - Pro
            <br/>
            <span className={subscriptionCss.titleOne}>Traditional Media</span>
          </span>
          <div className={subscriptionCss.rightSection}>
            <button className={`${subscriptionCss.button} btn btn-success`}>
              Active
            </button>
            <span className={subscriptionCss.expire}>
              Expires on
              <span className={subscriptionCss.expireOne}>20 Jul 2023</span>
            </span>
          </div>
        </div>
        <div className={subscriptionCss.paragrahpSection}>
          <div className={subscriptionCss.para}>
            Your subscription includes access to advanced search, standard
            dashboards, advanced dashboards and newsletters
          </div>
          <div>
          <a href="*" className={subscriptionCss.update}>
            Upgrade Plan
          </a>
          </div>
        </div>
      <hr className={subscriptionCss.hr}/>
      </div>
      <div className={subscriptionCss.valueSection}>
        <div className={subscriptionCss.value}>
          <div className={subscriptionCss.number}>
            <span>
              <span className="Headline4">10</span>/20
            </span>
          </div>
          <div className={subscriptionCss.activeUser}>Active Users</div>
        </div>
        <div className={subscriptionCss.value}>
          <div className={subscriptionCss.number}>
            <span>
              <span className="Headline4">10</span>/20
            </span>
          </div>
          <div className={subscriptionCss.activeUser}>Active Users</div>
        </div>
        <div className={subscriptionCss.value}>
          <div className={subscriptionCss.number}>
            <span>
              <span className="Headline4">10</span>/20
            </span>
          </div>
          <div className={subscriptionCss.activeUser}>Active Users</div>
        </div>
        <div className={subscriptionCss.value}>
          <div className={subscriptionCss.number}>
            <span>
              <span className="Headline4">10</span>/20
            </span>
          </div>
          <div className={subscriptionCss.activeUser}>Active Users</div>
        </div>
      </div>
      <hr className={subscriptionCss.hr2}/>
    <button className={subscriptionCss.callbacKButton}>
  <label className={subscriptionCss.label}>Need Help?</label>
  Request Callback
</button>
    </div>
  );
};

export default SubscriptionDetails;
