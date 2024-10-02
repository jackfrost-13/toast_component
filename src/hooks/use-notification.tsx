import { useState, useCallback } from "react"
import Notification, {NotificationPropsType} from "../components/notification"


const useNotification = () => {
    const [notificationProps, setNotificationProps] = useState<NotificationPropsType[]>([])

    const triggerNotification = useCallback((notification: NotificationPropsType) => {
        setNotificationProps((prev) => [...prev, notification])
        setTimeout(()=>{
            setNotificationProps((prev) => prev.filter(
                (item) => item !== notification
            ));
        }, notification.duration);
    },[])

    const NotificationComponent = (
        <>
            <div className="top-left">
                {notificationProps.filter(item => item.position === 'top-left').map(item => (
                <Notification {...item}/>
            ))}
            </div>

            <div className="top-right">
                {notificationProps.filter(item => item.position === 'top-right').map(item => (
                <Notification {...item}/>
            ))}
            </div>

            <div className="bottom-left">
                {notificationProps.filter(item => item.position === 'bottom-left').map(item => (
                <Notification {...item}/>
            ))}
            </div>

            <div className="bottom-right">
                {notificationProps.filter(item => item.position === 'bottom-right').map(item => (
                <Notification {...item}/>
            ))}
            </div>
        </>
    );

    return {triggerNotification, NotificationComponent}
}

export default useNotification
