'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function(props) {
  const {children} = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    onOpen();
  }, []);

  const onClose = () => {
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <Modal
      isOpen={isOpen}
      placement={'bottom'}
      onOpenChange={onOpenChange}
      size="5xl"
      onClose={onClose}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">PostDetail</ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger" variant="light" onPress={onClose}
              >
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
