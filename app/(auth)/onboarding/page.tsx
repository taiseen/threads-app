// @ts-ignore
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="text-white">
      Onboarding
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
