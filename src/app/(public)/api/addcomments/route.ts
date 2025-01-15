import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {commentId,commValue} = await req.json();
        const newComment = {
            _type:'blogcomment',
            comment:commValue,
            commentid: commentId,
        };
        const ourComments = await client.create(newComment);
        return NextResponse.json(ourComments,{status:201});
    } catch (error) {
        return NextResponse.json({error},{status:500});
    }

}