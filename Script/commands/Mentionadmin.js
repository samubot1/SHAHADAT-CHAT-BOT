module.exports.config = {
 name: "adminmention",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU ",
 description: "Bot will reply when someone tags any of the admins",
 commandCategory: "Other",
 usages: "@",
 cooldowns: 1
};

module.exports.handleEvent = function({ api, event }) {
 const adminIDs = ["61578497811054", "61578497811054", "61578497811054"].map(String);
 
 if (adminIDs.includes(String(event.senderID))) return;

 const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
 const isMentioningBoss = adminIDs.some(adminID => mentionedIDs.includes(adminID));

 if (isMentioningBoss) {
 const replies = [
 "ডাকাডাকি করিস না ম্যাডাম ব্যস্ত আছে 😒😌",
 "ম্যাডাম এক আবালে আপনাকে মেনশন দিছে 😑😃",
 "যেভাবে মেনশন দিতাচত মনে হয় তোর bf রে, আমার ম্যাডাম কে দিয়া দিবি 🫥😒",
 "ম্যাডাম এক পাগল ছাগল , আপনাকে ডাকতেছে 🐸🫵",
 "ম্যাডাম এক হালায় আপনার নাম ধরছে , আপনি শুধু একবার আদেশ করুন, আজকে হালার নানিরে চমলক্ক করে দিমু 😑🥴",
 "মেনশন না দিয়া একটা bf খুজে দে 🙃😮💨",
 "পোলা হলে ম্যাডাম এর ইনবক্স এ যাও😗😁",
 "ম্যাডাম এখন ব্যস্ত আছে , কিছু বলতে হলে ইনবক্স এ গিয়া বল",
 "ম্যাডাম এখন আমার সাথে মিটিং এ আছে , মেনশন দিস না 🙂",
 "ম্যাডাম এখন ব্যস্ত আছে , কি বলবি আমাকে বল",
 "মেনশন না দিয়া ম্যাডাম বল ম্যাডাম 🥵💋",
 "কিরে তোর এতো সাহস আমার ম্যাডাম এর নাম ধরিস😾🫵",
 "এতো মেনশন না দিয়া তোর bf রে দিয়া দে😹🐸",
 "এইভাবে মেনশন করতাস, না জানি তুই প্রেমে পড়ছোস কিনা 😼❤️"
 ];
 return api.sendMessage(replies[Math.floor(Math.random() * replies.length)], event.threadID, event.messageID);
 }
};

module.exports.run = async function() {};
