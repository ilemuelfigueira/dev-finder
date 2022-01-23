import { useState } from "react";

import { GitUserResult } from "./index.types";

export function useHome() {
  const [user, setUser] = useState<GitUserResult>();

  function handleUser(user: GitUserResult) {
    setUser(user);
  }

  return { handleUser, user };
}
