import Link from 'next/link';

const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow z-10">
            <div className="container flex items-center justify-between h-14 px-4 md:px-6">
                <nav className="flex items-center space-x-4 ml-auto">
                    {/* Link 태그의 href 속성에 각 섹션으로 이동할 경로를 지정합니다. */}
                    <Link href="#about-me" className="font-medium">About Me</Link>
                    <Link href="#skills" className="font-medium">Skills</Link>
                    <Link href="#experience" className="font-medium">Experience</Link>
                    <Link href="#projects" className="font-medium">Projects</Link>
                    <Link href="#contact" className="font-medium">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
