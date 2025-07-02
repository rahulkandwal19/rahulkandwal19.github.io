import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import Skills from "../containers/skills/Skills";
import Development from "../containers/dashboardSections/development";
import Footer from "../components/footer/Footer";
const DashboardPage = () => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);


    const changeTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={isDark ? "dark-mode" : null}>
            <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
                <>
                    <Header/>
                    <Skills></Skills>
                    <Development/>
                    <Footer/>
                    <ScrollToTopButton/>
                </>
            </StyleProvider>
        </div>
    );
};

export default DashboardPage;