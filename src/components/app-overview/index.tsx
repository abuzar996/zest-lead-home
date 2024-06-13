import Title from "src/common/title";
import { Button, Flex, theme } from "antd";
import { Color, TitleType } from "src/utils/types";
import Dashboard from "src/public/images/Dashboard.jpg";
import { PlayCircleOutlined } from "@ant-design/icons";
const AppOverview = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      vertical
      align="center"
      flex="1"
      style={{
        padding: token.paddingSM,
        paddingTop: token.paddingLG * 2,
        paddingBottom: token.paddingLG * 2,
      }}
      gap="large"
    >
      <Title
        title="ZestLead: Turning Leads into Deals!"
        type={TitleType.Main}
        heading="Empower your real estate business with high-quality leads and turn them into lucrative deals effortlessly."
      />
      <Flex flex="1" justify="center" gap="small" align="center">
        <Button
          type="primary"
          size="large"
          style={{ border: `1px solid ${Color.PRIMARY}` }}
        >
          <Flex gap="small">
            <PlayCircleOutlined />
            Demo
          </Flex>
        </Button>
        <Button size="large">
          <Flex gap="small">Sign up</Flex>
        </Button>
      </Flex>
      <Flex
        flex="1"
        justify="center"
        style={{
          background: "#000",
          width: "fit-content",
          borderRadius: token.borderRadiusLG,
          padding: token.paddingMD,
        }}
        className=" animate-starting-point"
      >
        <img src={Dashboard} />
      </Flex>
    </Flex>
  );
};

export default AppOverview;
