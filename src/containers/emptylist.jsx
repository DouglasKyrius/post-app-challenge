import React from "react";
import { EmptyList } from "../components";

export function EmptyListContainer() {
  return (
    <EmptyList>
      <EmptyList.Image src="/assets/images/13525-empty.gif" alt="empty" />
    </EmptyList>
  );
}
