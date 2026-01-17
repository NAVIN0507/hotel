import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Rooms",
    description: "Explore our wide range of luxury rooms and suites at Brundhavan Garden Resort. Find the perfect accommodation for your stay in Thandigudi.",
};

export default function RoomsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
