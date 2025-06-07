"use client";
import React from "react";
import { toast } from "sonner";

const toastStyles = {
  success: {
    background: "#4ade80", // Tailwind green-400
    color: "white",
    fontWeight: "bold",
    border: "none",
  },
  error: {
    background: "#f87171", // Tailwind red-400
    color: "white",
    fontWeight: "bold",
    border: "none",
  },
};

interface Props {
  title: string;
  type: "success" | "danger";
  description: string;
  icon: React.ReactNode; // Any custom React icon
}

const ShowToast = ({ title, type, icon, description }: Props) => {
  if (title) {
    toast(type === "success" ? title : title, {
      description: (
        <span className="text-sm text-white font-medium leading-relaxed">
          {description}
        </span>
      ),
      position: "bottom-right",
      icon: <div className="mt-1 mr-8">{icon}</div>, // your custom icon component
      style: type === "success" ? toastStyles.success : toastStyles.error,
      duration: 5000,
    });
  }
};

export default ShowToast;
