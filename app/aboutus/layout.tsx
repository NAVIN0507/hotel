import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Brundhavan Garden Resort, our mission, story, and the team behind our luxury resort in Thandigudi, Dindigul.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
