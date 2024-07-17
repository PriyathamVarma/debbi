// ->> /api/ai/openai
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { PromptTemplate } from "@langchain/core/prompts";
import { OpenAI, ChatOpenAI } from "@langchain/openai";
import { AIpromptTemplate } from "../../../../../shared/prompts/template";
//import IAIPromptTemplate from "../../../../shared/interfaces/ai/template";

export const runtime = "edge";

export async function GET() {
  try {
    const data: any =
      '{"data":[{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":3,"ordinary_pay":127,"weekly_working_hours":35,"hourly_pay":70.05,"bonus_pay":0}},{"records":{"gender":"Male","ranking":4,"ordinary_pay":182,"weekly_working_hours":35,"hourly_pay":100.27,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":127,"weekly_working_hours":35,"hourly_pay":70.05,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":87,"weekly_working_hours":35,"hourly_pay":48.08,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":117,"weekly_working_hours":35,"hourly_pay":64.56,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":4,"ordinary_pay":187,"weekly_working_hours":35,"hourly_pay":103.02,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":112,"weekly_working_hours":35,"hourly_pay":61.81,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":142,"weekly_working_hours":35,"hourly_pay":78.3,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":3,"ordinary_pay":127,"weekly_working_hours":35,"hourly_pay":70.05,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":107,"weekly_working_hours":35,"hourly_pay":59.07,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":102,"weekly_working_hours":35,"hourly_pay":56.32,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":3,"ordinary_pay":137,"weekly_working_hours":35,"hourly_pay":75.55,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":127,"weekly_working_hours":35,"hourly_pay":70.05,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":102,"weekly_working_hours":35,"hourly_pay":56.32,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":127,"weekly_working_hours":35,"hourly_pay":70.05,"bonus_pay":0}},{"records":{"gender":"Male","ranking":4,"ordinary_pay":147,"weekly_working_hours":35,"hourly_pay":81.04,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":82,"weekly_working_hours":35,"hourly_pay":45.33,"bonus_pay":0}},{"records":{"gender":"Female","ranking":3,"ordinary_pay":112,"weekly_working_hours":35,"hourly_pay":61.81,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":127,"weekly_working_hours":35,"hourly_pay":70.05,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":137,"weekly_working_hours":35,"hourly_pay":75.55,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":112,"weekly_working_hours":35,"hourly_pay":61.81,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":142,"weekly_working_hours":35,"hourly_pay":78.3,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":102,"weekly_working_hours":35,"hourly_pay":56.32,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":97,"weekly_working_hours":35,"hourly_pay":53.57,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":127,"weekly_working_hours":35,"hourly_pay":70.05,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":117,"weekly_working_hours":35,"hourly_pay":64.56,"bonus_pay":0}},{"records":{"gender":"Female","ranking":3,"ordinary_pay":112,"weekly_working_hours":35,"hourly_pay":61.81,"bonus_pay":0}},{"records":{"gender":"Male","ranking":3,"ordinary_pay":112,"weekly_working_hours":35,"hourly_pay":61.81,"bonus_pay":0}},{"records":{"gender":"Female","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}},{"records":{"gender":"Male","ranking":2,"ordinary_pay":92,"weekly_working_hours":35,"hourly_pay":50.82,"bonus_pay":0}}]}';

    const prompt = PromptTemplate.fromTemplate(AIpromptTemplate);

    const model = new ChatOpenAI({
      openAIApiKey: "sk-proj-Etj9BIKnkCThy85n6k8ST3BlbkFJH61d9foO3FFjzkFKC9Bk",
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
      data: data as string,
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
