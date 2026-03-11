import Image from "next/image";

export default function Sidebar() {
    return (
        <aside className="space-y-10">
            {/* Profile Card */}
            <div>
                {/* Profile Photo */}
                <div className="relative w-48 h-48 mb-5 rounded-2xl overflow-hidden">
                    <Image
                        src="/images/profile.png"
                        alt="Alex Dev"
                        fill
                        className="object-cover grayscale"
                        priority
                    />
                </div>

                {/* Name & Title */}
                <h1 className="font-serif text-5xl font-bold text-foreground mb-1">
                    Alex Dev
                </h1>
                <p className="text-base font-semibold text-accent mb-3">
                    Full Stack Engineer
                </p>

                {/* Bio */}
                <p className="text-base text-muted leading-relaxed max-w-[360px] mb-4">
                    Building digital products with a focus on minimalism and user
                    experience. Currently seeking new adventures in the Grand Line of
                    tech.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mb-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    {/* Twitter / X */}
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="Twitter"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Status Card */}
            <div className="bg-gray-500/10 rounded-2xl p-5 space-y-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                        Status
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green"></span>
                        </span>
                        <span className="text-base font-medium text-foreground">
                            Open to new bounties
                        </span>
                    </div>
                </div>

                {/* Resume Button */}
                <a
                    href="#"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-accent text-white text-base font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    Resume
                </a>

                {/* Contact Button */}
                <a
                    href="#"
                    className="flex items-center justify-center w-full py-2.5 px-4 bg-background text-foreground text-base font-semibold rounded-lg hover:bg-tag-bg transition-colors"
                >
                    Contact Me
                </a>
            </div>

            {/* Map */}
            <div className="relative rounded-xl overflow-hidden border border-border">
                <div className="aspect-[16/10] relative">
                    <Image
                        src="/images/map.png"
                        alt="Based in Grand Line"
                        fill
                        className="object-cover"
                    />
                    {/* Label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-xs font-mono text-white/90 tracking-wide">
                            Based in Grand Line
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
