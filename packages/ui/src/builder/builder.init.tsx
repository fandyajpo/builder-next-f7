import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "./builder.content";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
  searchParams: Record<string, string>;
}

export async function BuilderInit(props: PageProps) {
  const content = await builder
    .get("page", {
      extractCss: true,
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} key={"BuilderContent"} />;
}
