import { useState, useCallback } from "react"
import Notification, {NotificationPropsType} from "../components/notification"

const useNotification = () => {
    const [notificationProps, setNotificationProps] = useState<NotificationPropsType | null>(null)

    let timer: ReturnType<typeof setTimeout>
    const triggerNotification = useCallback((notificationProps: NotificationPropsType) => {
        setNotificationProps(notificationProps)
        clearTimeout(timer)
        timer = setTimeout(()=>{
            setNotificationProps(null)
        }, notificationProps.duration)
    },[])

    const NotificationComponent = notificationProps ? 
    (<div className={`${notificationProps.position}`}>
        <Notification {...notificationProps}/>
    </div>) : null

    return {triggerNotification, NotificationComponent}
}

export default useNotification