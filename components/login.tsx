"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "./ui/input";
import { PasswordInput } from "./password-input";
import { Label } from "./ui/label"
import Image from "next/image";


export function Login() {

  return (
    <Card className="w-full max-w-4xl flex flex-col lg:flex-row rounded-2xl">
      <div className="w-full lg:w-2/5">
        <CardHeader className="text-center">
          <CardTitle> Log In</CardTitle>
          <CardDescription>Log in to your account to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-2 flex items-center">
            <div className="flex-grow border-t border-muted" />
            <div className="mx-2 text-muted-foreground">or</div>
            <div className="flex-grow border-t border-muted" />
          </div>
          <form className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                placeholder="email@example.com"
                autoComplete="email"
                name="email"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                name="password"
                required
                autoComplete="current-password"
                placeholder="********"
              />
            </div>

            <div className="flex flex-wrap justify-between">
              <Button variant={"link"} size={"sm"} className="p-0" asChild>
                <Link href={"/signup"}>Not signed up? Sign up now.</Link>
              </Button>
              <Button variant={"link"} size={"sm"} className="p-0" asChild>
                <Link href={"/reset-password"}>Forgot password?</Link>
              </Button>
            </div>
            <Button className="w-full" aria-label="submit-btn">
              Log In
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Cancel</Link>
            </Button>
          </form>
        </CardContent>
      </div>
      <div className="hidden lg:flex w-full lg:w-3/5 items-center justify-center">
        <Image
          src="/images/login.jpg"
          alt="Login illustration"
          className="object-cover w-full h-full rounded-2xl"
          height={600}
          width={600}
        />
      </div>
    </Card>
  );
}
