import { Button, Link } from '@nextui-org/react';

export default ()=>{
  return (
    <div>
      setting
      <Button as={Link} href="/setting/pay" color="primary">setting pay</Button>
      <Button as={Link} href="/setting/profile" color="primary">setting profile</Button>
    </div>
  )
}
