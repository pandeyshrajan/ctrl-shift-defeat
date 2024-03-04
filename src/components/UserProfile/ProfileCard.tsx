import profileIcon from "../../assets/IMG_20240127_171651_857.jpg";
import "./ProfileCard.css";
import { observer } from "mobx-react";

function ProfileCard({ rootStore }: any) {
    return (
        <>
            <span className="profile-image bg-white rounded-lg p-1 shadow-2xl">
                <img className="image rounded-lg" src={rootStore.userProfileStore.currentUser.profileImageURL} alt="ProfilePhoto" />
            </span>
            <div>
                <div className="profile-details pl-20">
                    <div className="profile-name font-bold text-4xl text-gray-900">Shrajan Pandey</div>
                    <div className="other-info">
                        <div className="profile-level text-slate-100 italic pt-2 font-medium">Software Engineer Intern</div>
                        <div className="deep-links pt-2">DEEP LINKS</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(ProfileCard);
