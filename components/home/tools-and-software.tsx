'use client';

import tools, { Tool } from '@/data/tools';
import { useState } from 'react';

interface GroupedTools {
  [key: string]: Tool[];
}

const ToolsAndSoftware: React.FC = () => {
  const groupedTools: GroupedTools = tools.reduce(
    (groups: GroupedTools, tool: Tool) => {
      (groups[tool.type] = groups[tool.type] || []).push(tool);
      return groups;
    },
    {},
  );
  const [activeTab, setActiveTab] = useState(Object.keys(groupedTools)[0]);

  return (
    <div id="tools-software">
      <h2 className="font-bold text-4xl md:text-5xl mb-8">
        Tools &amp; Software
      </h2>
      <p className="text-lg mb-6">
        Over the years, I&apos;ve had the chance to work with a wide range of
        software, tools, and frameworks. Here are some of the ones I&apos;ve
        used:
      </p>

      <div className="relative flex flex-wrap mb-6">
        {Object.keys(groupedTools).map((type) => (
          <button
            key={type}
            className={`tab-button mr-4 mb-4 md:mr-6 text-md font-medium ${activeTab === type ? 'text-secondary active-tab underline underline-offset-8 decoration-2' : 'hover:text-secondary/90'}`}
            onClick={() => setActiveTab(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {Object.entries(groupedTools).map(
        ([type, tools]) =>
          activeTab === type && (
            <div key={type} className="mb-12">
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <tool.icon
                      className="tool-icon mx-auto mb-3 w-8 h-8 md:w-10 md:h-10"
                      color="default"
                    />
                    <p className="text-sm font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default ToolsAndSoftware;
