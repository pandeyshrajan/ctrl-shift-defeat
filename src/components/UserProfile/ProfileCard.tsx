import "./ProfileCard.css";
import { observer } from "mobx-react";
import { store } from "../../stores/userProfileStore";
import SlackIcon from "../../assets/logos--slack-icon.svg";
import MailIcon from "../../assets/logos--google-gmail.svg";
import CallIcon from "../../assets/fluent--call-32-filled.svg";
import BadegeIcon from "../../assets/mingcute--badge-fill.svg";
import PopUp from "../PopUp/PopUp";
import Tags from "../../utils/components/Tags";
import linkedInIcon from "../../assets/logos--linkedin-icon.svg";
import X from "../../assets/line-md--twitter-x.svg";
import profileImage from "../../assets/MoneyView.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";

enum TagType {
    "Interest",
    "Project",
}

function ProfileCard() {
    const toggleProfileIcon = () => {
        store.toggleProfileImage();
        console.log(store.getProfileImage());
    };

    const currentShownProfile = store.getCurrentProfile().employee;

    return (
        <>
            <span className="image-container profile-image rounded-lg shadow-2xl">
                <img className="image rounded-lg" src={store.profileImage} alt="ProfilePhoto" onMouseEnter={toggleProfileIcon} onMouseLeave={toggleProfileIcon} />
                {store.loggedInUser.employee.employeeId === store.currentProfile.employee.employeeId && <PopUp />}
                {/* <img className="badge-icon bg-gray-200 shadow-xl rounded-lg" src={BadegeIcon} onClick={toggleProfileIcon} /> */}
            </span>
            <div className="profile-info">
                <div className="profile-detail-container flex flex-col items-center">
                    <div className="profile-name font-bold ml-1">{currentShownProfile.name}</div>
                    <div className="profile-level text-gray-900 italic font-medium ml-1">{currentShownProfile.designation}</div>
                    <div className="mt-3">
                        <Tags tagType={"1"} />
                        <Tags tagType={"2"} />
                    </div>
                </div>
                <div className="profile-right">
                    <div className="deep-link-icons pt-2">
                        <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={SlackIcon} onClick={() => openInNewTab("https://openinapp.link/ggd8x")} />
                        <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={MailIcon} onClick={() => openInNewTab("mailto:example@gmail.com")} />
                        <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={linkedInIcon} />
                        <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={X} />
                        <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={CallIcon} onClick={() => openInNewTab("tel:+917070039357")} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(ProfileCard);
export const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};
