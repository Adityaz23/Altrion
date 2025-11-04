"use client";
import { CountrySelectField } from "@/components/Forms/CountryField";
import FooterLink from "@/components/Forms/FooterLink";
import InputField from "@/components/Forms/InputField";
import Selective from "@/components/Forms/Selective";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constant";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "India",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize.</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Form Inputs Field. creating a new component then we will render it here. In components there is a folder called forms */}
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 2 }}
        />
        <InputField
          name="Email"
          label="Email ID"
          placeholder="aditya@gmail.com"
          type="email"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />
        <InputField
          name="Password"
          label="Your Password"
          placeholder="Your strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "Strong Password is required",
            minLength: {
              value:8,
              message:"Pasword must be atleast 8 characters long",
              pattern: {
                value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,
                message:
                "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character",
              },
            }
          }}
        />
        {/* Country selective. */}
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
        />
        {/* Investment Goals, Preferred Industry, Risk Tolerance - Selective components */}
         <Selective 
        name="Investment Goals"
        label="Investment Goals"
        placeholder = "Select your investment goals."
        options={INVESTMENT_GOALS}
        control={control}
        error={errors.investmentGoals}
        required
        />
        <Selective 
        name="preferredIndustry"
        label="Preferred Industry"
        placeholder = "Select your preferred industry."
        options={PREFERRED_INDUSTRIES}
        control={control}
        error={errors.preferredIndustry}
        required
        />
         <Selective 
        name="riskTolerance"
        label="Risk Tolerance"
        placeholder = "Select your risk level."
        options={RISK_TOLERANCE_OPTIONS}
        control={control}
        error={errors.riskTolerance}
        required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Creating your account"
            : "Start Your Trading Journey"}
        </Button>
        <FooterLink text="Already have an account" linkText="Sign In" href="/sign-in"/>
      </form>
    </>
  );
};

export default SignUpPage;
