import { StyledPage } from "styles/global.styled";

import { useAuth } from "hooks/useAuth";

export function UserHome() {
  const { user } = useAuth();

  return (
    <>
      <StyledPage>
        <div>Usuário:{user?.name}</div>
      </StyledPage>
    </>
  );
}
