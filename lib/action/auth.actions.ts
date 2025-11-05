"use server";

import { email, success } from "better-auth";
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
    return {success: true, data:response};
  } catch (error) {
    console.log("Signup failed", error);
    return { success: false, error: "Signup failed" };
  }
};
