import React from "react";
import config from "../utils/client-config";
import PortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";

const CPortableText = ({ blocks, className }) => (
  <PortableText blocks={blocks} serializers={serializers} {...config} />
);

export default CPortableText;
