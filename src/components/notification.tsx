import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import './notification.css'
import { useState } from "react";

export type NotificationPropsType = {
    message: string
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
    type?: 'info' | 'warning' | 'success' | 'error'
    onClose?: () => void
    duration?: number
}

const icons = {
    info: <IoIosInformationCircleOutline />,
    error: <IoMdCloseCircleOutline />,
    warning: <IoWarningOutline />,
    success: <IoCheckmarkCircleOutline/>
}

const Notification = (props: NotificationPropsType) => {
    const {message = '', position = 'top-right', type = 'info', onClose = () => {}} = props
    const closeHandler = ()=> {
        // doSomething
        onClose()
    }
    return (
        <div className={`notification ${type}`}>
            {icons[type]}
            {message}
            <IoMdCloseCircleOutline className="closeBtn" onClick={closeHandler}/>
        </div>
    )
}

export default Notification