
import clientPromise from "@/lib/mongodb"
export async function POST(request) {

    const body = await  request.json()

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shortUrl: body.shortUrl})

    if(doc){
        return Response.json({success: false, message: "url is already exits", error: true})
    }

    // check if the short url exists in the database
    await  collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({success: true, message: 'url generated successfully ', error: false, })
}