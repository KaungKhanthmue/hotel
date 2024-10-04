"use client";
import React, { useState } from 'react'
import { TabsContent } from '../ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function Login() {
  const [user ,setUser] = useState({
    email: '',
    password: ''
  });
  const submitLogin =() =>{
    console.log(user);
  }

  return (
<TabsContent value="login">
<Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Welcome back to X Hotel.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-2">
    <form onSubmit={submitLogin}>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Type here.."
          onChange={(e)=>{
            setUser({...user, email: e.target.value });
          }}
        />
        {/* <span className="text-red-500">{errors?.email?.[0]}</span> */}
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Type here.."
          onChange={(e)=>{
            setUser({...user, password: e.target.value });
          }}
        />
        {/* <span className="text-red-500">{errors?.password?.[0]}</span> */}
      </div>
      <div className="mt-4">
        <Button className="w-full">
          {/* {loading ? "Processing.." : "Login"} */}
          Login
        </Button>
      </div>
    </form>
  </CardContent>
</Card>
</TabsContent>
  )
}

export default Login