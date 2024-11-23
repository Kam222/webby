#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { generatePostComponent } from '../../utils/markdownToJsx.js';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name('md-to-post')
  .description('Convert markdown files to React post components')
  .argument('<input>', 'input markdown file')
  .argument('[output]', 'output JSX file (optional)')
  .action(async (input, output) => {
    try {
      const inputPath = path.resolve(process.cwd(), input);
      const content = await fs.readFile(inputPath, 'utf8');
      
      // Split frontmatter and content
      const [, frontmatter, markdown] = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/m) || [null, '', content];
      
      // Parse frontmatter
      const metadata = yaml.load(frontmatter) || {};
      
      // Generate output path if not provided
      if (!output) {
        const basename = path.basename(input, '.md');
        output = path.resolve(process.cwd(), `src/pages/posts/${basename}Post.jsx`);
      }
      
      const jsx = generatePostComponent(markdown, metadata);
      await fs.writeFile(output, jsx);
      
      console.log(`✨ Successfully converted ${input} to ${output}`);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse(); 