import { NextRequest, NextResponse } from "next/server";
import db from "@/db/index";

import {
  fetchCampaign,
  getReadonlyProvider,
} from "@/services/blockchain.service";

const program = getReadonlyProvider();

// GET /api/campaigns - Get campaign by name and creator
export async function GET(req: NextRequest) {
  try {
    const name = req.nextUrl.searchParams.get("name");
    const creator = req.nextUrl.searchParams.get("creator");

    if (!name || !creator) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }
    const campaign = await fetchCampaign(program, name, creator);

    return NextResponse.json(
      {
        success: true,
        data: campaign,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching campaign:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Error fetching campaign",
        data: null,
      },
      { status: 500 }
    );
  }
}

// POST /api/campaigns - Create a new campaign
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      description,
      target_amount,
      creator_public_key,
      mint_address,
    } = body;

    if (
      !name ||
      !description ||
      !target_amount ||
      !creator_public_key ||
      !mint_address
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    if (target_amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Target amount must be greater than 0",
        },
        { status: 400 }
      );
    }

    const campaign = await db.campaign.create({
      data: {
        creator: creator_public_key,
        name,
        description,
        target_amount: BigInt(target_amount),
        mint_address,
      },
    });

    return NextResponse.json({
      success: true,
      data: campaign,
      message: "Campaign created successfully",
    });
  } catch (error) {
    console.error("Error creating campaign:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create campaign",
      },
      { status: 500 }
    );
  }
}
