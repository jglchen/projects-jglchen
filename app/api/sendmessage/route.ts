import { sendMessage } from "@/actions/sendmessage";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request) {
    const data  = await req.json();
    const locale = data.locale;
    const msgAppreciate = data.msgAppreciate;
    const headTitle = data.headTitle;
    delete data.locale;
    delete data.msgAppreciate;
    delete data.headTitle;
    
    const result = await sendMessage(data, locale, msgAppreciate, headTitle);
    
    return NextResponse.json(result);
}

