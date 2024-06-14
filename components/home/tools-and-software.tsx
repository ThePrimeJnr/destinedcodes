// components/home/tools-and-software.js
import tools from '@/data/tools-and-software';
import { Chip, Grid, Typography } from '@mui/material';

const ToolsAndSoftware = () => {
  return (
    <div id="tools-software" className="py-24">
      <Typography
        variant="h2"
        className="font-bold text-4xl md:text-6xl mb-8 text-center md:text-left"
      >
        Tools &amp; Software
      </Typography>
      <Typography variant="body1" className="text-lg mb-8">
        Over the years, I had the opportunity to work with various software,
        tools, and frameworks. Here are some of them:
      </Typography>
      <Grid container spacing={3}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="gap-2">
            <tool.icon />
            <span>{tool.name}</span>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ToolsAndSoftware;
