import { Input } from "@nextui-org/react"
import React, { ReactNode } from "react"
interface IProps {
    label?: string,
    type?: string,
    id?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}
export const TextInput = ({ label, type, id, onChange, ...rest }: IProps) => {
    return (
        <>
            <Input
                label={label}
                type={type}
                id={id}
                name={id}
                onChange={onChange}
                {...rest}
                size='sm'
                labelPlacement='inside'
                variant='bordered'
                classNames={{
                    label: "text-black/50 dark:text-white/90 pb-1",
                    input: [
                        "bg-transparent",
                        "text-lg font-medium",
                        "focus:border-none",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: "border border-gray-200 outline-none",
                }}
            />
        </>
    )
}