interface ImportMetaEnv {
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_EMAIL_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
