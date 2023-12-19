
import { Button, Link,  } from '@nextui-org/react';

export default function Home() {

  return (
    <main className="  p-2">
      <div className="flex gap-2">
        <Button as={Link} href="/posts/1" color="primary">Post 1</Button>
        <Button as={Link} href="/posts/2" color="primary">Post 2</Button>
        <Button as={Link} href="/posts/3" color="primary">Post 3</Button>
      </div>
    </main>
  );
}
