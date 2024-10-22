"use client";

import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton: FC = () => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Button
      onClick={handleBack}
      variant="ghost"
      className="mb-2 flex items-center gap-2"
    >
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </Button>
  );
};

export default BackButton;
