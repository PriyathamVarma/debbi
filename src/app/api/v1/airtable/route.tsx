// ->> api/v1/airtable

import { NextRequest, NextResponse } from "next/server";
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
    const base = new Airtable({ apiKey: airtable_pat }).base(name as string);
    console.log("Airtable token:", base);
    console.log("check point 1");
    const records = await base(table as string)
      .select()
      .firstPage();
    console.log("check point 2", records);
    const data = records.map((record: any) => ({
      records: record.fields,
    }));
    console.log("check point 3", data);
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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("check point 1");
    //const { name, table }: any = await req.json();
    const name = req.nextUrl.searchParams.get("name");
    const table = req.nextUrl.searchParams.get("table");

    const base = new Airtable({ apiKey: airtable_pat }).base(name as string);

    const records = await base(table as string)
      .select()
      .firstPage();
    console.log("check point 2", records);
    const data = records.map((record: any) => ({
      records: record.fields,
    }));
    console.log("check point 3", data);
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
