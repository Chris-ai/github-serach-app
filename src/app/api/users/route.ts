import { DEFAULT_GITHUB_USERNAME, ERROR_TYPE } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import { Octokit, RequestError } from "octokit";

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

export async function GET(req: NextRequest) {
  const username: string =
    req.nextUrl.searchParams.get("username") ?? DEFAULT_GITHUB_USERNAME;

  try {
    const response = await octokit.rest.users.getByUsername({
      username: username,
    });

    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (error) {
    if (error instanceof RequestError) {
      if (error.status === 404) {
        return NextResponse.json(
          { message: ERROR_TYPE.NOT_FOUND },
          { status: 404 }
        );
      }
    }

    return NextResponse.json({ message: ERROR_TYPE.UNKNOWN }, { status: 500 });
  }
}
