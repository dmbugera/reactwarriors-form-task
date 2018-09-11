import React from 'react'

const Tabs = props => {
    const {
        activeTab,

    } = props;

    return (
        <div className="tabs">
            <div className=
                     {activeTab > 1 ? "tab-item complete" : "tab-item"}
            >
                <div className={activeTab === 1 ? "tab-item__index active" : "tab-item__index"}>1</div>
                <div className="tab-item__title mt-1">Basic</div>
            </div>
            <div className=
                     {activeTab > 2 ? "tab-item complete" : "tab-item"}
            >
                <div className={activeTab === 2 ? "tab-item__index active" : "tab-item__index"}>2</div>
                <div className="tab-item__title mt-1">Contacts</div>
            </div>
            <div className=
                     {activeTab > 3 ? "tab-item complete" : "tab-item"}
            >
                <div className={activeTab === 3 ? "tab-item__index active" : "tab-item__index"}>3</div>
                <div className="tab-item__title mt-1">Avatar</div>
            </div>
            <div className='tab-item'>
                <div className={activeTab === 4 ? "tab-item__index active" : "tab-item__index"}>4</div>
                <div className="tab-item__title mt-1">Final</div>
            </div>
        </div>
    )
};

export default Tabs;
