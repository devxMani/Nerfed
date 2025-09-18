import Title from "@/components/ui/Title";
import Link from "next/link";
import GitHubCalendar from 'react-github-calendar';

export default function GitGraph() {
    return (
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
            <Title title="GitHub Contributions" />
            {/* @ts-expect-error React version conflict */}
            <Link href={'https://github.com/devxMani'} target="_blank">
                {/* @ts-expect-error React version conflict */}
                <GitHubCalendar
                    username="devxMani"
                    blockSize={10}
                    blockMargin={3}
                    theme={{
                        light: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"],
                        dark: ["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]
                    }}
                />
            </Link>
        </div>
    )
}