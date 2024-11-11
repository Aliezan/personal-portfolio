"use client";

import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton: FC = () => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/blogs");
    }
  }, [router]);

  return (
    <Button
      onClick={handleBack}
      variant="ghost"
      className="mb-2 flex items-center gap-2"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Blogs
    </Button>
  );
};

export default BackButton;
