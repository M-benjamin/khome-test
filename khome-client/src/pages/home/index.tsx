import { useState, useMemo, useEffect } from "react"
import {
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Container,
  createStyles,
  Button
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconPencil, IconTrash } from "@tabler/icons"

import Avatar from "react-avatar"
import ModalComponent from "../../components/Modal.component"
import useModal from "../../hooks/useModal"
import useUsers from "../../hooks/useUsers"

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}))

interface UsersTableProps {
  data: {
    firstname: string
    lastname: string
    email: string
  }[]
}

export default function UsersTable() {
  const { deleteUser, users } = useUsers()

  const theme = useMantineTheme()
  const [modalData, setModalData] = useState(null)

  const { isShowing: isUpdate, toggle: toggleUpdate } = useModal()
  const { isShowing: isCreate, toggle: toggleCreate } = useModal()

  const updateUser = (item: any) => {
    toggleUpdate()
    setModalData(item)
  }

  const deleteCurrentUser = (item: any) => {
    console.log("DELETE", item)
    deleteUser(item._id)
  }

  useEffect(() => {}, [users])

  const rows = useMemo(() => {
    return (
      users &&
      users.map((item: any) => (
        <tr key={item._id}>
          <td>
            <Group spacing="sm">
              <Avatar size="30" src={item.firstname} round="30" />
              <Text size="sm" weight={500}>
                {item.firstname}
              </Text>
            </Group>
          </td>
          <td>
            <Text size="sm" color="dimmed">
              {item.lastname}
            </Text>
          </td>

          <td>
            <Anchor<"a">
              size="sm"
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              {item.email}
            </Anchor>
          </td>

          <td>
            <Group spacing={0} position="right">
              <ActionIcon onClick={() => updateUser(item)}>
                <IconPencil size={16} stroke={1.5} />
              </ActionIcon>
              <ActionIcon color="red" onClick={() => deleteCurrentUser(item)}>
                <IconTrash size={16} stroke={1.5} />
              </ActionIcon>
            </Group>
          </td>
        </tr>
      ))
    )
  }, [users])

  return (
    <Container>
      <ModalComponent
        param={{
          initialValues: modalData,
          isShowing: isUpdate,
          hide: toggleUpdate,
          action: "update"
        }}
      />
      <ScrollArea>
        <ModalComponent
          param={{
            initialValues: {},
            isShowing: isCreate,
            hide: toggleCreate,
            action: "create"
          }}
        />
        <Group position="center">
          <Button onClick={toggleCreate}>Create user</Button>
        </Group>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Container>
  )
}
