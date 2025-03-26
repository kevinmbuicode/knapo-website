import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { membershipNumber, password } = await req.json();

    // Validate input
    if (!membershipNumber || !password) {
      return NextResponse.json(
        { error: "Membership number and password are required" },
        { status: 400 }
      );
    }

    // Check if the membership number exists in the database
    const { data: member, error: memberError } = await supabase
      .from("members")
      .select("membership_number, auth_user_id")
      .eq("membership_number", membershipNumber)
      .single();

    if (memberError || !member) {
      return NextResponse.json(
        { error: "Invalid membership number or password" },
        { status: 401 }
      );
    }

    // Construct the dummy email
    const dummyEmail = `member_${membershipNumber}@probation-dept.local`;

    // Sign in using email & password
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: dummyEmail,
      password,
    });

    if (authError) {
      console.error("Auth failed:", authError);
      return NextResponse.json(
        { error: "Invalid membership number or password" },
        { status: 401 }
      );
    }

    
    return NextResponse.json(
      { user: data.user, session: data.session },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected login error:", err);
    return NextResponse.json(
      { error: "Something went wrong", details: String(err) },
      { status: 500 }
    );
  }
}
