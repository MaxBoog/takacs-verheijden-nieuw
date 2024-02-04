import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "v6hzel3u",
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
