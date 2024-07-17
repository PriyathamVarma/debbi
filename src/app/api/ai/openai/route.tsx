// ->> /api/ai/openai
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { PromptTemplate } from "@langchain/core/prompts";
import { OpenAI, ChatOpenAI } from "@langchain/openai";
import { AIpromptTemplate } from "../../../../../shared/prompts/template";
import Airtable from "airtable";
//import IAIPromptTemplate from "../../../../shared/interfaces/ai/template";

export const runtime = "edge";

// Constants
const airtable_pat = process.env.NEXT_PUBLIC_AIRTABLE_PAT;

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const name = req.nextUrl.searchParams.get("name");
    const table = req.nextUrl.searchParams.get("table");
    const base = new Airtable({ apiKey: airtable_pat }).base(name as string);

    // Data
    const records = await base(table as string)
      .select()
      .firstPage();

    const data = records.map((record: any) => ({
      records: record.fields,
    }));

    console.log("Check point 1", data);

    const prompt = PromptTemplate.fromTemplate(AIpromptTemplate);

    const model = new ChatOpenAI({
      openAIApiKey: process.env.NEXT_PUBLIC_OPEN_AI as string,
      // process.env.NEXT_PUBLIC_OPEN_AI as string,
    });

    const chain = prompt.pipe(model);

    const sample = JSON.stringify(`
{
  "gender_pay_gap": {
    "hourly_pay": {
      "mean": 13.59,
      "median": 6.67,
      "disparity": "Men earning more than women"
    },
    "bonus_pay": {
      "mean": 9.7,
      "median": 3.3,
      "disparity": "Men receiving more in bonus pay than women"
    },
    "bonus_distribution": {
      "men": 94.5,
      "women": 64.0,
      "disparity": "Men receiving bonus pay more frequently than women"
    }
  }
}
`);

    const result = await chain.invoke({
      data: data as unknown as string,
      sample: sample as string,
    });

    // Format the received content
    const stringMessage = result.content.toString();

    const formattedMessage = stringMessage.split("\n").join("<br/>");

    return NextResponse.json({
      message: result.content,
      status: "success",
    });
  } catch (err) {
    return NextResponse.json({
      error: "Error at openai  \n",
      err,
    });
  }
}

// POST
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("Check point 1");
    const data: any = await req.json();
    console.log("Check point 2");
    const sample = JSON.stringify(`
{
  "gender_pay_gap": {
    "hourly_pay": {
      "mean": 13.59,
      "median": 6.67,
      "disparity": "Men earning more than women"
    },
    "bonus_pay": {
      "mean": 9.7,
      "median": 3.3,
      "disparity": "Men receiving more in bonus pay than women"
    },
    "bonus_distribution": {
      "men": 94.5,
      "women": 64.0,
      "disparity": "Men receiving bonus pay more frequently than women"
    }
  }
}
`);
    const prompt = PromptTemplate.fromTemplate(AIpromptTemplate);
    console.log("Check point 3");
    const model = new ChatOpenAI({
      openAIApiKey: process.env.NEXT_PUBLIC_OPEN_AI as string,
      // process.env.NEXT_PUBLIC_OPEN_AI as string,
    });
    console.log("Check point 4");

    const chain = prompt.pipe(model);
    console.log("Check point 5");
    const result = await chain.invoke({
      data: data as string,
      sample: sample as string,
    });
    console.log("Check point 6");
    // Format the received content
    const stringMessage = result.content.toString();
    console.log("Check point 7");
    const formattedMessage = stringMessage.split("\n").join("<br/>");
    console.log("Check point 8");
    return NextResponse.json({
      message: result.content,
      status: "success",
    });
  } catch (err) {
    return NextResponse.json({
      error: "Error at openai  \n",
      err,
    });
  }
}
