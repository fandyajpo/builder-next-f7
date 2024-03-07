"use client";
import { builder, Builder } from "@builder.io/react";
import Counters from "./regist";
import Test from "./test";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counters, {
  name: "Counters",
});

Builder.registerComponent(Test, {
  name: "Test",
});
