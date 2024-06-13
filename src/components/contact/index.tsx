import { Flex, theme } from "antd";
import Banner from "src/common/banner";
import { BannerType } from "src/utils/types";
import CustomAvatar from "src/common/avatar";
const Contact = () => {
  const { token } = theme.useToken();

  return (
    <Flex
      flex={1}
      style={{
        padding: token.paddingSM,
        paddingTop: token.paddingLG * 2,
        paddingBottom: token.paddingLG * 2,
      }}
      justify="center"
    >
      <Flex style={{ width: "70%" }} justify="center">
        <Banner
          Component={CustomAvatar}
          mode={BannerType.Default}
          title={["Still have questions?"]}
          description="Can’t find the answer you’re looking for? Please chat to our friendly team."
          buttonTitle="Contact Us"
        />
      </Flex>
    </Flex>
  );
};

export default Contact;
