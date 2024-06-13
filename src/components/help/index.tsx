import { Flex, theme } from "antd";
import Banner from "src/common/banner";
import { BannerType } from "src/utils/types";

const Help = () => {
  const { token } = theme.useToken();

  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingSM,
        paddingTop: token.paddingLG * 2,
        paddingBottom: token.paddingLG * 2,
        background: "#f9fafb",
      }}
      justify="center"
    >
      <Flex style={{ width: "70%" }} justify="center">
        <Banner
          mode={BannerType.Transparent}
          title={["Start your Real Estate Conversion Today"]}
          description="Join over 4,000+ realtors already closing deals with ZestLead."
          buttonTitle="Get Started"
        />
      </Flex>
    </Flex>
  );
};

export default Help;
