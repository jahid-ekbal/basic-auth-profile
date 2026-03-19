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

const LoginFormCard = () => {
  return (
    <>
      <Card className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150 dark:bg-black/20">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
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
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                />

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full">
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full">
            Login with Google
          </Button>
          <a
            href="/auth/register"
            className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
            Don't have an account? Sign up
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginFormCard;
