import { QrCode, SendIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";
import { Button } from "./shadcnui/button";
import { Card, CardContent } from "./shadcnui/card";

const UserDetailsCard = () => {
  return (
    <Card className="w-sm rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150 dark:bg-black/20">
      <CardContent className="grid grid-cols-3">
        <Avatar className="col-span-1 size-24">
          <AvatarImage src="https://scontent.frdp3-1.fna.fbcdn.net/v/t39.30808-6/469403980_547351601611038_8288115088528308544_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=53a332&_nc_ohc=fpe2jCuT6LcQ7kNvwF-qkvi&_nc_oc=Adq6pHbAFbZKfPijYB9Vr1YRd4ulyxgCBnRCGq1YiiFdQD2uaBucq1Eoc4NDGh1emLoC8W_cMFXqURmqvbQqPpTl&_nc_zt=23&_nc_ht=scontent.frdp3-1.fna&_nc_gid=LEhqJJ1rOhecgW5sw3r55A&_nc_ss=8&oh=00_AfwLMow-EUbFeQ_hN3zzHx7Pl0VAqbGOdAKEPf6mp3phag&oe=69C1A96C" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="col-span-2 text-center">
          <div className="font-bold">Dhruba Das</div>
          <div className="text-muted-foreground text-sm">
            dhruba@contact.com
          </div>
          <div className="grid grid-cols-2 items-center justify-items-center pt-4">
            <Button>
              Massage <SendIcon />
            </Button>
            <Button>
              Show QR <QrCode />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserDetailsCard;
