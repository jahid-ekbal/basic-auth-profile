import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";
import { Card, CardContent } from "./shadcnui/card";

const UserDetailsCard = () => {
  return (
    <Card className="w-sm">
      <CardContent className="grid grid-cols-3">
        <Avatar className="col-span-1 size-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="col-span-2">
          <div className="">Dhruba Das</div>
          <div className="">dhruba@contact.com</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserDetailsCard;
