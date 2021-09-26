import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "../body/Body.css";

const Body = (props) => {
    const { members, eventHandler, selectedMembers } = props;

    // total amount calculate
    let total = 0;
    for (const member of selectedMembers) {
        total += Number(member.salary);
    }
    return (
        <div className=" body_part container-fluid">
            <div className="row">
                <div className="col-9">
                    <DisplayMember
                        eventHandler={eventHandler}
                        members={members}
                    ></DisplayMember>
                </div>
                <div className=" total col-3 my-4 h-50">

                    <h4>Total Select {selectedMembers.length} Teacher</h4>
                    <h5>Total Cost: {total} Taka</h5>
                    <hr />
                    <hr />
                    <h5>List of The Selected Teacher Name: </h5>

                    {selectedMembers.map((member) => (
                        <SelectedMembers name={member.name}></SelectedMembers>
                    ))}
                </div>
            </div>
        </div>
    );
};
function SelectedMembers(props) {
    const { name } = props;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}
function DisplayMember(props) {
    const { members, eventHandler } = props;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {members.map((member) => {
                return (
                    <div className="my-3 mx-0" key={member.mobile}>
                        <div className="card teachers" style={{ width: "300px" }}>
                            <div className='text-center'>
                                <img src={member.img} className="card-img-top rounded-circle w-60" alt="..." />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{member.name}</h4>
                                <p className="card-text"><b>Profession:</b> {member.profession}</p>
                                <p className="card-text"><b>Education:</b> {member.education}</p>
                                <p className="card-text"><b>Mobile:</b> {member.mobile}</p>
                                <p className="card-text"><b>Email:</b> {member.email}</p>
                                <p className="card-text"><b>Salary:</b> {member.salary} Taka</p>
                                <div>
                                    <button
                                        onClick={() => eventHandler(member)}
                                        className="btn btn-primary"
                                    >
                                        {element} add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Body;
