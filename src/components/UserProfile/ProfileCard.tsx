import "./ProfileCard.css";
import { observer } from "mobx-react";
import { store } from "../../stores/userProfileStore";
import SlackIcon from "../../assets/logos--slack-icon.svg";
import MailIcon from "../../assets/logos--google-gmail.svg";
import BadgeIcon from "../../assets/material-symbols--badge.svg";
import CallIcon from "../../assets/fluent--call-32-filled.svg";
import PopUp from "../PopUp/PopUp";

function ProfileCard() {
    const handleClick = () => {
        console.log("CLIKLCED");
        store.showPopUp();
    };

    return (
        <>
            <span className="animate-button-hover profile-image bg-white rounded-lg p-1 shadow-2xl">
                <img className=" image rounded-lg" src={store.getCurrentUser().profileImageURL[0]} alt="ProfilePhoto" />
            </span>
            <div>
                <div className="profile-details pl-20">
                    <div className="profile-name font-bold text-4xl text-gray-100 ml-1">{store.getCurrentUser().name}</div>
                    <div className="other-info">
                        <div className="profile-level text-slate-500 italic pt-2 font-medium ml-1">{store.getCurrentUser().designation}</div>
                        <div className="deep-links pt-2 flex flex-row">
                            {/* <Tabs value={store.getTabValue()} onChange={handleChange} textColor="secondary" indicatorColor="primary" aria-label="secondary tabs example"> */}
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={SlackIcon} />
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={MailIcon} />
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={BadgeIcon} />
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={CallIcon} />
                            <PopUp />
                            {/* </Tabs> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(ProfileCard);
