import React from "react"

const ModalConfirm = ({submit_record, prevStep}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Confirm Submit</h4>
                </div>
                <div className="modal-body">
                    <button className="btn btn-danger modal-button" onClick={prevStep}>Cancel</button>
                    <button className="btn btn-success modal-button" onClick={submit_record}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm;