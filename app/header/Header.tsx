import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import BurgerIcon from "@/components/shared/BurgerIcon";
import AvatarIcon from "@/components/shared/AvatarIcon";
import Title from "@/components/shared/Title";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  return (
    <section className="absolute top-0 left-0 z-50 flex items-center justify-between w-full px-5 py-5 lg:px-24 bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-[1px]">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-1 text-base text-white hover:bg-[rgba(243,200,104,0.3)] hover:rounded-sm cursor-pointer">
            <BurgerIcon />
            <span className="max-md:hidden">Menu</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Our secret recipe <MenubarShortcut>⌘</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Find our stores <MenubarShortcut>⌘</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Order your favorites <MenubarShortcut>⌘</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Title />
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <AvatarIcon />
          </TooltipTrigger>
          <TooltipContent side="left">User</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
};

export default Header;
