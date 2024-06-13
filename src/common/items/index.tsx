import { Typography, Flex, theme } from "antd";
import Icon from "@ant-design/icons";
import { Color } from "src/utils/types";
import { IconType } from "react-icons/lib";
interface ItemProps {
  ItemIcon: typeof Icon | IconType;
  label: string;
}
const Item: React.FC<ItemProps> = ({ ItemIcon, label }) => {
  const { token } = theme.useToken();
  return (
    <Flex
      style={{ padding: token.paddingXS, cursor: "pointer" }}
      gap="small"
      align="center"
    >
      <ItemIcon style={{ color: Color.SECONDARY }} />
      <Flex align="end">
        <Typography.Text
          className="hover:underline"
          style={{ color: Color.SECONDARY, fontSize: token.fontSizeLG }}
        >
          {label}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default Item;
