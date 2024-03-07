import { BuilderInit } from "@repo/ui";
interface PageProps {
  params: {
    page: string[];
  };
  searchParams: Record<string, string>;
}

const BuilderPage = (props: PageProps) => BuilderInit(props);

export default BuilderPage;
