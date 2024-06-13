import Item from "src/common/items";
import { Divider, Flex, Typography, theme } from "antd";
import { footerData } from "./constants";
import { Color } from "src/utils/types";
import Image from "src/public/images/logo icon.png";
const Footer = () => {
  const { token } = theme.useToken();
  return (
    <Flex vertical flex="1" align="center" style={{ minWidth: "100%" }}>
      <Divider />
      <Flex
        flex={1}
        justify="center"
        style={{ minWidth: "85%", maxWidth: "85%" }}
      >
        <Flex
          flex="1"
          style={{ padding: token.paddingSM }}
          justify="center"
          align="center"
          className="select-none"
        >
          {footerData.map((data) => (
            <Flex
              vertical
              justify="center"
              align="center"
              key={data.id}
              flex={1}
              style={{ padding: token.paddingSM }}
            >
              <Typography.Text
                style={{
                  padding: token.paddingSM,
                  fontSize: token.fontSizeHeading5,
                  color: Color.PRIMARY,
                  fontWeight: token.fontWeightStrong,
                }}
              >
                {data.label}
              </Typography.Text>
              {data.children.map((label) => (
                <Item
                  key={label.id}
                  ItemIcon={label.ItemIcon}
                  label={label.label}
                />
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Divider />
      <Flex
        gap="small"
        flex="1"
        style={{
          background: Color.PRIMARY,
          padding: token.paddingXS,
          minWidth: "100%",
        }}
        align="end"
        justify="center"
      >
        <img
          src={Image}
          style={{ height: "20px", fill: "red", color: "red" }}
        />

        <Typography.Text
          style={{ color: Color.SECONDARY }}
          className="select-none"
        >
          © 2024 Untitled UI. All rights reserved.
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
