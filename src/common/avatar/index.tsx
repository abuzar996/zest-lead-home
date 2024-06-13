import { Avatar, Flex } from "antd";

import Person1 from "src/public/images/person1.png";
import Person2 from "src/public/images/person2.png";
import Person3 from "src/public/images/person3.png";
const CustomAvatar = () => {
  return (
    <Flex flex="1" justify="center" align="center">
      <Avatar.Group>
        <Avatar src={Person1} />
        <Avatar size="large" src={Person2} style={{ zIndex: 10000, top: -8 }} />
        <Avatar src={Person3} />
      </Avatar.Group>
    </Flex>
  );
};

export default CustomAvatar;
