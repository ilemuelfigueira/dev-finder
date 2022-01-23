import { Combobox } from "components/Combobox";
import { UserCard } from "components/UserCard";

import { useHome } from "./index.hook";
import { Container } from "./index.styled";

export function Home() {
  const { handleUser, user } = useHome();
  return (
    <Container data-theme="dark">
      <main>
        <Combobox onChange={handleUser} />
        {user && (
          <UserCard
            avatar={user.avatar_url || ""}
            bio={user.bio || ""}
            followers_qtd={user.followers || 0}
            following_qtd={user.following || 0}
            joined={new Date(user.created_at).toLocaleDateString()}
            name={user.name || ""}
            nickname={user.login || ""}
            company={user.company || ""}
            repos_qtd={user.public_repos || 0}
            blog={user.blog || ""}
            key={user.id}
            location={user.location || ""}
            twitter={user.twitter_username || ""}
          />
        )}
      </main>
    </Container>
  );
}
