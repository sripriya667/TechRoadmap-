export interface TechRoute {
  category: 'frontend' | 'backend' | 'database' | 'other';
  languageSlug: string;
}

const normalize = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\.(js|ts)$/, '')
    .replace(/\s*\(.*?\)\s*/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Map common technologies seen across the app to their categories
const NAME_TO_CATEGORY: Record<string, TechRoute> = {
  // Frontend
  'html': { category: 'frontend', languageSlug: 'html' },
  'html5': { category: 'frontend', languageSlug: 'html' },
  'css': { category: 'frontend', languageSlug: 'css' },
  'css3': { category: 'frontend', languageSlug: 'css' },
  'javascript': { category: 'frontend', languageSlug: 'javascript' },
  'typescript': { category: 'frontend', languageSlug: 'typescript' },
  'react': { category: 'frontend', languageSlug: 'react' },
  'vue': { category: 'frontend', languageSlug: 'vue' },
  'vue.js': { category: 'frontend', languageSlug: 'vue' },
  'angular': { category: 'frontend', languageSlug: 'angular' },
  'svelte': { category: 'frontend', languageSlug: 'svelte' },
  'next': { category: 'frontend', languageSlug: 'next' },
  'next.js': { category: 'frontend', languageSlug: 'next' },
  'nuxt': { category: 'frontend', languageSlug: 'nuxt' },
  'nuxt.js': { category: 'frontend', languageSlug: 'nuxt' },
  'gatsby': { category: 'frontend', languageSlug: 'gatsby' },
  'tailwind-css': { category: 'frontend', languageSlug: 'tailwind-css' },
  'bootstrap': { category: 'frontend', languageSlug: 'bootstrap' },

  // Backend
  'node': { category: 'backend', languageSlug: 'node' },
  'nodejs': { category: 'backend', languageSlug: 'node' },
  'node.js': { category: 'backend', languageSlug: 'node' },
  'express': { category: 'backend', languageSlug: 'express' },
  'express.js': { category: 'backend', languageSlug: 'express' },
  'python': { category: 'backend', languageSlug: 'python' },
  'django': { category: 'backend', languageSlug: 'django' },
  'flask': { category: 'backend', languageSlug: 'flask' },
  'fastapi': { category: 'backend', languageSlug: 'fastapi' },
  'java': { category: 'backend', languageSlug: 'java' },
  'spring-boot': { category: 'backend', languageSlug: 'spring-boot' },
  'c#': { category: 'backend', languageSlug: 'csharp' },
  '.net': { category: 'backend', languageSlug: 'dotnet' },
  'asp.net': { category: 'backend', languageSlug: 'asp-net' },
  'php': { category: 'backend', languageSlug: 'php' },
  'laravel': { category: 'backend', languageSlug: 'laravel' },
  'go': { category: 'backend', languageSlug: 'go' },
  'gin': { category: 'backend', languageSlug: 'gin' },
  'rust': { category: 'backend', languageSlug: 'rust' },
  'actix': { category: 'backend', languageSlug: 'actix' },
  'ruby': { category: 'backend', languageSlug: 'ruby' },
  'ruby-on-rails': { category: 'backend', languageSlug: 'ruby-on-rails' },
  'rails': { category: 'backend', languageSlug: 'ruby-on-rails' },
  'scala': { category: 'backend', languageSlug: 'scala' },
  'play-framework': { category: 'backend', languageSlug: 'play-framework' },

  // Database
  'mysql': { category: 'database', languageSlug: 'mysql' },
  'postgresql': { category: 'database', languageSlug: 'postgresql' },
  'mongo': { category: 'database', languageSlug: 'mongodb' },
  'mongodb': { category: 'database', languageSlug: 'mongodb' },
  'redis': { category: 'database', languageSlug: 'redis' },
  'sqlite': { category: 'database', languageSlug: 'sqlite' },
  'oracle': { category: 'database', languageSlug: 'oracle' },
  'sql-server': { category: 'database', languageSlug: 'sql-server' },
  'elasticsearch': { category: 'database', languageSlug: 'elasticsearch' },
};

export const resolveTechRoute = (rawName: string): TechRoute => {
  const norm = normalize(rawName);
  const direct = NAME_TO_CATEGORY[norm] || NAME_TO_CATEGORY[rawName.toLowerCase()];
  if (direct) return direct;
  // Default to frontend if unknown
  return { category: 'frontend', languageSlug: norm };
};

export const buildLanguageUrl = (name: string): string => {
  const route = resolveTechRoute(name);
  return `/languages/${route.category}/${route.languageSlug}`;
};


