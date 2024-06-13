import { Flex, theme, Typography } from "antd";
import { Color, TitleType } from "src/utils/types";
interface TitleProps {
  type: TitleType;
  title: string;
  heading?: string;
}

const Title: React.FC<TitleProps> = ({ type, title, heading }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      vertical
      gap="small"
      style={{ padding: token.paddingSM }}
      className="select-none animate-starting-point"
    >
      <Typography.Text
        style={{
          textAlign: "center",
          textWrap: "wrap",
          textShadow:
            type === TitleType.Main ? `3px 3px ${Color.TEXT}` : "none",
          fontSize:
            type === "main" ? token.fontSizeHeading1 : token.fontSizeHeading2,
        }}
      >
        {title}
      </Typography.Text>
      <Typography.Text
        style={{
          textAlign: "center",
          textWrap: "wrap",
          fontSize: token.fontSizeHeading5,
          color: Color.TEXT,
        }}
      >
        {heading}
      </Typography.Text>
    </Flex>
  );
};

export default Title;
