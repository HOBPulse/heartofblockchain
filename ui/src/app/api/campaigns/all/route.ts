import { NextResponse } from "next/server";
import {
  fetchAllCampaigns,
  getReadonlyProvider,
} from "@/services/blockchain.service";

const program = getReadonlyProvider();

// GET /api/campaigns - Get all campaigns
export async function GET() {
  try {
    const campaigns = await fetchAllCampaigns(program);
    return NextResponse.json(
      {
        success: true,
        data: campaigns,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Error fetching campaigns",
        data: [],
      },
      { status: 500 }
    );
  }
}
