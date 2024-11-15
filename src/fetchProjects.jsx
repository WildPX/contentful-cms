import { createClient } from "contentful";
import { useCallback, useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = useCallback(async (params = {}) => {
    try {
      const response = await client.getEntries({
        content_type: "project",
        ...params,
      });
      const items = response?.items;

      if (items) {
        const newProjects = items.map((item) => {
          const { url, title } = item.fields;
          const { id } = item.sys;
          const image = item.fields.image?.fields?.file?.url
            ? "https:" + item.fields.image.fields.file.url
            : "";

          return { id, title, url, image };
        });

        setProjects(newProjects);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
