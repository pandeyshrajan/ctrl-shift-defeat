import profileIcon from "../../assets/IMG_20240127_171651_857.jpg";

function SideBarComponent({ person }: any) {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <img alt={person.name} src={profileIcon} /> */}
            <div>
                <h2>{person.name}</h2>
                <p>{person.email}</p>
            </div>
        </div>
    );
}

export default SideBarComponent;
