"use client";

import { RecoilRoot } from "recoil";
import React from "react";

const ClientWrapper = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default ClientWrapper;