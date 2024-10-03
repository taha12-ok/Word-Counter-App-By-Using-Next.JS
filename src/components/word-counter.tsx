"use client"; // Enables client-side rendering for this component
import React, { useState, ChangeEvent } from "react"; // Import useState and ChangeEvent from React
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Import custom Card components
import { Textarea } from "@/components/ui/textarea"; // Import custom Textarea component
import { Button } from "@/components/ui/button"; // Import custom Button component

export default function WordCounter() {
  // State to manage the input text
  const [text, setText] = useState<string>("");

  // Function to handle text input changes
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // Function to clear the input text
  const clearText = () => {
    setText("");
  };

  // Calculate word count
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  // Calculate character count
  const charCount = text.length;

  // JSX return statement rendering the Word Counter UI
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gradient-to-r from-[#AEEEEE] via-[#E6E6FA] to-[#FFDAB9]">
  <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
    <CardHeader className="text-center justify-center flex flex-col">
      <CardTitle className="text-[#333333]">Text Analysis</CardTitle>
      <CardDescription className="text-[#556B2F]">
        Enter text and see the word and character count.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {/* Textarea for input text */}
      <Textarea
        id="text-input"
        placeholder="Enter your text here..."
        className="h-32 resize-none border border-[#DCDCDC] focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71] rounded-md"
        value={text}
        onChange={handleTextChange}
      />
      {/* Display word and character count */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-[#556B2F]">
          <span id="word-count">{wordCount}</span> words,{" "}
          <span id="char-count">{charCount}</span> characters
        </div>
        {/* Button to clear the input text */}
        <Button className="bg-[#DC143C] text-white hover:bg-[#B22222] rounded-md" onClick={clearText}>
          Clear
        </Button>
      </div>
    </CardContent>
  </Card>
</div>


  );
}