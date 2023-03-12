import { Notifications, Registered, RegistrationError } from 'react-native-notifications';


export const Notification = () => {

    Notifications.registerRemoteNotifications();
   
    Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
        // console.log("Device Token Received => ", event.deviceToken);
    });

    Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
        // console.error(event);
        console.log("registerRemoteNotificationsRegistrationFailed")
    });

    Notifications.events().registerNotificationReceivedBackground((notification)=>{
        // console.log(JSON.stringify(notification))
        console.log("registerNotificationReceivedBackground")
    });

    Notifications.events().registerNotificationReceivedForeground((notification)=>{
        // console.log(JSON.stringify(notification))
        console.log("registerNotificationReceivedForeground (APP ABERTO)")
    })

    Notifications.events().registerNotificationOpened(notification=>{
        console.log("registerNotificationOpened (CLICK NOTIFICAÇÃO COM O APP ABERTO )")
        // console.log(notification)
    })
}