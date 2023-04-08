"use client";

import React from "react";

export default function SkillsContainer() {
  return (
    <div className="grid grid-flow-row md:grid-flow-col">
      <div className="px-10 md:px-0 md:py-0">
        <div className="flex p-5 md:py-5">
          <h2 className="text-lg font-bold text-white">
            Skills
          </h2>
        </div>
        <div>
          <ul>
            <li>
              <div className="mb-1 text-base font-medium text-white">
                HTML/CSS
              </div>
              <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-2.5 w-full rounded-full bg-blue-600"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
