/**
 * Author: Yilun Fu
 */

var FACEBOOK_ACCOUNTS = [
    {
        id: "168124950207443",
        secret: "80c2f9f02ac1200f335a2d62fe303264",
        url: "http://localhost:3000/auth/facebook/callback"
    },
    {
        id: "839826619428891",
        secret: "3e890d86376889f1dea9b91b1889c88c",
        url: "http://ec2-52-1-123-35.compute-1.amazonaws.com/auth/facebook/callback"
    }
];
var choice = 1; //1: on AWS EC2. 0: on localhost
exports.FACEBOOK_APP_ID = FACEBOOK_ACCOUNTS[choice].id;
exports.FACEBOOK_APP_SECRET = FACEBOOK_ACCOUNTS[choice].secret;
exports.CALLBACK_URL = FACEBOOK_ACCOUNTS[choice].url;