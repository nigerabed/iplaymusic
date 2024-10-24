import { NextResponse } from "next/server";
import { redirect } from "next/navigation"
import { cookies } from "next/headers";


const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET


export async function GET(req) {
    const code = req.nextUrl.searchParams.get("code")

    console.log("code:", code);

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: new URLSearchParams({
            code: code,
            redirect_uri: "http://localhost:3000/api/callback",
            grant_type: "authorization_code"
        }),

        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        }

    })

    const json = await response.json()

    console.log("------" + JSON.stringify(json));
    const cookieStore = cookies()
    cookieStore.set("iplay_token", json.access_token, { maxAge: 3600 })

    redirect("/featuredPlay")
    // return NextResponse.json({})
}