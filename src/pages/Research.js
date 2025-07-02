import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import ResearchProfileSection from "../containers/researchProfile/ResearchProfileSection";
import Publications from "../containers/blogs/publications";
import Footer from "../components/footer/Footer";
const ResearchPage = () => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);


    const changeTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={isDark ? "dark-mode" : null}>
            <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
                <>
                    <Header />
                    <ResearchProfileSection/>
                    <Publications/>
                    <Footer/>
                    <ScrollToTopButton />
                </>
            </StyleProvider>
        </div>
    );
};

export default ResearchPage;