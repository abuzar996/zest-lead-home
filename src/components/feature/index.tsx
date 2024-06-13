import { Flex, theme } from "antd";
import { featureData } from "./constants";
import Card from "src/common/card";
import Title from "src/common/title";
import { TitleType } from "src/utils/types";
const Feature = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      flex="1"
      vertical
      gap={"large"}
      style={{
        padding: token.paddingSM,
        paddingTop: token.paddingLG * 2,
        paddingBottom: token.paddingLG * 2,
      }}
    >
      <Title title="Why Choose ZestLead?" type={TitleType.Secondary} />
      <Flex vertical gap={"middle"}>
        {featureData.map((data, index) => (
          <Flex
            key={index}
            flex="1"
            gap="middle"
            className="xxs:max-smx:flex-col"
          >
            {data.map(({ id, heading, subHeading, Image }) => (
              <Card
                key={id}
                heading={heading}
                subHeadings={subHeading}
                Image={Image}
              />
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Feature;
