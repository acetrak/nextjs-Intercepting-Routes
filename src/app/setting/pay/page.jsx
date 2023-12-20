import { Button, Link } from '@nextui-org/react';

export default ()=>{
  return (
    <div>
      pay
      <Button as={Link} href="/setting/profile" color="primary">setting profile</Button>
    </div>
  )
}
