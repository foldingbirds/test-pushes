var push = require('web-push')

let vapidKeys = {
  publicKey: 'BFm2WvnzbJUN-q4DZCjoQOmCjJVlUhySPxLNHAyTTXPpfUZGb5YE2fJwoMnetWkfpS3bB9R_G2eSZbeabdg12ts',
  privateKey: 'Z9xd58lkguGif21vzSuiv49AmArJjV6TosxBD1swzD4',
}

push.setVapidDetails('mailto:brian@twohousestudios.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}
push.sendNotification(sub, 'test message')
