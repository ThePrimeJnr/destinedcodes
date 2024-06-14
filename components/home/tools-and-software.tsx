// components/home/tools-and-software.js
import tools from '@/data/tools-and-software';

const ToolsAndSoftware = () => {
  return (
    <div id="tools-software" className="py-24">
      <h2 className="font-bold text-4xl md:text-6xl mb-8 text-center md:text-left">
        Tools &amp; Software
      </h2>
      <p className="text-lg mb-8">
        Over the years, I had the opportunity to work with various software,
        tools, and frameworks. Here are some of them:
      </p>
      <div>
        {tools.map((tool, index) => ( 
          <div key={index} className="gap-2">
            <tool.icon />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndSoftware;
