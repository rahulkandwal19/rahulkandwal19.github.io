import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Blogs from "../containers/blogs/Blogs";
import "./Main.scss";
import Footer from "../components/footer/Footer";
const BlogPage = () => {
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
                    <Blogs/>
                    <Footer/>
                    <ScrollToTopButton />
                </>
            </StyleProvider>
        </div>
    );
};

export default BlogPage;