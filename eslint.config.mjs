// ESLint configuration for Next.js project with TypeScript support
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get current directory for ESLint configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compatibility layer for legacy ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration extending Next.js recommended rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

