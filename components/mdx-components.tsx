import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
// import { Callout } from "./Callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({...runtime}).default;
};
// https://github.com/shadcn-ui/taxonomy/blob/main/components/mdx-components.tsx
const components = {
  Image,
  Callout,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}