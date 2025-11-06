"use server";
import { headers } from "next/headers";
import { auth } from "../btr-auth/auth";
import { inngest } from "../inngest/client";

export const signUpEmail = async ({
  email,
  password,
  fullName,
  preferredIndustry,
  riskTolerance,
  country,
  investmentGoals,
}: SignUpFormData) => {
  try {
    const response = await auth.api.signUpEmail({
      body: { email, password, name: fullName },
    });
    if (response) {
      await inngest.send({
        name: "app.user.created",
        data: {
          email,
          name: fullName,
          country,
          preferredIndustry,
          riskTolerance,
          investmentGoals,
        },
      });
    }
    return { success: true, data: response };
  } catch (error) {
    console.error("Signup failed", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : JSON.stringify(error);
    return { success: false, error: message };
  }
};
export const signInEmail = async ({ email, password }: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({
      body: { email, password },
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Signin failed", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : JSON.stringify(error);
    return { success: false, error: message };
  }
};
export const signOut = async () => {
  try {
    await auth.api.signOut({ headers: await headers() });
  } catch (error) {
    console.error("Signed out failed", error);
  }
};
