import React from 'react';
import demo2 from "../../images/demo2.PNG";

const Course = () => {
    return (
        <div>
            <div className="d-flex w-full ">
        <div className="header-img glowing w-40 ">
                <img src="" alt="" />
            </div>
            <div className="header-img glowing w-40 ">
                <img src={demo2} alt="" />
            </div>
            <div className="header-img glowing w-40 ">
                <img src={demo2} alt="" />
            </div>
            <div className="header-img glowing w-40 ">
                <img src={demo2} alt="" />
            </div>
            <div className="header-img glowing w-40 ">
                <img src={demo2} alt="" />
            </div>
            <div className="header-img glowing w-40 ">
                <img src={demo2} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Course;