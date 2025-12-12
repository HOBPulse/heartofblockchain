"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { CaseData } from "@/data/cases";

interface CaseCardProps {
  caseData: CaseData;
}

const getTagStyles = (variant: string) => {
  switch (variant) {
    case "urgent":
      return "bg-red-400/20 text-red-600";
    case "verified":
      return "bg-green-400/20 text-green-600";
    case "child":
      return "bg-purple-400/20 text-purple-600";
    case "recovery":
      return "bg-blue-400/20 text-blue-600";
    case "low-funded":
      return "bg-gray-400/20 text-gray-600";
    case "adult":
      return "bg-orange-400/20 text-orange-600";
    default:
      return "bg-gray-400/20 text-gray-600";
  }
};

export default function CaseCard({ caseData }: CaseCardProps) {
  const percentFunded = Math.round((caseData.raised / caseData.goal) * 100);

  return (
    <Card className="overflow-hidden border-0 shadow-md p-4">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={caseData.image}
          alt={`${caseData.name}'s campaign`}
          fill
          className="w-full"
        />
      </div>

      <CardContent className="p-0 m-0">
        {/* Name and Location */}
        <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
          {caseData.name}, {caseData.age} - {caseData.location}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
          {caseData.description}
        </p>

        {/* Progress Section */}
        <div className="space-y-2 mb-4 flex flex-row items-center w-full justify-between">
          <div className="w-auto flex-1 mr-4">
            <div className="flex items-center justify-between text-xs md:text-sm">
              <span className="text-gray-700 font-medium">
                {caseData.raised} SOL of {caseData.goal} SOL raised
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 rounded-full transition-all duration-300"
                style={{
                  width: `${percentFunded}%`,
                  background:
                    "linear-gradient(to right, rgb(239, 68, 68), rgb(147, 51, 234), rgb(236, 72, 153), rgb(59, 130, 246), rgb(34, 197, 94))",
                }}
              />
            </div>
          </div>
          <span className="text-gray-700 font-medium">
            {percentFunded}% Funded
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseData.tags.map((tag, index) => (
            <Badge
              key={index}
              className={`text-xs px-2 py-1 rounded-full border ${getTagStyles(
                tag.variant
              )}`}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 p-4 md:p-6 pt-0">
        <Button
          className="flex-1 bg-red-600 hover:bg-red-700 text-white"
          size="sm"
        >
          Donate
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-gray-300 hover:bg-gray-100"
          asChild
        >
          <Link href={`/explore/${caseData.id}`}>View Story</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
