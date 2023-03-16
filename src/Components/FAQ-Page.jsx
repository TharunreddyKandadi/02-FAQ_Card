import "./FAQ-Page.css";
import React,{useState} from 'react';


export default function FaqPage() {
  const [BtnClick,setBtnClick]=useState({
    div1:false,
    div2:false,
    div3:false,
    div4:false,
    div5:false,
  })

  const HandleBtn=(parms)=>{
      setBtnClick({...BtnClick,[parms]:!BtnClick[parms]})
  }
  return (
    <>
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className={BtnClick?.div1 ? "faq active" : "faq"}>
          <h3 className="faq-title">What is Twitter?</h3>
          <p className="faq-text">
            Twitter is a service for friends, family, and coworkers to
            communicate and stay connected through the exchange of quick,
            frequent messages. People post Tweets, which may contain photos,
            videos, links, and text.
          </p>
          <button onClick={()=>{HandleBtn("div1")}} className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={BtnClick?.div2 ? "faq active" : "faq"}>
          <h3 className="faq-title">Do I need anything special to use it?</h3>
          <p className="faq-text">
            All you need to use Twitter is an internet connection or a mobile
            phone. Join us here! Once you're in, begin finding and following
            accounts whose Tweets interest you.
          </p>
          <button onClick={()=>{HandleBtn("div2")}}  className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={BtnClick?.div3 ? "faq active" : "faq"}>
          <h3 className="faq-title">What's a Tweet?</h3>
          <p className="faq-text">
            A Tweet is any message posted to Twitter which may contain photos,
            videos, links, and text. Click or tap the Tweet button to post the
            update to your profile.
          </p>
          <button onClick={()=>{HandleBtn("div3")}}  className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={BtnClick?.div4 ? "faq active" : "faq"}>
          <h3 className="faq-title">Can I edit a Tweet once I've posted it?</h3>
          <p className="faq-text">
            Editing Tweets is a feature available to Twitter Blue subscribers.
            If you’re not a subscriber you won’t be able to edit a Tweet once
            you’ve posted it, but you will be able to delete your Tweet.
          </p>
          <button onClick={()=>{HandleBtn("div4")}}  className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={BtnClick?.div5 ? "faq active" : "faq"}>
          <h3 className="faq-title">How do I find people to follow?</h3>
          <p className="faq-text">
            When you create an account, you can search for people by name or
            username, import friends from other networks, or invite friends via
            email.
          </p>
          <button onClick={()=>{HandleBtn("div5")}}  className="faq-toggle">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </>
  );
}
