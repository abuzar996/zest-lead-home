import { Button, Flex, Typography, theme } from "antd";
import { Color, BannerType } from "src/utils/types";
interface BannerProps {
  Component?: React.ComponentType;
  title: string[];
  description: string;
  buttonTitle: string;
  mode: BannerType;
}
const Banner: React.FC<BannerProps> = ({
  Component,
  title,
  description,
  buttonTitle,
  mode,
}) => {
  const { token } = theme.useToken();
  return (
    <Flex
      className="select-none"
      flex="1"
      justify="center"
      align="center"
      style={{
        padding: token.paddingLG,
        background:
          mode === BannerType.Default ? Color.SECONDARY100 : "transparent",
        borderRadius: token.borderRadiusLG,
      }}
      vertical
      gap="large"
    >
      {Component && <Component />}
      <Flex vertical gap={"small"}>
        <Flex vertical>
          {title.map((t, i) => (
            <Typography.Text
              key={i}
              style={{
                color: mode === "default" ? "#fff" : "#000",
                fontSize: token.fontSizeHeading4,
                textAlign: "center",
              }}
            >
              {t}
            </Typography.Text>
          ))}
        </Flex>
        <Typography.Text
          style={{
            color: mode === "default" ? "#fff" : Color.TEXT,
            fontSize: token.fontSizeHeading5,
            textAlign: "center",
          }}
        >
          {description}
        </Typography.Text>
      </Flex>
      <Button type={mode === BannerType.Default ? "primary" : "default"}>
        {buttonTitle}
      </Button>
    </Flex>
  );
};

export default Banner;
