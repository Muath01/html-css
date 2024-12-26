"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingScreen from "react-loading-screen";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import React, { Suspense, useEffect, useState } from "react";
import { createUser, emailIsSent } from "../../../../prisma";
import { useRouter, useSearchParams } from "next/navigation";
import { getUserId } from "@/lib/getUserId";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

function FormPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MyForm />
    </Suspense>
  );
}

export type FormData = {
  name: string;
  age: number;
  gender: string;
  email: string;
  location: string;
  occupation: string;
  industry: string;
  consent: boolean;
  salaryRange: string;
  country: string;
};

function MyForm() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [serverLoading, setServerLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 0,
    gender: "",
    email: "",
    location: "",
    occupation: "",
    industry: "",
    consent: false,
    salaryRange: "",
    country: "",
  });
  const [error, setError] = useState<string | null>(null);

  // useForm is a hook from react-hook-form that manages form state and validation
  const {
    register, // function to register input fields for validation
    handleSubmit, // function to handle form submission
    formState: { errors }, // object containing form validation errors
    setValue, // function to programmatically set the value of a field
    trigger, // function to trigger validation on specific fields
    watch, // function to watch the value of specific fields
  } = useForm<FormData>({
    mode: "onChange", // validation mode set to trigger on change of input
  });

  const router = useRouter();

  const steps = [
    {
      title: "Congratulations on Completing the Test!",
      description:
        "To enhance the accuracy of your results, we analyze patterns across different demographics. First, what's your name?",
      field: "name",
      placeholder: "Your full name",
      validation: { required: "Name is required" },
    },
    {
      title: "Personalized Analysis",
      description:
        "Age plays a crucial role in cognitive development. This helps us provide more relevant insights.",
      field: "age",
      placeholder: "Your age",
      type: "number",
      validation: {
        required: "Age is required",
        min: { value: 1, message: "Age must be positive" },
        max: { value: 120, message: "Please enter a valid age" },
      },
    },
    {
      title: "Cognitive Pattern Analysis",
      description:
        "Research shows cognitive patterns can vary across gender groups. This helps us provide more accurate benchmarking.",
      field: "gender",
      type: "select",
      options: ["Male", "Female", "Other", "Prefer not to say"],
      validation: { required: "Please select a gender" },
    },
    {
      title: "Secure Your Results",
      description:
        "We'll send your comprehensive analysis and personalized insights to your email.",
      field: "email",
      placeholder: "your-email@example.com",
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      },
    },
    {
      title: "Regional Intelligence Patterns",
      description:
        "Different regions show fascinating variations in problem-solving approaches. Help us understand yours.",
      field: "country",
      type: "select",
      options: [
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Other",
      ],
      validation: { required: "Country is required" },
    },
    {
      title: "Income Range",
      description:
        "Understanding income patterns helps us analyze cognitive development across economic backgrounds.",
      field: "salaryRange",
      type: "select",
      options: [
        "0-30,000",
        "30,000-60,000",
        "60,000-100,000",
        "100,000+",
        "Prefer not to say",
      ],
      validation: { required: "Salary range is required" },
    },
    {
      title: "Professional Context",
      description:
        "We're studying how different career paths influence cognitive strengths. What's your current role?",
      field: "occupation",
      placeholder: "Your occupation",
      validation: { required: "Occupation is required" },
    },
    {
      title: "Industry Insights",
      description:
        "Help us understand how different industries shape problem-solving abilities.",
      field: "industry",
      placeholder: "Your industry",
      validation: { required: "Industry is required" },
    },
    {
      title: "Research Contribution",
      description:
        "Your data helps advance our understanding of human intelligence across different demographics.",
      field: "consent",
      type: "consent",
      validation: {
        required: "Please agree to the terms to continue",
      },
    },
  ];

  async function onSubmit(data: FormData) {
    console.log("data: ", data);
    console.log("formdata: ", formData.email);
    try {
      setError(null);
      setServerLoading(true);
      const testQ = localStorage.getItem("qs4test");

      if (!testQ) {
        setError("Test score not found. Please retake the test.");
        setServerLoading(false);
        return;
      }

      const score = Number(testQ);
      if (isNaN(score)) {
        setError("Invalid test score. Please retake the test.");
        setServerLoading(false);
        return;
      }

      const userLocalStorage = localStorage.getItem("userId-qtink-liia");

      let user;
      // basically if the user is not retaking the test.
      if (!userLocalStorage) {
        try {
          // create user with test score
          user = await createUser(formData, score);
          if (!user) {
            throw new Error("Failed to create user");
          }
          localStorage.setItem("userId-qtink-liia", user);
          localStorage.setItem("user-data", JSON.stringify(formData));
        } catch (err) {
          setError("Failed to create user account. Please try again.");
          setServerLoading(false);
          return;
        }
      } else {
        user = userLocalStorage;
      }

      router.push(`/complete/payment/?userid=${user}`);
    } catch (error) {
      setError("An unexpected error occurred. Please try again later.");
      console.error(error);
    }
    setServerLoading(false);
  }

  const handleNext = async () => {
    try {
      setError(null);
      const currentField = steps[step].field as keyof FormData;
      const isValid = await trigger(currentField);

      if (isValid) {
        const currentValue = watch(currentField);
        setFormData((prev) => ({
          ...prev,
          [currentField]: currentValue,
        }));

        if (step === steps.length - 1) {
          handleSubmit(onSubmit)();
        } else {
          setStep(step + 1);
          setValue(currentField, "", { shouldValidate: false });
        }
      }
    } catch (err) {
      setError("Failed to proceed to next step. Please try again.");
    }
  };

  // useEffect hook to check if an email has been sent for the user
  useEffect(() => {
    // Define an asynchronous function to check email status
    const EmailHasBeenSent = async () => {
      try {
        // Retrieve the user ID from local storage
        const userId = await getUserId();
        // If no user ID is found, exit the function
        if (!userId) return;

        // Check if an email has been sent for the retrieved user ID
        const emailHasBeenSent = await emailIsSent(userId);
        // If the email has been sent, redirect to the payment page
        if (emailHasBeenSent) {
          router.push(`/complete/payment/?userid=${userId}`);
        }
      } catch (err) {
        // Set an error message if the email status check fails
        setError("Failed to check email status. Please try again later.");
      }
    };

    // Call the function to check email status
    EmailHasBeenSent();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const currentStep = steps[step];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-screen flex items-center justify-center ">
        {loading ? (
          <div className="">
            <LoadingScreen
              loading={true}
              bgColor="rgba(255,255,255,1)"
              spinnerColor="#ef4444"
              textColor="#676767"
              logoSrc=""
              text="Preparing Your Results..."
              className="bg-black border-2 border-black"
            >
              {" "}
            </LoadingScreen>
          </div>
        ) : (
          <div className="w-[450px] space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Card className="rounded-[10px] border border-red-200 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl text-red-600">
                    {currentStep.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-md mt-2">
                  {currentStep.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      {currentStep.type === "select" ? (
                        <Select
                          onValueChange={(value) =>
                            setValue(
                              currentStep.field as keyof FormData,
                              value,
                              {
                                shouldValidate: true,
                              }
                            )
                          }
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue
                              placeholder={`Select ${currentStep.field}`}
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-white-100">
                            {currentStep.options?.map((option) => (
                              <SelectItem
                                key={option}
                                value={option.toLowerCase()}
                              >
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : currentStep.type === "consent" ? (
                        <div className="flex items-start space-x-3 bg-red-50 p-4 rounded-lg">
                          <Checkbox
                            id="consent"
                            {...register("consent", currentStep.validation)}
                            className="mt-1"
                          />
                          <label htmlFor="consent" className="text-sm">
                            I agree to share my information to help improve IQ
                            test accuracy and contribute to research on
                            cognitive patterns across different demographics.
                            Your data is handled securely and confidentially.
                          </label>
                        </div>
                      ) : (
                        <Input
                          {...register(
                            currentStep.field as keyof FormData,
                            currentStep.validation
                          )}
                          type={currentStep.type || "text"}
                          className="rounded-[5px] h-12 focus:ring-red-500 focus:border-red-500"
                          placeholder={currentStep.placeholder}
                        />
                      )}
                      {errors[currentStep.field as keyof FormData] && (
                        <span className="text-red-500 text-sm mt-1 bg-red-50 p-2 rounded-md border border-red-200">
                          {errors[currentStep.field as keyof FormData]?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 0 && (
                  <Button
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="rounded-[10px] border-red-500 text-red-500 hover:bg-red-50"
                  >
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={serverLoading}
                  className="bg-red-500 rounded-[10px] hover:bg-red-600 disabled:bg-gray-400 ml-auto"
                >
                  {serverLoading
                    ? "Processing..."
                    : step === steps.length - 1
                    ? "Complete Analysis"
                    : "Continue"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default FormPage;
