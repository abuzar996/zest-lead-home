import { Flex, theme } from "antd";
import Banner from "src/common/banner";
import { BannerType } from "src/utils/types";
const Starter = () => {
  const { token } = theme.useToken();

  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingSM,
        paddingTop: token.paddingLG * 2,
        paddingBottom: token.paddingLG * 2,
        background: "#EDE8F5",
      }}
      justify="center"
    >
      <Flex style={{ width: "70%" }} justify="center">
        <Banner
          mode={BannerType.Transparent}
          title={[
            "Join Now for Only $200/Yr",
            "And Elevate Your Real Estate Success!",
          ]}
          description="Join over 4,000+ realtors already closing deals with ZestLead."
          buttonTitle="Get Started"
        />
      </Flex>
    </Flex>
  );
};

export default Starter;
