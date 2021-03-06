(function (win) {
  var RongSeal = win.RongSeal = win.RongSeal || {};
  RongSeal = RongSeal || {};
  RongSeal.locale = RongSeal.locale || {};
  RongSeal.locale.en = {
    data: {
      installPrompt: 'For the first time to use screenshare, please download and install the plugin',
      downloadTitle: 'Download',
      room: 'Room ID',
      user: 'User ID',
      self: 'Self',
      roomIdEmpty: 'Room Id cannot be empty',
      userIdEmpty: 'User ID can not be empty',
      roomIdIllegal: 'Room ID can only enter letters and numbers',
      networkError: 'Network is disconnected',

      getTokenError: 'Get token failed',
      rtcError: 'Init RTC failed',
      joinError: 'Join room failed',
      leftError: 'Left room failed',
      getScreenError: 'Get screenshare failed',
      addScreenError: 'Add screenshare failed',
      closeScreenError: 'Close screenshare failed',
      publishError: 'Publish stream failed',
      getLocalStreamError: 'Failed to get local video stream',
      subscriptError: 'Subscription failed',
      closeVideoError: 'Failed to close the camera',
      openVideoError: 'Failed to open the camera',
      closeAudioError: 'Turn off the microphone failed',
      openAudioError: 'Turning on the microphone failed',
      switchStreamError: 'Switching stream failed'
    },
    placeholder: {
      roomId: 'Please enter the RoomId',
      userId: 'Please enter the UserName'
    },
    textContent: {
      closeVideo: 'Turn off the camera',
      closeAudio: 'Turn off the microphone',
      setting: 'Call settings',
      resolution: 'Resolution',
      screenshareBusy: 'Screen Sharing',
      videoClosed: 'You have turned off the camera',
      otherVideoClosed: 'He/she has turned off the camera',
      alertTitle: 'Friendly reminders'
    },
    value: {
      startRTC: 'Start',
      cancel: 'Cancel',
      conform: 'OK'
    },
    title: {
      hangup: 'hangup',
      screenshare: 'screenshare',
      whiteboard: 'whiteboard'
    }
  };
})(window);