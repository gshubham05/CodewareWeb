import { google } from "googleapis";

export async function indexURL(url){

const auth=new google.auth.GoogleAuth({
keyFile:"google-indexing-key.json",
scopes:["https://www.googleapis.com/auth/indexing"]
})

const client=await auth.getClient()

const indexing=google.indexing({
version:"v3",
auth:client
})

await indexing.urlNotifications.publish({
requestBody:{
url:url,
type:"URL_UPDATED"
}
})

}