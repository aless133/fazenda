import React from 'react';
import { LoaderCircle } from 'lucide-react';

export function Loader() {
  return (
    <div className="flex justify-center items-center max-h-screen py-40">
      <LoaderCircle className="animate-spin h-24 w-24 opacity-50" />
    </div>
  );
};


