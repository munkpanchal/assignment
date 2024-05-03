// Modal as a separate component
import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, data }) {
    const ref = useRef();

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog ref={ref} onCancel={closeModal} onClick={closeModal}>
            <div className="dialog-wrapper">
                <h1>job description</h1>
                <h2>About the Company</h2>
                <p>{data?.jobDetailsFromCompany}</p>
                <h2>About the Job Role</h2>
                <p>{data?.jobDetailsFromCompany}</p>
                <p>{data?.jobDetailsFromCompany}</p>
            </div>
            {/* <button onClick={closeModal}>Close</button> */}
        </dialog>
    );
}

export default Modal;
