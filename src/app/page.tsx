import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import MainSection from "@/components/MainSection";

export default function Home() {
    return (
        <div className={`flex flex-col`}>
            <MainSection/>
            <Experience/>
            <Skills/>
            <Projects/>
        </div>
    );
}
