/* 
    The get user media api is a build in browser api
    used to get media such as camera and microphone data from the user

    For it to work, the user needs to allow the browser to collect the media data

*/

navigator.mediaDevices.getUserMedia({video: true});