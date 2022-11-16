import { useState, useEffect } from "react"
import { useForm } from "@mantine/form"
import { TextInput, Button, Box, Code, Modal } from "@mantine/core"
import { User } from "../types"
import useUsers from "../hooks/useUsers"

interface ModalProps {
  param: {
    initialValues: User | {} | null
    isShowing: boolean
    hide: any
    action: string
  }
}

export default function ModalComponent({ param }: ModalProps) {
  const { createUser, updateUser } = useUsers()

  console.log("LOG", param.initialValues)

  const form = useForm({
    initialValues: param.initialValues || ""
  })

  useEffect(() => {
    if (param.initialValues) {
      form.setValues(param.initialValues)
    }

    form.setValues({})
  }, [param.initialValues])

  return param.isShowing ? (
    <>
      <Modal
        centered
        opened={param.isShowing}
        onClose={param.hide}
        title="Introduce yourself!"
      >
        <Box sx={{ maxWidth: 400 }} mx="auto">
          <form
            onSubmit={form.onSubmit((values, event) => {
              console.log("VV", values)
              if (param.action === "create") {
                createUser(values)
              } else {
                updateUser(values)
              }

              form.reset()
              param.hide()
            })}
          >
            <TextInput
              label="First name"
              placeholder="First name"
              defaultValue={""}
              {...form.getInputProps("firstname")}
            />
            <TextInput
              label="Last name"
              placeholder="Last name"
              mt="md"
              defaultValue={""}
              {...form.getInputProps("lastname")}
            />
            <TextInput
              type="text"
              label="Email"
              placeholder="Email"
              mt="md"
              defaultValue={""}
              {...form.getInputProps("email")}
            />
            <Button type="submit" mt="md">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  ) : null
}
