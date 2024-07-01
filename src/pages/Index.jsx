import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 bg-gray-50">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Startup</h1>
        <p className="text-lg text-gray-600">Revolutionizing your business with our innovative solutions</p>
      </header>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;