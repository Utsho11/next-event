"use client";
import { updateProfile } from "firebase/auth";
import { Camera, Save, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/firebase.config";
import { useState } from "react";
import { toast } from "sonner";

type PersonalInfo = {
  name: string;
  photoURL: string;
  phone: string;
  location: string;
  bio: string;
};

const STORAGE_KEY = "nextevent_personal_info";

export default function SettingsForm() {
  const [loading, setLoading] = useState(false);

  const getInitialPersonalInfo = (): PersonalInfo => {
    if (typeof window === "undefined") {
      return {
        name: "",
        photoURL: "",
        phone: "",
        location: "",
        bio: "",
      };
    }

    try {
      const savedData = localStorage.getItem(STORAGE_KEY);

      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch {
      // ignore invalid localStorage data
    }

    return {
      name: "",
      photoURL: "",
      phone: "",
      location: "",
      bio: "",
    };
  };

  const [formData, setFormData] = useState<PersonalInfo>(
    getInitialPersonalInfo,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth.currentUser) {
      toast.error("You must be logged in");
      return;
    }

    try {
      setLoading(true);

      await updateProfile(auth.currentUser, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

      toast.success("Profile updated successfully!", {
        description: (
          <p className="text-gray-400">
            Updated at: {new Date().toLocaleString()}
          </p>
        ),
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <UserRound className="h-6 w-6 text-indigo-600" />
          Personal Information
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Update your profile information for NextEvent.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Preview */}
          <div className="flex flex-col items-center gap-3">
            <Avatar className="h-24 w-24">
              <AvatarImage src={formData.photoURL} />
              <AvatarFallback>
                {formData.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Camera className="h-4 w-4" />
              Profile preview
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <Label htmlFor="photoURL">Profile Image URL</Label>
            <Input
              id="photoURL"
              placeholder="Paste profile image URL"
              value={formData.photoURL}
              onChange={handleChange}
            />
          </div>

          {/* Phone + Location */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Write something about yourself"
              value={formData.bio}
              onChange={handleChange}
              className="min-h-32 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#3525CD] to-[#831ADA] text-white"
          >
            <Save className="mr-2 h-4 w-4" />
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
