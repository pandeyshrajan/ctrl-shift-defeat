import "./ProfileCard.css";
import { observer } from "mobx-react";
import { store } from "../../stores/profileStore";
import SlackIcon from "../../assets/logos--slack-icon.svg";
import MailIcon from "../../assets/logos--google-gmail.svg";
import BadgeIcon from "../../assets/material-symbols--badge.svg";
import CallIcon from "../../assets/fluent--call-32-filled.svg";
import BadegeIcon from "../../assets/mingcute--badge-fill.svg";
import PopUp from "../PopUp/PopUp";
import Tags from "../../utils/components/Tags";

function ProfileCard() {
    const toggleProfileIcon = () => {
        store.toggleProfileImage();
        console.log(store.getProfileImage());
    };

    return (
        <>
            <span className="image-container profile-image rounded-lg shadow-2xl">
                <img className="image rounded-lg" src={store.getProfileImage()} alt="ProfilePhoto" />
                <img className="badge-icon bg-gray-200 shadow-xl rounded-lg" src={BadegeIcon} onClick={toggleProfileIcon} />
            </span>
            <div>
                <div className="profile-name font-bold text-4xl text-gray-100 ml-1">{store.getCurrentUser().name}</div>
                <div className="profile-level text-slate-500 italic pt-2 font-medium ml-1">{store.getCurrentUser().designation}</div>
                <div>
                    <Tags />
                    <Tags />
                </div>
            </div>
            <div>
                <div className="profile-details">
                    <div className="other-info">
                        <div className="deep-links pt-2 flex flex-row">
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={SlackIcon} />
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={MailIcon} />
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={BadgeIcon} />
                            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg" src={CallIcon} />
                            {store.isCurrentUser && <PopUp />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(ProfileCard);
