import { Button } from "./shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcnui/card";
import { Checkbox } from "./shadcnui/checkbox";
import { Input } from "./shadcnui/input";
import { Label } from "./shadcnui/label";

const RegisterFormCard = () => {
  return (
    <>
      <Card className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150 dark:bg-black/20">
        <CardHeader>
          <CardTitle>Register for an account</CardTitle>
          <CardDescription>
            Enter your given information below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="full name">Full Name</Label>
                <Input
                  id="full name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                />
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                </div>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                />

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Terms and Conditions</Label>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full">
            Create Account
          </Button>

          <a
            href="/auth"
            className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
            Already have an account? Login
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

export default RegisterFormCard;
