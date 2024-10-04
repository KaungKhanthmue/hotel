"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function Register() {
  const [loading, setLoading] = useState<boolean>(false);
  const [authState, setAuthState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    username: [],
    password: [],
  });

  const handleSubmit = async () => {

  };
  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Welcome to Daily Dev.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Type here.."
                value={authState.name}
                onChange={(e) =>
                  setAuthState({ ...authState, name: e.target.value })
                }
              />
              <span className="text-red-500">{errors?.name?.[0]}</span>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="name"
                type="text"
                placeholder="Type here.."
                onChange={(e) =>
                  setAuthState({ ...authState, username: e.target.value })
                }
              />
              <span className="text-red-500">{errors?.username?.[0]}</span>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Type here.."
                onChange={(e) =>
                  setAuthState({ ...authState, email: e.target.value })
                }
              />
              <span className="text-red-500">{errors?.email?.[0]}</span>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Type here.."
                value={authState.password}
                onChange={(e) =>
                  setAuthState({ ...authState, password: e.target.value })
                }
              />
              <span className="text-red-500">{errors?.password?.[0]}</span>
            </div>
            <div className="space-y-1">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                id="cpassword"
                type="password"
                name="password_confirmation"
                placeholder="Type here.."
                value={authState.password_confirmation}
                onChange={(e) =>
                  setAuthState({
                    ...authState,
                    password_confirmation: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <Button className="w-full" disabled={loading}>
                {loading ? "Processing.." : "Register"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}