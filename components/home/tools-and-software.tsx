'use client';

import tools, { Tool } from '@/data/tools';
import React, { useEffect, useRef, useState } from 'react';

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
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeTabIndex = Object.keys(groupedTools).indexOf(activeTab);
    const activeTabElement = tabsRef.current[activeTabIndex];
    if (activeTabElement) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } =
        activeTabElement;
      setUnderlineStyle({
        top: offsetTop + offsetHeight,
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab, groupedTools]);

  return (
    <div id="tools-software">
      <h2 className="font-bold text-4xl md:text-5xl mb-8">
        Tools &amp; Software
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Over the years, I&apos;ve had the chance to work with a wide range of
        software, tools, and frameworks. Here are some of the ones I&apos;ve
        used:
      </p>

      <div className="relative flex flex-wrap mb-4">
        {Object.keys(groupedTools).map((type, index) => (
          <button
            key={type}
            ref={(el: any) => (tabsRef.current[index] = el)}
            className={`tab-button mr-4 mb-2 md:mr-6 px-2 py-1 text-md font-medium ${activeTab === type ? 'text-secondary active-tab' : 'hover:text-secondary/50'}`}
            onClick={() => setActiveTab(type)}
          >
            {type}
          </button>
        ))}
        <div
          className="absolute h-[2px] bg-secondary transition-all duration-300"
          style={underlineStyle}
        ></div>
      </div>

      {Object.entries(groupedTools).map(
        ([type, tools]) =>
          activeTab === type && (
            <div key={type} className="mb-12">
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center text-center"
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
