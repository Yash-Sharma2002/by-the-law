import React from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function ModalComponent({
  onSave,
  children,
  title,
  path,
  isOpen,
  close,
}: {
  onSave: any;
  children: React.ReactNode;
  title: string;
  path?: string;
  isOpen: boolean;
  close: any;
}) {
  const { onClose } = useDisclosure();
  const [open, setOpen] = React.useState(isOpen);
  const btnRef = React.useRef<HTMLElement | null>(null);

  function closeDrawer() {
    onClose();
    close();
    setOpen(false);
  }

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <>
      <Modal 
        isOpen={open}
        onClose={closeDrawer}
        finalFocusRef={btnRef}
        size={"md"}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeDrawer} style={{
                position:"unset"
            }}>
              Close
            </Button>
            <Button className="!bg-[#004d3d] !text-white"
            onClick={onSave}
            style={{
                position:"unset"
            }}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
