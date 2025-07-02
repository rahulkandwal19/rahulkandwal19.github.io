import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Education from "../containers/education/Education";
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Certificates from "../containers/certificates/Certificates";
import "./Main.scss";
const EducationPage = () => {
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
                        <Education />
                        <Certificates/>
                        <Footer/>
                        <ScrollToTopButton />
                    </>
            </StyleProvider>
        </div>
    );
};

export default EducationPage;