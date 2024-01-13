import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";

const SearchContainer = ({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: any }) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size='2xl'>
                <ModalContent>
                    {(onclose) => (
                        <>
                            <ModalBody>
                                <h1>Search </h1>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default SearchContainer
