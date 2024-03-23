/*
    This is a commom used API
    to create and use custom made
    notifications
*/

async function showNotification() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const notification = new Notification("Hello!", {
      body: "This is a notification.",
      icon: "iconSrc.type",
    });
  }
}

showNotification();
