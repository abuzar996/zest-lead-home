import { Button, Flex, Typography, theme, Dropdown } from "antd";
import Image from "src/public/images/zest-leads-1.svg";
import { navItems } from "./nav-items";
import { Color } from "src/utils/types";
import { MenuOutlined } from "@ant-design/icons";
import { generateUniqueId } from "src/utils/methods/randomizer";
import Item from "./item";
const Nav = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      style={{
        padding: token.paddingSM,
        width: "100%",
      }}
      justify="center"
      gap={"small"}
      align="center"
    >
      <Flex flex="1" style={{ minWidth: "85%", maxWidth: "85%" }} gap="large">
        <Flex
          align="end"
          style={{
            backgroundColor: Color.PRIMARY,
            padding: token.paddingXXS,
            borderRadius: token.borderRadiusLG,
          }}
          gap={"small"}
        >
          <img src={Image} />
          <Flex align="end">
            <Typography.Text
              style={{
                textShadow: `2px 2px ${Color.TEXT}`,
                fontSize: token.fontSizeHeading3,
                color: "#fff",
                fontWeight: token.fontWeightStrong,
              }}
            >
              ZestLead
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex className="md:hidden" align="center" justify="end" flex="1">
          <Dropdown
            menu={{
              items: [
                { label: <Item item="Home" />, key: generateUniqueId() },
                { label: <Item item="Blogs" />, key: generateUniqueId() },
                { label: <Item item="Pricing" />, key: generateUniqueId() },
                {
                  label: (
                    <Flex flex={1} justify="start">
                      <Button>Login</Button>
                    </Flex>
                  ),
                  key: generateUniqueId(),
                },
                {
                  label: (
                    <Flex flex={1} justify="start">
                      <Button>Signup</Button>
                    </Flex>
                  ),
                  key: generateUniqueId(),
                },
              ],
            }}
          >
            <MenuOutlined
              style={{
                fontSize: token.fontSizeHeading3,
                fontWeight: token.fontWeightStrong,
              }}
            />
          </Dropdown>
        </Flex>
        <Flex flex="1" className="xxs:max-md:hidden">
          <Flex
            gap="large"
            align="end"
            flex="1"
            style={{ paddingLeft: token.paddingLG * 2 }}
          >
            {navItems.map(({ id, label }) => (
              <Typography.Text
                key={id}
                style={{
                  cursor: "pointer",
                  textShadow: `1px 1px ${Color.TEXT}`,
                }}
                className="hover:underline"
              >
                {label}
              </Typography.Text>
            ))}
          </Flex>
          <Flex justify="end" align="end" gap={"small"} flex="1">
            <Button size="large">Login</Button>
            <Button size="large">Signup</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
