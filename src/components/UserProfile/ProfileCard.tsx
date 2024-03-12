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
import { EMPLOYEE_DUMMY } from "../../utils/contants";

function ProfileCard() {
    const toggleProfileIcon = () => {
        store.toggleProfileImage();
        console.log(store.getProfileImage());
    };

    return (
        <>
            <span className="image-container profile-image rounded-lg shadow-2xl">
                <img className="image rounded-lg" src={EMPLOYEE_DUMMY.profileImageUrl} alt="ProfilePhoto" />
                <img className="badge-icon bg-gray-200 shadow-xl rounded-lg" src={BadegeIcon} onClick={toggleProfileIcon} />
            </span>
            <div className="flex flex-col items-center">
                <div className="profile-name font-bold text-4xl ml-1">{store.getCurrentUser().name}</div>
                <div className="profile-level text-gray-900 italic pt-2 font-medium ml-1">{store.getCurrentUser().designation}</div>
                <div className="mt-3">
                    <Tags color="orange" />
                    <Tags />
                </div>
            </div>
            <div>
                <div className="profile-details">
                    <div className="other-info">
                        <div className="deep-link-icons pt-2 flex flex-row">
                            <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={SlackIcon} onClick={() => openInNewTab("https://openinapp.link/ggd8x")} />
                            <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={MailIcon} onClick={() => openInNewTab("mailto:example@gmail.com")} />
                            <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={linkedInIcon} />
                            <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={X} />
                            <img className="animate-button-hover deep-link m-1 bg-white p-2 rounded-lg" src={CallIcon} onClick={() => openInNewTab("tel:+917070039357")} />
                            {store.isCurrentUser && <PopUp />}
                        </div>
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
