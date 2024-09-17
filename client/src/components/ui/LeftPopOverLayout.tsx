import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function LeftPopOverLayout({
  onSave,
  children,
  title,
  path,
  isOpen,
  close
}: {
  onSave: any;
  children: React.ReactNode;
  title: string;
  path: string;
  isOpen: boolean;
  close: any;
}) {


  const { onClose } = useDisclosure();
  const [open, setOpen] = React.useState(
    isOpen
  );
  const btnRef = React.useRef<HTMLElement | null>(null);

  function closeDrawer() {
    onClose();
    close();
    setOpen(false);
  }
  
  React.useEffect(() => {
    setOpen(isOpen);
  }
  ,[isOpen])

  return (
    <>
      <Drawer
        isOpen={open}
        placement="right"
        onClose={closeDrawer}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>{children}</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeDrawer}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onSave}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
