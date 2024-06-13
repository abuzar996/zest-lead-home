import { Flex, Typography, theme } from "antd";

import { Color } from "src/utils/types";

interface CardProps {
  subHeadings: string[];
  Image: string;
  heading: string;
}
const Card: React.FC<CardProps> = ({ subHeadings, Image, heading }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      className="select-none"
      vertical
      align="center"
      style={{ padding: token.paddingXS }}
      gap="middle"
    >
      <Flex
        justify="center"
        style={{
          borderRadius: "50%",
          background: "rgba(61, 82, 161,.2)",
          // opacity: 0.1,
          maxHeight: "fit-content",
          padding: token.paddingXS,
        }}
      >
        <Flex
          justify="center"
          style={{
            zIndex: 1000,
            height: "fit-content",
            borderRadius: "50%",
            background: "rgb(112, 145, 230,.3)",
            padding: token.paddingXS,
          }}
        >
          <img src={Image} />
        </Flex>
      </Flex>
      <Flex justify="center">
        <Typography.Text
          style={{
            textWrap: "wrap",
            textAlign: "center",
            fontSize: token.fontSizeHeading4,
            //  color: Color.PRIMARY,
          }}
        >
          {heading}
        </Typography.Text>
      </Flex>
      <Flex flex="1" align="end" vertical gap="small">
        {subHeadings.map((headings, i) => (
          <Typography.Text
            key={i}
            style={{
              textWrap: "wrap",
              textAlign: "center",
              fontSize: token.fontSizeLG,
              color: Color.TEXT,
            }}
          >
            {headings}
          </Typography.Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Card;
