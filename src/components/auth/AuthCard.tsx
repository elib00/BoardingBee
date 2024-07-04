import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader, 
  CardFooter,
  CardTitle, 
  CardDescription
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import BackButton from "./BackButton";

interface CardWrapperProps {
    label: string
    title: string
    backButtonHref: string
    backButtonLabel: string
    children: React.ReactNode
}

const AuthCard = ( { label, title, backButtonHref, backButtonLabel, children }: CardWrapperProps) => {
  const handleCreateAccount = () => {
    console.log("Account created successfully");
  }

  return (
    <Card className={cn("w-[30vw] shadow-md p-4 m-4")}>
      <CardHeader>
        <CardTitle className={cn("text-3xl")}>{title}</CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <CardContent> 
        { children }
      </CardContent>
      <CardFooter className={cn("flex-col justify-center")}>
        <BackButton label={backButtonLabel} href={backButtonHref}></BackButton>
      </CardFooter>
    </Card>
  );
}

export default AuthCard;
