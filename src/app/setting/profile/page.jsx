import { Button, Link } from '@nextui-org/react';

export default ()=>{
  return (
    <div>
      <p>profile</p>

      <Button as={Link} href="/setting/pay" color="primary">setting pay</Button>
    </div>
  )
}
