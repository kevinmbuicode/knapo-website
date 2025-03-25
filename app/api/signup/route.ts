import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createClient } from "@supabase/supabase-js";

// Ensure environment variables exist
if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.SUPABASE_SERVICE_ROLE_KEY
) {
  throw new Error("Missing Supabase environment variables");
}

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: Request) {
  try {
    const { membershipNumber, password } = await req.json();

    console.log("Signup request received:", { membershipNumber });

    // Validate input
    if (!membershipNumber || !password) {
      return NextResponse.json(
        { error: "Membership number and password are required" },
        { status: 400 }
      );
    }

    // Validate membership number
    const { data: member, error: memberError } = await supabase
      .from("members")
      .select("*")
      .eq("membership_number", membershipNumber)
      .single();

    if (memberError || !member) {
      return NextResponse.json(
        { error: "Invalid membership number" },
        { status: 400 }
      );
    }

    // Check if the member already has a password
    if (member.password_hash) {
      return NextResponse.json(
        { error: "This membership number is already registered" },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    // Generate a valid, unique email
    const dummyEmail = `member_${membershipNumber}@probation-dept.local`;

    // Sign up the user with Supabase Auth
    const { data: authData, error: authError } =
      await supabase.auth.admin.createUser({
        email: dummyEmail,
        password,
        email_confirm: true, // Bypass email verification
        user_metadata: {
          membership_number: membershipNumber,
          name: member.name,
        },
      });

    if (authError) {
      return NextResponse.json(
        { error: "Failed to create user", details: authError.message },
        { status: 500 }
      );
    }

    // Save the hashed password in the database
    const { error: updateError } = await supabase
      .from("members")
      .update({
        password_hash: passwordHash,
        auth_user_id: authData.user?.id, // Store the Supabase Auth user ID
      })
      .eq("membership_number", membershipNumber);

    if (updateError) {
      return NextResponse.json(
        {
          error: "Failed to update member record",
          details: updateError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Signup successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in signup:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred", details: String(error) },
      { status: 500 }
    );
  }
}
