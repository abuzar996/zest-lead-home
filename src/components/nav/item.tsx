import { Flex, Typography, theme } from "antd";
interface ItemProps {
  item: string;
}
const Item: React.FC<ItemProps> = ({ item }) => {
  const { token } = theme.useToken();
  return (
    <Flex style={{ padding: token.paddingXXS }} flex="1" justify="start">
      <Typography.Text style={{ fontSize: token.fontSizeLG }}>
        {item}
      </Typography.Text>
    </Flex>
  );
};

export default Item;
