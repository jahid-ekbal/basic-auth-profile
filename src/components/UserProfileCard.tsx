import { UserGetPayload } from "../../generated/prisma/models";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";
import { Card, CardContent, CardHeader } from "./shadcnui/card";

type UserProfileCardProps = {
  info: UserGetPayload<{
    select: {
      id: true;
      image: true;
      name: true;
      email: true;
    };
  }>;
};

const UserProfileCard = ({ info }: UserProfileCardProps) => {
  const nameArray = info.name.split(" ").map((i) => i.charAt(0));

  const placeHolderName = nameArray.join("");

  return (
    <Card className="w-sm rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150 dark:bg-black/20">
      <CardHeader className="flex flex-col items-center space-y-4 pt-8">
        <Avatar className="col-span-1 size-24">
          <AvatarImage
            src={`/${info.image}`}
            alt="Profile Picture"
          />
          <AvatarFallback className="bg-white/20 font-bold text-white">
            {placeHolderName}
          </AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent className="items-center justify-items-center">
        <div className="font-medium">{info.name}</div>
        <div className="text-sm">{info.email}</div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
