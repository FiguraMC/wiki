import React, { FC } from "react";

export type EmojiProps = {
  icon: string;
};

const Emoji: FC<EmojiProps> = ({ icon }) => {
  const path = require("@site/static/img/emoji/" + icon + ".png");

  return <img src={path?.default} style={{ height: "1em" }} />;
};

export default Emoji;
