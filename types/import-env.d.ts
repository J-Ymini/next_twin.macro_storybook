declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SANITY_DATASET: string;
    readonly NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    readonly NEXT_PUBLIC_SANITY_BASE_URL: string;
  }
}
