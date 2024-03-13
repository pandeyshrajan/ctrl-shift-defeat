import profileImg from "../../assets/MoneyView.jpeg";
import "./TreeNodeCard.css";
import { DEFUALT_INITIALISE_EMPLOYEE, EMPLOYEE_DUMMY } from "../../utils/contants";
import { store } from "../../stores/userProfileStore";
import Employee from "../../models/Employee";
import { observer } from "mobx-react";

// const testData: Employee = { name: "Lokesh", employeeId: "0", designation: "HA BHAIII BHAROSA RAKH", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [{ name: "Ramesh", employeeId: "0", designation: "BRUH WTF", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/MoneyView.jpeg", isAdmin: true }], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false };

function TreeNodeCard(prop: any) {
    // const image = document.querySelector(".image");
    // const hover = document.querySelector(".hover");
    // const modal = document.querySelector(".modal");
    // const close = document.querySelector(".close");

    const { toggleNode, nodeDatum } = prop;
    // console.log(EMPLOYEE_DUMMY.profileImageURL);

    // function show() {
    //     hover?.classList.add("active");
    //     modal?.classList.add("show");
    // }

    // function hide() {
    //     hover?.classList.remove("active");
    //     modal?.classList.remove("show");
    // }

    // image?.addEventListener("click", show);
    // close?.addEventListener("click", hide);

    const addNewChild = (e: any) => {
        console.log("FTECH CALL ");

        store.fetchReportees(nodeDatum.employeeId);
    };

    const addManager = () => {
        // console.log(nodeDatum);
        store.newManager(nodeDatum.employeeId);
    };

    // const updateProfile = () => {
    //     store.setCurrentUser(nodeDatum);
    //     store.setTreeData(nodeDatum);
    // };

    return (
        <>
            <div className="container">
                <div className="card flex flex-col content-center bg-gradient-to-r from-white to-stone-300 m-2 rounded-lg">
                    <div className="header">
                        {/* <div className="hamburger-menu">
                            <div className="center"></div>
                        </div>
                        <a href="#" className="mail">
                            <i className="far fa-envelope"></i>
                        </a> */}
                        <div className="main">
                            {/* <div className="image"> */}
                            <img className="node-image" src={profileImg} alt="ProfilePhoto" />
                            {/* <div className="hover">
                                    <i className="fas fa-camera fa-2x"></i>
                                </div> */}
                            {/* </div> */}
                            {/* <h3 className="sub-name">Software Engineer Intern</h3> */}
                        </div>
                    </div>

                    <div className="content place-content-center -translate-y-5 ">
                        <div className="left">
                            <div className="about-container text-center">
                                {/* <h3 className="title">About</h3> */}
                                <h3 className="name text-gray-900 text-3xl">{nodeDatum.name}</h3>
                                <p className="text text-1xl"> {nodeDatum.designation} </p>
                            </div>
                            {/* <div className="icons-container">
                                <a href="#" className="icon">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                                <a href="#" className="icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div> */}
                            <div className="buttons-wrap p-2">
                                <div className="follow-wrap">
                                    {/* {nodeDatum.children && ( */}
                                    <button className="follow" onClick={addManager}>
                                        Manager
                                        {/* {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"} */}
                                    </button>
                                    {/* )} */}
                                    <button className="follow basis-1/2" onClick={addNewChild}>
                                        Reporties
                                    </button>
                                </div>
                                {/* <div className="share-wrap">
                                    <a href="#" className="share">
                                        Share
                                    </a>
                                </div> */}
                            </div>
                        </div>

                        {/* <div className="right p">
                            <div> */}
                        {/* <h3 className="number">91</h3> */}
                        {/* <span className="icon-[logos--slack-icon]"></span>
                                <h3 className="number-title">Slack</h3>
                            </div>
                            <div> */}
                        {/* <h3 className="number">2.4K</h3> */}
                        {/* <h3 className="number-title">Mail</h3> */}
                        {/* </div>
                            <div> */}
                        {/* <h3 className="number">4.7K</h3> */}
                        {/* <h3 className="number-title">Followers</h3>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(TreeNodeCard);
