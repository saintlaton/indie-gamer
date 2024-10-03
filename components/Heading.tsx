import { orbitron } from "@/app/font";

interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className="font-orbitron font-bold pb-3 text-4xl">{children}</h1>;
}
