/* Menu Button */
import React from "react";
import { nanoid } from "nanoid";

/* WEB-X-UI components */
import { XButton, XDropdown } from "../../XForms/XForms";

/* Material UI icons */
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

class MenuButton extends React.Component {
  getSchemaButton = (item) => {
    if (item["x-dropdown"] !== undefined) {
      const dropdown = item["x-dropdown"];
      return (
        <XDropdown
          key={nanoid()}
          dropdown={this.dropdownContent(dropdown)}
          contentPosition={this.props.contentPosition || "bottom-left"}
        >
          <XButton icon={item["icon"]}>{item["title"]}</XButton>
        </XDropdown>
      );
    } else {
      return (
        <XButton key={nanoid()} icon={item["icon"]} onClick={item["action"]}>
          {item["title"]}
        </XButton>
      );
    }
  };

  dropdownContent = (dropdown) => {
    return <> {dropdown.map(this.getSchemaButton)} </>;
  };

  render() {
    
    this.dropdown = [
        {
          title: "Главная",
          action: () => {
            window.location.pathname = '/web-cross-ui/';
          },
        },
        {
          title: "Тестовые формы",
          action: () => {
            window.location.pathname = '/web-cross-ui/forms';
          },
        },
        {
          title: "Разработчик",
          action: () => {
            window.location.href = "https://github.com/kensoi/";
          },
        },
        {
          title: "Репозиторий",
          action: () => {
            window.location.href = "https://github.com/kensoi/web-cross-ui/";
          },
        },
        {
          icon: <HelpOutlineIcon />,
          title: "О программе",
          action: () => {
            this.props.toolkit.showCard("hello")
          },
        },
      ];
    return (
      <XDropdown
        dropdown={this.dropdownContent(this.dropdown)}
        contentPosition={this.props.contentPosition || "bottom-left"}
        listDirection="row"
      >
        <XButton icon={<MenuIcon />} hideEmptyPaddings={true} />
      </XDropdown>
    );
  }
}

export default MenuButton;
