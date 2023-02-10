
import GreetingsMessage from "./components/GreetingsMessage";
import SettingsMessage from "./components/SettingsMessage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SliderTest from "./components/SliderTest";
import TumbletTest from "./components/TumbletTest";

function checkDefault(imported) {
    return imported.default ? imported.default : imported
}

export default function layoutList (layout) {
    switch (layout) {
        case "hello": 
            return checkDefault(GreetingsMessage);
        case "settings": 
            return checkDefault(SettingsMessage);
        case "register":
            return checkDefault(RegisterForm);
        case "tumbler":
            return checkDefault(TumbletTest);
        case "login": 
            return checkDefault(LoginForm);
        case "slider": 
            return checkDefault(SliderTest);

        default:
            return (props) => <>
                <h1>
                    Макет не найден!
                </h1>
            </>
    }
  }