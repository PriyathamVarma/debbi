// ->> api/v1/airtable

import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { PromptTemplate } from "@langchain/core/prompts";
import { OpenAI, ChatOpenAI } from "@langchain/openai";
import { AIpromptTemplate } from "../../../../../shared/prompts/template";
import Airtable from "airtable";

// Response Data
type ResponseData = {
  message?: string;
  data?: any;
  error?: {
    message: string;
    status?: number;
  };
};

// Constants
const airtable_pat = process.env.NEXT_PUBLIC_AIRTABLE_PAT;

// **GET** - Retrieve airtable data
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const name = req.nextUrl.searchParams.get("name");
    const table = req.nextUrl.searchParams.get("table");

    // Base
    const base = new Airtable({ apiKey: airtable_pat }).base(name as string);

    // Records
    const records = await base(table as string)
      .select()
      .firstPage();

    // Data
    const data = records.map((record: any) => ({
      records: record.fields,
    }));

    // Sample output
    const sample = JSON.stringify(`
{
  "gender_pay_gap": {
    "bonus_pay": {
      "mean": number indicating the mean,
      "median": number indicating the median,
      "disparity": "give the disparity as an insight"
    },
    "bonus_distribution": {
      "men": number indicating the mean,
      "women": number indicating the median,
      "disparity": "give the disparity as an insight"
    },
    "hourly_pay": {
      "mean": number indicating the mean,
      "median": number indicating the median,
      "men_avg": number indicating the men avg hourly pay,
      "women_avg": number indicating the women avg hourly pay,
      "men_median":number indicating the men median hourly pay,
      "women_median":number indicating the women median hourly pay,
      "disparity": "give the disparity as an insight"
    }
  }
}
`);

    // AI
    const prompt = PromptTemplate.fromTemplate(AIpromptTemplate);

    const model = new ChatOpenAI({
      openAIApiKey: process.env.NEXT_PUBLIC_OPEN_AI as string,
      // process.env.NEXT_PUBLIC_OPEN_AI as string,
    });

    const chain = prompt.pipe(model);

    // Ai Response
    const result = await chain.invoke({
      data: data as unknown as string,
      sample: sample as string,
    });

    // Format the received content
    const stringMessage = result.content.toString();

    // const formattedMessage = stringMessage.split("\n").join("<br/>");
    // Format the received content
    const formattedMessage = JSON.parse(stringMessage);

    // Response
    return NextResponse.json<ResponseData>({
      message: "Airtable data fetched",
      data: formattedMessage,
    });
  } catch (err) {
    console.error("Error fetching airtable data: \n", err);
    return NextResponse.json({
      message: "Error fetching airtable data.",
      error: "An unknown error occurred.",
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const name = req.nextUrl.searchParams.get("name");
    const table = req.nextUrl.searchParams.get("table");

    // Base
    const base = new Airtable({ apiKey: airtable_pat }).base(name as string);

    // Records
    const records = await base(table as string)
      .select()
      .firstPage();

    // Data
    const data = records.map((record: any) => ({
      records: record.fields,
    }));

    // Sample output
    const sample = JSON.stringify(`
{
  "gender_pay_gap": {
    "hourly_pay": {
      "mean": number indicating the mean,
      "median": number indicating the median,
      "disparity": "Men earning more than women"
    },
    "bonus_pay": {
      "mean": number indicating the mean,
      "median": number indicating the median,
      "disparity": "Men receiving more in bonus pay than women"
    },
    "bonus_distribution": {
      "men": number indicating the mean,
      "women": number indicating the median,
      "disparity": "Men receiving bonus pay more frequently than women"
    }
  }
}
`);

    // AI
    const prompt = PromptTemplate.fromTemplate(AIpromptTemplate);

    const model = new ChatOpenAI({
      openAIApiKey: process.env.NEXT_PUBLIC_OPEN_AI as string,
      // process.env.NEXT_PUBLIC_OPEN_AI as string,
    });

    const chain = prompt.pipe(model);

    // Ai Response
    const result = await chain.invoke({
      data: data as unknown as string,
      sample: sample as string,
    });

    // Format the received content
    const stringMessage = result.content.toString();

    const formattedMessage = stringMessage.split("\n").join("<br/>");

    // Response
    return NextResponse.json<ResponseData>({
      //message: "Airtable data fetched",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching airtable data: \n", err);
    return NextResponse.json({
      message: "Error fetching airtable data.",
      error: "An unknown error occurred.",
    });
  }
}
