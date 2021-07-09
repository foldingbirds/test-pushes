var push = require('web-push')

let vapidKeys = {
  publicKey: 'BFm2WvnzbJUN-q4DZCjoQOmCjJVlUhySPxLNHAyTTXPpfUZGb5YE2fJwoMnetWkfpS3bB9R_G2eSZbeabdg12ts',
  privateKey: 'Z9xd58lkguGif21vzSuiv49AmArJjV6TosxBD1swzD4',
}

push.setVapidDetails('mailto:brian@twohousestudios.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/c5-qUTjF3fM:APA91bHl-M835o0ldK2g5CHs_4NqbIgbX4lSvoaPYCL-0Yg-YwmomW_NSnddiotq1gnKRy4IeUmaHTSunWgdDJ6FWtA42mU8EC4exa_poB7FGL_PsNMTtiVdirn8Kqna_EhmRYaVOcsF',
  expirationTime: null,
  keys: {
    p256dh: 'BHUsv2h_9KoTDVLzgjuzor4LdDv3rnnc-XeqSaeKUOk4jFkXTH0Onhv_bxWWeZs3_VWae76-Yn4cL8uBKHkYbKw',
    auth: 'kU7B7pZoCvR56HhCeATnuA',
  },
}
push.sendNotification(sub, 'test message')
