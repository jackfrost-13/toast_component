import './App.css'
import useNotification from './hooks/use-notification'

function App() {

  const {triggerNotification, NotificationComponent} = useNotification()

  return (
    <>
     <div>
        <button onClick= {() => {
          triggerNotification({
            position: "top-left",
            duration: 3000,
            message: "Success Hurray",
            type: "success"
        })
        }}>
          Trigger Success
        </button>
        <button onClick= {() => {
          triggerNotification({
            position: "bottom-left",
            duration: 3000,
            message: "Error No",
            type: "error"
        })
        }}>
          Trigger Error
        </button>
        {NotificationComponent}
     </div>
    </>
  )
}

export default App
